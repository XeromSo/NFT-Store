import { useEffect, useRef } from "react";
const { ScrollRestoration, useLocation } = require("@remix-run/react");
export default function CustomScrollRestoration() {
  const isFirstRenderRef = useRef(true);
  const location = useLocation();

  useEffect(() => {
    isFirstRenderRef.current = false;
  }, []);

  if (
    !isFirstRenderRef.current &&
    location.state != null &&
    typeof location.state === "object" &&
    location.state.scroll === false
  ) {
    return null;
  }

  return <ScrollRestoration />;
}
