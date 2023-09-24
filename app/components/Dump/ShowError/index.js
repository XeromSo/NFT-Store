import React from "react";
import Lottie from "lottie-react";
import * as errorHappenedAnim from "~/assets/anims/errorHappened.json";
import { Button } from "~/KIT";
export default function Index({ error }) {
  console.log(error)
  const { message } = error;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: errorHappenedAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSendErrorToServer = () => {
    console.log("handleSendErrorToServer");
    localStorage.clear();
    window.location.reload()
  }
  return (
    <div
      className="w100 flex column alignCenter justifyCenter textAlign center"
      style={{ height: "100vh" }}
    >
      <div className="relative p5">
        <Lottie
          // options={defaultOptions}
          loop
          autoplay
          animationData={errorHappenedAnim}
          // height={240}
          // width={animWidth}
          // isStopped={this.state.isStopped}
          // isPaused={this.state.isPaused}
        />
      </div>

      <div className="flex column alignCenter p5 pt0">
        <h4 className={`mb2`}>Something went wrong</h4>
        <p className={`textSecondary`}>{message}</p>
        <div className="flex alignCenter mt5">
          <Button onClick={handleSendErrorToServer} className="contained success">Send error</Button>
          <Button onClick={()=>{
            localStorage.clear();
            window.location.reload()
          }} className="ml2 outlined success">Save me</Button>
        </div>
      </div>
    </div>
  );
}
