import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import nextId from "react-id-generator";
import { Toast } from "~/components";
import { gsap } from "gsap/dist/gsap";
import Draggable from "gsap/dist/Draggable";

class ToastManager {
  constructor() {
    this.Toaster = this.init();
  }

  init() {
    const node = document.createElement("section");
    node.classList.add("gui-toast-group");

    // document.firstElementChild.insertBefore(node, document.body);
    // add node inside body tag
    document.body.appendChild(node);

    // node.addEventListener("DOMNodeRemoved", function (e) {
    //   console.log(e.target, " was removed");
    // });
    return node;
  }

  createToast(config) {
    gsap.registerPlugin(Draggable);
    const {
      title = "",
      message = "",
      type = "default",
      position = "bottom-center",
      onClose = undefined,
      autoClose = true,
      content,
    } = config;

    const node = document.createElement("div");

    this.root = createRoot(node);
    this.root.render(
      <React.StrictMode>
        <Toast {...config}>
          {content &&
            content({
              ...config,
              closeToast: () => {
                this.Toaster.removeChild(node);
                this.root.unmount();
              },
            })}
        </Toast>
      </React.StrictMode>
    );
    // ReactDOM.render(
    //   <React.StrictMode>
    //     <Toast {...config}>
    //       {content &&
    //         content({
    //           ...config,
    //           closeToast: () => {
    //             this.Toaster.removeChild(node);
    //           },
    //         })}
    //     </Toast>
    //   </React.StrictMode>,
    //   node
    // );
    const that = this;

    function dragXAxisToClose() {
      const tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.5,
          ease: "power4.out",
        },
      });
      tl.to(node, {
        x: "100%",
        opacity: 0,
        onComplete: () => {
          console.log("onComplete");
          that.Toaster.removeChild(node);
          that.root.unmount();
        },
      });

      Draggable.create(node, {
        type: "x",
        edgeResistance: 0.65,
        bounds: {
          minX: 0,
          maxX: 100,
        },
        onDragEnd: function () {
          if (this.endX > 50) {
            tl.play();
          } else {
            tl.reverse();
          }
        },
      });
    }
    // dragXAxisToClose();

    // node.innerText = text;
    const nodeId = nextId("toast");
    node.className = `gui-toast ${position} ${type}`;
    node.setAttribute("role", "status");
    node.setAttribute("aria-live", "polite");
    node.setAttribute("id", nodeId);

    // check if autoClose is true or a number (in ms) and set toast animation duration
    if (autoClose) {
      const duration = typeof autoClose === "number" ? autoClose : 3000;
      node.style.setProperty("--_duration", `${duration}ms`);
    } else {
      node.style.setProperty("--_duration", "1000000s");
    }

    // listen to node self when removed
    if (onClose) node.addEventListener("DOMNodeRemoved", onClose);

    return node;
  }
  Toast(config) {
    const {
      title = "",
      message = "",
      type = "default",
      position = "bottom-left",
      onClose = undefined,
    } = config;
    let toast = this.createToast(config);

    this.addToast(toast);

    return new Promise(async (resolve, reject) => {
      await Promise.allSettled(
        toast.getAnimations().map((animation) => animation.finished)
      );
      // console.log(this.Toaster, toast);
      // this.Toaster.removeChild(toast);
      this.root.unmount();

      if (onClose) toast.removeEventListener("DOMNodeRemoved", onClose);

      resolve();
    });
  }

  addToast(toast) {
    const { matches: motionOK } = window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    );

    this.Toaster.children.length && motionOK
      ? this.flipToast(toast)
      : this.Toaster.appendChild(toast);
  }

  flipToast(toast) {
    // FIRST
    const first = this.Toaster.offsetHeight;

    // add new child to change container size
    this.Toaster.appendChild(toast);

    // LAST
    const last = this.Toaster.offsetHeight;

    // INVERT
    const invert = last - first;

    // PLAY
    const animation = this.Toaster.animate(
      [
        { transform: `translateY(${invert}px)` },
        { transform: "translateY(0)" },
      ],
      {
        duration: 150,
        easing: "ease-out",
      }
    );

    animation.startTime = document.timeline.currentTime;
  }
}

export default ToastManager;
