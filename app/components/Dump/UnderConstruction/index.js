import React from "react";
import Lottie from "lottie-react";
import * as animData from "~/assets/anims/underConstruction.json";

export default function Index() {
  return (
    <div className="flex column alignCenter w100 p4 textAlign center">
      <Lottie
        style={{
          width: "240px",
        }}
        animationData={animData}
        loop
        autoPlay
      />

      <h3 className="fs-400 fontBold mt2 mb1">Under Construction</h3>
      <p className="textSecondary">
        This section is under construction, please come back later
      </p>
    </div>
  );
}
