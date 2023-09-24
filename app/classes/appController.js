import events from "events";
import { Button } from "~/KIT";
import { brightnessLevels, brightnessLevelsSecondary } from "~/store/defaults";
import {
  createZustand,
  changeCssRootValue,
  detectColorScheme,
  updateUrlBarColor,
} from "~/store/utils";
import ModalsManager from "./newModalsManager";
import ToastManager from "./ToastManager";

const updateHtmlClass = (performanceMode, onChangeReduceMotion) => {
  if (performanceMode === "system") {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      document.documentElement.classList.remove("no-reduced-motion");
      document.documentElement.classList.add("reduced-motion");
    } else {
      document.documentElement.classList.add("no-reduced-motion");
      document.documentElement.classList.remove("reduced-motion");
    }

    // add listener to system changes in reduced motion
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const handleReducedMotionChange = (e) => {
      const isReducedMotion = e.matches;
      if (isReducedMotion) {
        document.documentElement.classList.remove("no-reduced-motion");
        document.documentElement.classList.add("reduced-motion");
      } else {
        document.documentElement.classList.add("no-reduced-motion");
        document.documentElement.classList.remove("reduced-motion");
      }
      onChangeReduceMotion(!isReducedMotion);
    };

    if (reducedMotionQuery.addEventListener) {
      reducedMotionQuery.addEventListener("change", handleReducedMotionChange);
    }
  } else {
    if (performanceMode === "on") {
      document.documentElement.classList.remove("reduced-motion");
      document.documentElement.classList.add("no-reduced-motion");
    } else {
      document.documentElement.classList.add("reduced-motion");
      document.documentElement.classList.remove("no-reduced-motion");
    }
  }
};
const listenToOSChangeScheme = () => {
  if (typeof window !== "undefined") {
    const preferecColorScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleColorSchemeChange = (e) => {
      const colorScheme = e.matches ? "dark" : "light";
      // const isDarkMode = e.matches;
      // changeCssRootValue("isDarkMode", isDarkMode);

      window.dispatchEvent(
        new CustomEvent("OS_THEME_CHANGE", { detail: colorScheme })
      );

      // updateUrlBarColor(isDarkMode);
    };

    if (preferecColorScheme.addEventListener) {
      preferecColorScheme.addEventListener("change", handleColorSchemeChange);
    }
    // else {
    // preferecColorScheme.addListener(handleColorSchemeChange);
    // }

    // window
    //   .matchMedia("(prefers-color-scheme: dark)")
    //   .addEventListener("change", function (e) {

    //   });
  }
};
class AppController {
  constructor() {
    this.ee = new events();
    this.User = undefined;
    this.route = { path: "mainLoader" };
    // this.onNavigate = this.onNavigate.bind(this);
    // this.requests = new Requests(REQUEST_URL, this);
    this.preferences = createZustand("PREFERENCE");
    this.ToastManager = new ToastManager();
    this.ModalsManager = new ModalsManager(this);
    // this.navigate = this.navigate.bind(this);
    // this.updateTheme = this.updateTheme.bind(this);
    // this.toggleTheme = this.toggleTheme.bind(this);
    // this.logOut = this.logOut.bind(this);
    // this.navigateHistory = [];
    listenToOSChangeScheme();
  }

  // onNavigate(cb) {
  //   this.ee.on("navigate", cb);
  // }
  // navigate(_path, _props = {}, allowPushed = true) {
  //   if (allowPushed && _path !== "mainLoader") {
  //     window.history.pushState(
  //       this.navigateHistory.length,
  //       "",
  //       window.location.href
  //     );
  //     this.navigateHistory.push({ path: _path, props: _props });
  //   }
  //   this.route = {
  //     path: _path,
  //     ..._props,
  //   };
  //   this.ee.emit("navigate", this.route);

  //   // console.log(_path)
  // }
  updateTheme(__theme) {
    // console.log('why??? updateTheme', __theme)
    const { appearance, setKey } = this.preferences.getState();

    setKey("appearance", { ...appearance, theme: __theme });

    changeCssRootValue(
      "--main-bg-color-l",
      `${brightnessLevels[__theme][appearance.colorBrightness]}%`
    );
    changeCssRootValue(
      "--secondary-bg-color-l",
      `${
        brightnessLevelsSecondary[__theme][appearance.secondaryColorBrightness]
      }%`
    );

    document.documentElement.setAttribute("data-theme", __theme);
  }

  initializePreference() {
    // initialize appearance
    return new Promise((resolve, reject) => {
      const {
        prefersTheme,
        colorIntensity,
        mainColor,
        colorBrightness,
        fontSize,
        fontFamily,
        fontWeight,
        letterSpacing,
        theme,

        secondaryColor,
        secondaryColorBrightness,
        secondaryColorIntensity,
      } = this.preferences.getState().appearance;
      const { highPerformance } = this.preferences.getState().general;

      updateHtmlClass(highPerformance, (isReducedMotion) => {
        this.ToastManager.Toast({
          title: `Animation performance - (${isReducedMotion ? "ON" : "OFF"})`,
          message:
            "The animation performance has been changed. Some animations may not work properly. please reaload the page to fix the issue.",
          // type: "info",
          autoClose: false,
          content: ({ closeToast }) => (
            <Button
              className="small outlined mt4 alignSelfStart"
              onClick={() => {
                closeToast();
                window.location.reload();
              }}
            >
              Reload now
            </Button>
          ),
        });
      });

      if (prefersTheme === "system") {
        detectColorScheme().then((_theme) => {
          this.updateTheme(_theme);
        });
      } else {
        this.updateTheme(prefersTheme);
      }

      if (typeof window !== "undefined") {
        window.addEventListener("OS_THEME_CHANGE", ({ detail }) => {
          if (
            this.preferences.getState().appearance.prefersTheme === "system"
          ) {
            this.updateTheme(detail);

            updateUrlBarColor(
              `hsl(${mainColor}deg, ${colorIntensity}%, ${brightnessLevels[theme][colorBrightness]}%)`
            );
          }
        });
      }
      changeCssRootValue("--letter-spacing", `${letterSpacing}em`);
      changeCssRootValue("--text-base-size", `${fontSize}em`);
      changeCssRootValue("--font-weight", fontWeight);
      changeCssRootValue("--font-family", fontFamily);
      // changeCssRootValue(
      //   "--main-bg-color-l",
      //   `${brightnessLevels[theme][colorBrightness]}%`
      // );
      changeCssRootValue("--main-bg-color-h", `${mainColor}deg`);
      changeCssRootValue("--main-bg-color-s", `${colorIntensity}%`);

      // changeCssRootValue(
      //   "--secondary-bg-color-l",
      //   `${brightnessLevels[theme][secondaryColorBrightness]}%`
      // );
      changeCssRootValue("--secondary-bg-color-h", `${secondaryColor}deg`);
      changeCssRootValue(
        "--secondary-bg-color-s",
        `${secondaryColorIntensity}%`
      );
      updateUrlBarColor(
        `hsl(${mainColor}deg, ${colorIntensity}%, ${brightnessLevels[theme][colorBrightness]}%)`
      );
      resolve();
    });
  }

  initialize() {
    return new Promise(async (resolve, reject) => {
      await this.initializePreference();
      
      
      // console.log('re render whyyy?!')
      // const _token = this.getToken();
      const _token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNlbnRheCIsInBybXMiOlsiYWxsdGVyIl0sImlhdCI6MTY1OTMzOTM5OCwiZXhwIjoxNjU5MzgyNTk4fQ.FqN6-RFSYSNqhmt75aqPqYKCz-gAhqLAk97204h7zFE";
      if (_token) {
        // this.authorize(_token);
        // this.registerKeyboardEvents();
      } else {
        // this.navigate("auth/login", {}, false);
      }
      // window.onpopstate = (res) => {
      //   this.navigate(
      //     this.navigateHistory[res.state].path,
      //     this.navigateHistory[res.state].props,
      //     false
      //   );
      // };

      resolve();
    });
  }
}

export default AppController;
