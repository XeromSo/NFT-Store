import AppController from "~/classes/appController";
import {
  useEffect,
  useRef,
  createContext,
  useState,
  useContext,
  JSXElementConstructor,
  ReactNode,
} from "react";
import { DancingDots } from "~/components";
import { MotionConfig } from "framer-motion";
import useReducedMotion from "~/hooks/useReducedMotion";
// export type GlobalContent = {
//   preferences: () => {
//     general: {
//       navDockMode: boolean;
//       streamerMode: boolean;
//     };
//     appearance: {
//       colorBrightness: number;
//       colorIntensity: number;
//       fontFamily: string;
//       fontSize: number;
//       fontWeight: number;
//       letterSpacing: string;
//       mainColor: number;
//       prefersTheme: "system" | "light" | "dark";
//       theme: "light" | "dark";
//     };

//     sound: {
//       default: "";
//       success: "";
//       error: "";
//       warning: "";
//       info: "";
//     };

//     setKey: (key: string, value: any) => void;
//   };
//   ToastManager: {
//     Toast: (msg: string) => void;
//   };
//   ModalsManager: {
//     show: (
//       component: JSXElementConstructor<any>,
//       props?: {
//         closeModal?: () => void;
//       }
//     ) => void;
//   };
//   updateTheme: (theme: string) => void;
// };

const AppContext = createContext();
const AppProvider = AppContext.Provider;
function AppContextProvider(props) {
  const [app, setApp] = useState();
  // const shouldReduceMotion = useReducedMotion();
  const repeatRef = useRef(false);
  const { highPerformance } = app?.preferences.getState().general || {};

  useEffect(() => {
    if (repeatRef.current || props.value) {
      return;
    }
    repeatRef.current = true;
    const _app = new AppController();
    _app.initialize().then((__app) => {
      // const { general } = _app.preferences.getState();
      // document.getElementsByTagName(
      //   "html"
      // )[0].className += `performance-${general.highPerformance}`;
      return setApp(_app);
    });
  }, []);

  if (props.value) {
    // const highPerformanceMode =
    //   props.value.preferences().general.highPerformance;
    // console.log(highPerformance);
    return (
      <AnimationProvider performanceMode={highPerformance}>
        <AppProvider value={props.value}>{props.children}</AppProvider>
      </AnimationProvider>
    );
  }
  if (!app)
    return (
      <div
        className="flex column alignCenter justifyCenter"
        style={{ height: "100vh" }}
      >
        <DancingDots />
        <span className="fs-300 mt2">Initializing...</span>

        <p>Repeat ref: {String(repeatRef.current)}</p>
      </div>
    );

  // console.log(highPerformance);

  return (
    <AnimationProvider performanceMode={highPerformance}>
      <AppProvider value={app}>{props.children}</AppProvider>
    </AnimationProvider>
  );
}

function AnimationProvider({ performanceMode, children }) {
  // const shouldReduceMotion = useReducedMotion(performanceMode);
  return (
    <MotionConfig
      reducedMotion={
        performanceMode === "on"
          ? "never"
          : performanceMode === "off"
          ? "always"
          : "user"
      }
    >
      {children}
    </MotionConfig>
  );
}
function useAppContext() {
  return useContext(AppContext);
}
export {
  AppContext,
  AppContextProvider,
  useAppContext,
  AppProvider,
  AnimationProvider,
};
