import React from "react";
import mainCss from "~/KIT/styles/index.css";
// import manifest from "~/assets/manifest.webmanifest";
import favIcon from "~/assets/favicon.ico";
import { AppContextProvider, useAppContext } from "~/context/appContext";
import { Footer, Navbar, Page404, ShowError, CustomLink } from "~/components";
import { IconContext } from "react-icons/lib";
import NProgress from "nprogress";
import { json } from "@remix-run/node";
import "regenerator-runtime";
import { MotionConfig } from "framer-motion";
import { Button } from "~/KIT";
import { BiHomeAlt, BiLeftArrowAlt } from "react-icons/bi";
import CustomScrollRestoration from "~/components/CustomScrollRestoration";
let isMount = true;
const {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  // ScrollRestoration,
  useLoaderData,
  useBeforeUnload,
  useTransition,
  useCatch,
  useNavigate,
  useLocation,
  useMatches,
} = require("@remix-run/react");
export function meta({ data }) {
  return {
    charset: "utf-8",
    title: "NFT marketplace for digital art",
    description:
      "NFT marketplace for artists and collectors to buy and sell digital art and collectibles online. Buy, sell, and discover exclusive digital art and collectibles.",
    viewport: "width=device-width,initial-scale=1",
    "theme-color": "#000000",
    "og:title": "NFT marketplace for digital art",
    "og:description":
      "NFT marketplace for artists and collectors to buy and sell digital art and collectibles online. Buy, sell, and discover exclusive digital art and collectibles.",
    "og:image": favIcon,
    "og:url": "https://nft-market.chabk.ir/",
    "og:type": "website",
    "og:site_name": "NFT Market",
    "og:locale": "en_US",
    "twitter:card": "summary_large_image",
    "twitter:site": "@nft_market",
    "twitter:creator": "@nft_market",
    "twitter:title": "NFT marketplace for digital art",
    "twitter:description":
      "NFT marketplace for artists and collectors to buy and sell digital art and collectibles online. Buy, sell, and discover exclusive digital art and collectibles.",
    "twitter:image": favIcon,
    "twitter:image:alt": "NFT Market",
    keywords: "NFT, collection, art, digital art, marketplace",
    author: "NFT Market",
    robots: "index, follow",
    googlebot: "index, follow",
    google: "nositelinkssearchbox",
    // google: "notranslate",
    referrer: "no-referrer",
    "msapplication-TileColor": "#000000",
    "msapplication-TileImage": favIcon,
    // "msapplication-config": manifest,
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black",
    "apple-mobile-web-app-title": "NFT Market",
    "application-name": "NFT Market",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    HandheldFriendly: "True",
    MobileOptimized: "320",
    "X-Frame-Options": "SAMEORIGIN",
    "X-Content-Type-Options": "nosniff",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
  };
}
export function links() {
  return [
    { rel: "stylesheet", href: mainCss },
    // { rel: "manifest", href: manifest },
    { rel: "icon", href: favIcon },
  ];
}
export default function App() {
  const { pathname } = useLocation();
  const isInDashboard = pathname.startsWith("/dashboard");
  return (
    <Document>
      <IconContext.Provider value={{ size: "1.4em" }}>
        <AppContextProvider>
          <Navbar />
          <main className="main-content">
            <Outlet />
          </main>
          {!isInDashboard && <Footer />}
          {/* <Footer /> */}
        </AppContextProvider>
      </IconContext.Provider>
    </Document>
  );
}
export function Document({ title, children }) {
  const transition = useTransition();
  React.useEffect(() => {
    if (transition.state === "loading") {
      NProgress.start();
    }
    if (transition.state === "idle") {
      NProgress.done();
    }
  }, [transition.state]);

  let location = useLocation();
  let matches = useMatches();

  React.useEffect(() => {
    let mounted = isMount;
    isMount = false;
    if ("serviceWorker" in navigator) {
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller?.postMessage({
          type: "REMIX_NAVIGATION",
          isMount: mounted,
          location,
          matches,
          manifest: window.__remixManifest,
        });
      } else {
        let listener = async () => {
          await navigator.serviceWorker.ready;
          navigator.serviceWorker.controller?.postMessage({
            type: "REMIX_NAVIGATION",
            isMount: mounted,
            location,
            matches,
            manifest: window.__remixManifest,
          });
        };
        navigator.serviceWorker.addEventListener("controllerchange", listener);
        return () => {
          navigator.serviceWorker.removeEventListener(
            "controllerchange",
            listener
          );
        };
      }
    }
  }, [location]);

  return (
    <html lang="en">
      <head>
        <Meta />
        <link rel="manifest" href="/resources/manifest.webmanifest" />
        <Links />
      </head>
      <body>
        {children}
        <div id="modalContainer"></div>
        <CustomScrollRestoration /> <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  const navigate = useNavigate();
  return (
    <html lang="en">
      <head>
        <Meta />
        <title>Oops!</title>
        <link rel="manifest" href="/resources/manifest.webmanifest" />
        <Links />
      </head>
      <body>
        <AppContextProvider>
          <Navbar />
          <main
            className="main-content flex column alignCenter justifyCenter"
            style={{ minHeight: "80vh" }}
          >
            <Page404
              maxWidth="40em"
              titleClassName="fs-500"
              descriptionClassName="fs-300"
              description="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
              animWidth="24em"
              title={caught.statusText}
            />
            <div className="flex alignCenter">
              <Button
                onClick={() => navigate(-1)}
                startIcon={<BiLeftArrowAlt size="1.4em" />}
                className="outlined mr1"
              >
                Go back
              </Button>
              <CustomLink to="/">
                <Button
                  startIcon={<BiHomeAlt size="1.4em" />}
                  className="outlined"
                >
                  Home page
                </Button>
              </CustomLink>
            </div>
          </main>
        </AppContextProvider>
        <div id="modalContainer"></div>
        <Scripts />
      </body>
    </html>
  );
}
export function ErrorBoundary({ error }) {
  return (
    <Document title="Uh-oh!">
      <ShowError error={error} />
    </Document>
  );
}
