import { useState, useEffect } from "react";

const useReducedMotion = (performanceMode) => {
  // Local state to store the reduced motion setting.
  const [reducedMotion, setReducedMotion] = useState(true);

  // Callback for media query cahnge events.
  function queryCnangeHandler(event) {
    // Set the state to the value of the media query.
    setReducedMotion(event.target.matches);

    // updateHtmlClass(event.target.matches);
  }

  function updateHtmlClass(matches) {
    if (performanceMode === "system") {
      if (matches) {
        document.documentElement.classList.remove("no-reduced-motion");
        document.documentElement.classList.add("reduced-motion");
      } else {
        document.documentElement.classList.add("no-reduced-motion");
        document.documentElement.classList.remove("reduced-motion");
      }
    }
  }

  //   useEffect(() => {
  //     if (performanceMode === "on") {
  //       setReducedMotion(false);
  //     } else if (performanceMode === "off") {
  //       setReducedMotion(true);
  //     }
  //   }, [performanceMode]);

  useEffect(() => {
    // Grab the reduced motion media query,
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery) {
      // Set the state to the value of the media query.
      setReducedMotion(mediaQuery.matches);

    //   updateHtmlClass(mediaQuery.matches);

      // Lissten for changes in the media query.
      mediaQuery.addEventListener("change", queryCnangeHandler);

      // Remove the event listener when the component unmounts.
      return () => mediaQuery.removeEventListener("change", queryCnangeHandler);
    }
  }, []);

  return reducedMotion;
};

export default useReducedMotion;
