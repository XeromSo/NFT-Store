import * as notFoundAnim from "~/assets/anims/404-2.json";
import Lottie from "lottie-react";

export default function index({
  title = "Not Found",
  animWidth = 240,
  titleClassName = "fs-400",
  descriptionClassName = "fs-150",
  maxWidth = "20em",
  description = "Sorry we are unable to find the page you are looking for. Please check the URL in the address bar and try again.",
}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFoundAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className="flex column alignCenter textAlign center"
      style={{ maxWidth, overflow: "visible" }}
    >
      <div className="relative p5">
        <Lottie
          // options={defaultOptions}
          // height={240}
          // width={animWidth}
          style={{
            width: animWidth,
          }}

          animationData={notFoundAnim}
          loop
          autoPlay
          // isStopped={this.state.isStopped}
          // isPaused={this.state.isPaused}
        />
      </div>

      <div className="flex column alignCenter p5 pt0">
        <h4 className={`mb2 ${titleClassName}`}>
          {/* Ops! */}
          {/* <br /> */}
          {title}
        </h4>
        <p className={`textSecondary ${descriptionClassName}`}>
          {description}
        </p>

        {/* <Button className="mt5 contained w100">Watch the listing</Button> */}
      </div>
    </div>
  );
}
