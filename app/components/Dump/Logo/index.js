import React from "react";
import logoHref from "~/assets/fakes/logo2.png";
export default function Index() {
  return (
    <div className="flex alignCenter">
      <img
      alt="Logo"
        src={logoHref}
        // height={40}
        style={{ height: "2.25em" }}
        // width={40}
      />
      <span className="ml3 fs-400 fontBold">Surin</span>
      <span className="fs-400 textSecondary fontBold">.DEV</span>
    </div>
  );
}
