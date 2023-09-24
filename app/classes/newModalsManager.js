import React from "react";
import nextId from "react-id-generator";
import { AnimationProvider, AppProvider } from "~/context/appContext";
import { createRoot } from "react-dom/client";
import events from "events";
import { gsap } from "gsap/dist/gsap";
import { animations } from "framer-motion";
import { ConfirmComp } from "~/components";
import Draggable from "gsap/dist/Draggable";

// const animationsComplete = (element) =>
//   Promise.allSettled(
//     element.getAnimations().map((animation) => animation.finished)
//   );

class Modal {
  constructor(
    Component,
    _config,
    app,
    clearModalFromList,
    zIndex,
    appPerformance
  ) {
    this.id = nextId();
    this.ee = new events();
    this.config = _config;
    this.appPerformance = appPerformance;
    this.dialog = document.createElement("div");
    this.dialog.classList.add("kit-dialog");
    this.dialog.id = this.id;
    this.dialog.style.zIndex = zIndex;
    this.dialog.style.width = _config?.width ? _config.width : "28em";
    if (typeof Component === "string" && Component === "confirm") {
      Component = ConfirmComp;
    }
    if (_config?.dialogClassName)
      this.dialog.className += ` ${_config.dialogClassName}`;

    document.getElementById("modalContainer").appendChild(this.dialog);

    this.root = createRoot(this.dialog);
    this.root.render(
      <React.StrictMode>
        <AnimationProvider
          performanceMode={app.preferences.getState().general.highPerformance}
        >
          <AppProvider value={app}>
            <Component
              closeModal={() => this.destroy({ callEvents: true })}
              modalId={this.id}
              {..._config}
            />
          </AppProvider>
        </AnimationProvider>
      </React.StrictMode>
    );

    setTimeout(() => {
      this.loadDialog();
    }, 100);
    this.destroy = ({ callEvents = true }) => {
      clearModalFromList();

      const isSmallScreen = window.innerWidth < 560;
      let closingAnims;
      const that = this;
      if (isSmallScreen) {
        closingAnims = {
          opacity: 0,
          // transform: "translate(-50%, 100%)",
          // y: "100%",
          yPercent: 100,
          xPercent: -50,
        };
      } else {
        closingAnims = {
          opacity: 0,
          // y: "-45%",
          // x: "-50%",
          // transform: "translate(-50%, -45%)",
          yPercent: -45,
          xPercent: -50,
        };
      }
      gsap[this.appPerformance === "on" ? "to" : "set"](this.dialog, {
        ...closingAnims,

        ease: "power3.in",
        duration: 0.2,
        onComplete: () => {
          that.dialog.remove();
          // await animationsComplete(that.dialog);
          that.ee.emit("destroy");
          // console.log(this.config?.onDestroy, callEvents);
          if (that.config?.onDestroy && callEvents) that.config.onDestroy();

          // clear component from memory
          that.root.unmount();
        },
      });
    };
  }

  async loadDialog() {
    // check if window size is smaller than 600px
    const isSmallScreen = window.innerWidth < 560;
    let opeingAnims;
    if (isSmallScreen) {
      opeingAnims = {
        opacity: 1,
        yPercent: 0,
        xPercent: -50,
        bottom: 0,
      };
    } else {
      opeingAnims = {
        opacity: 1,
        yPercent: -50,
        xPercent: -50,
      };
    }
    gsap[this.appPerformance === "on" ? "to" : "set"](this.dialog, {
      ...opeingAnims,
      ease: "power3.out",
      duration: 0.25,
    });

    const dragDownToClose = () => {
      gsap.registerPlugin(Draggable);
      const that = this;
      const myDraggable = Draggable.create(this.dialog, {
        type: "y",
        trigger: `.dialog-drag-to-close-${this.id}`,
        onPress: function () {},
        onDragStart: function () {
          if (this.getDirection("start") === "up") {
            myDraggable[0].disable();
          }
        },
        onDragEnd: function () {
          if (this.y >= 40) {
            that.destroy({ callEvents: true });
          } else {
            myDraggable[0].enable();

            gsap.to(that.dialog, {
              y: 0,
              ease: "power3.out",
              duration: 0.2,
            });
          }
        },
      });
    };
    if (isSmallScreen && this.appPerformance === 'on') dragDownToClose();
    // await animationsComplete(this.dialog);
    this.ee.emit("load");
  }
}

class ModalsManager {
  constructor(app) {
    this.app = app;
    this.modals = [];
    this.modalHolder = document.getElementById("modalContainer");
    this.backdrop = document.createElement("div");
    this.backdrop.classList.add("kit-backdrop");
    this.backdrop.onclick = () =>
      this.modals[this.modals.length - 1].destroy({ callEvents: true });
    this.modalHolder.appendChild(this.backdrop);
    this.appPerformance =
      app.preferences.getState().general.highPerformance === "system"
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches === true
          ? "off"
          : "on"
        : app.preferences.getState().general.highPerformance;
  }

  show(Component, _config) {
    return new Promise((resolve, reject) => {
      const _newModal = new Modal(
        Component,
        _config,
        this.app,
        () => {
          // clear from list
          this.modals = this.modals.filter((_m) => _m.id !== _newModal.id);
          if (this.modals.length === 0) {
            gsap[this.appPerformance === "on" ? "to" : "set"](this.backdrop, {
              opacity: 0,
              onComplete: () => {
                this.backdrop.style.zIndex = -1;
                document.getElementsByTagName("html")[0].style.overflow =
                  "hidden overlay";
              },
            });
          }
        },
        this.modals.length + 1 + 48,
        this.appPerformance
      );

      if (this.modals.length === 0) {
        // disable html tag scroll
        document.getElementsByTagName("html")[0].style.overflow = "hidden";

        this.backdrop.style.zIndex = 32;
        gsap[this.appPerformance === "on" ? "to" : "set"](this.backdrop, {
          opacity: 1,
        });
      }
      this.modals.push(_newModal);

      _newModal.ee.on("load", () => resolve(_newModal));
    });
  }

  //   closeAll() {
  //     this.modals.forEach((_m) => _m.close());
  //   }
}

export default ModalsManager;
