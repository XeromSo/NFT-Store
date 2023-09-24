/** @type {import('@remix-run/dev').AppConfig} */

// const { getDependenciesToBundle } = require("@remix-run/dev");

module.exports = {
  ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.scss", "**/*.css.map"],
  serverDependenciesToBundle: [
    "swiper",
    "swiper/react",
    "ssr-window",
    "dom7",
    "nanoid",
  ],
  // serverDependenciesToBundle: [...getDependenciesToBundle("swiper")],
  // serverModuleFormat: "esm",
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
