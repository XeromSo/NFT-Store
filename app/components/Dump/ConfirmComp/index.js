import React from "react";
import { Button } from "~/KIT";
import * as animationData from "~/assets/anims/confirms/warning2.json";
import Lottie from "lottie-react";

export default function Index({
  title,
  message,
  variant,
  onConfirm,
  onCancel,
}) {
  // const defaultOptions = {
  //   loop: false,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <div className="flex column alignCenter p5">
      <Lottie
        style={{
          width: "200px",
          height: "200px",
        }}
        loop={false}
        autoplay
        animationData={animationData}

        // eventListeners={[
        //   {
        //     eventName: "complete",
        //     callback: () => handlePlayOtherAnim(),
        //   },
        // ]}
        // isStopped={handlePlayOtherAnim}
        // isPaused={this.state.isPaused}
      />
      <h5>{title}</h5>
      <p className="textSecondary mt2">{message}</p>

      <Button onClick={onConfirm} className="contained large warning mt6 w100">
        Confirm
      </Button>
    </div>
  );
}
