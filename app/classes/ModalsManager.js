import React, { createContext } from "react";
// import ReactDOM from "react-dom";
import nextId from "react-id-generator";
import events from "events";
import { AppProvider } from "~/context/appContext";
import { setAttributes } from "~/store/utils";
import { gsap } from "gsap/dist/gsap";
import Draggable from "gsap/dist/Draggable";
import {createRoot} from 'react-dom/client'

let dialogClosingEvent,
  dialogClosedEvent,
  dialogOpenedEvent,
  dialogOpeningEvent,
  dialogRemovedEvent;
if (typeof window !== "undefined") {
  dialogClosingEvent = new window.Event("closing");
  dialogClosedEvent = new window.Event("closed");
  dialogOpeningEvent = new window.Event("opening");
  dialogOpenedEvent = new window.Event("opened");
  dialogRemovedEvent = new window.Event("removed");
}
// new events
const dialogClosing = ({ target: dialog }, _onClosingModal) => {
  // console.log("Dialog closing", dialog);
  if (_onClosingModal) _onClosingModal();
};
const dialogClosed = ({ target: dialog }, _onClosedModal) => {
  // console.log("Dialog closed", dialog);

  if (_onClosedModal) _onClosedModal();

  // console.info("Dialog user action:", dialog.returnValue);

  if (dialog.returnValue === "confirm") {
    const dialogFormData = new FormData(dialog.querySelector("form"));
    // console.info(
    //   "Dialog form data",
    //   Object.fromEntries(dialogFormData.entries())
    // );
    // handleFile(dialogFormData)

    dialog.querySelector("form")?.reset();
  }
  dialog.remove();
};

const dialogOpened = ({ target: dialog }) => {
  // console.log("Dialog open", dialog);
};

const dialogOpening = ({ target: dialog }) => {
  // console.log("Dialog opening", dialog);
};

const dialogRemoved = ({ target: dialog }) => {
  // cleanup new/optional <dialog> events
  dialog.removeEventListener("closing", dialogClosing);
  dialog.removeEventListener("closed", dialogClosed);
  dialog.removeEventListener("opening", dialogOpening);
  dialog.removeEventListener("opened", dialogOpened);
  dialog.removeEventListener("removed", dialogRemoved);
  // console.log("Dialog removed", dialog);
};

const attributes = {
  loading: "",
  role: "dialog",
  "aria-modal": "true",
  "modal-mode": "mega",
  tabindex: "-1",
  "aria-hidden": "true",
  "aria-live": "assertive",
  "aria-atomic": "true",
  "aria-busy": "true",
  inert: "",
};
// track opening
// const dialogAttrObserver =

// track deletion
// const dialogDeleteObserver =

const animationsComplete = (element) =>
  Promise.allSettled(
    element.getAnimations().map((animation) => animation.finished)
  );
class Modal {
  constructor(Component, _config, app, clearFromList, idx) {
    this.id = nextId();
    this.ee = new events();
    this.config = _config;
    this._dialogEl = document.createElement("dialog");
    this._dialogEl.id = this.id;
    this._dialogEl.setAttribute("modal-mode", "mega");
    if (this.config?.dialogClassName)
      this._dialogEl.className = this.config?.dialogClassName;
    setAttributes(this._dialogEl, attributes);
    document.getElementById("modalContainer").appendChild(this._dialogEl);

    createRoot(this._dialogEl).render(
      <React.StrictMode>
        <AppProvider value={app}>
          <Component
            closeModal={(_callEvents = true) =>
              this.destroy({ callEvents: _callEvents })
            }
            {..._config}
          />
        </AppProvider>
      </React.StrictMode>
    );

    // this.root = ReactDOM.createRoot(this._dialogEl);
    // this.root.render(

    // );

    // ReactDOM.render(
    // <React.StrictMode>
    //   <AppProvider value={app}>
    //     <Component
    //       closeModal={(_callEvents = true) =>
    //         this.destroy({ callEvents: _callEvents })
    //       }
    //       {..._config}
    //     />
    //   </AppProvider>
    // </React.StrictMode>,
    //   this._dialogEl
    // );
    this.dialogAttrObserver = new MutationObserver((mutations, observer) => {
      // console.log("dialog attribute changed", mutations);
      mutations.forEach(async (mutation) => {
        // console.log("dialog attribute changed", mutation);
        if (mutation.attributeName === "open") {
          const dialog = mutation.target;

          const isOpen = dialog.hasAttribute("open");
          if (!isOpen) return;

          dialog.removeAttribute("inert");

          // set focus
          const focusTarget = dialog.querySelector("[autofocus]");

          // const focusTarget = document.getElementById("closeBtn");

          focusTarget
            ? focusTarget.focus()
            : dialog.querySelector("button")?.focus();

          dialog.dispatchEvent(dialogOpeningEvent);
          await animationsComplete(dialog);
          dialog.dispatchEvent(dialogOpenedEvent);
        }
      });
    });
    this.dialogDeleteObserver = new MutationObserver((mutations, observer) => {
      mutations.forEach((mutation) => {
        mutation.removedNodes.forEach((removedNode) => {
          if (removedNode.nodeName === "DIALOG") {
            removedNode.removeEventListener("click", this.lightDismiss);
            removedNode.removeEventListener("close", this.dialogClose);
            removedNode.dispatchEvent(dialogRemovedEvent);
          }
        });
      });
    });

    this.loadDialog(this._dialogEl);

    this._dialogEl.showModal();

    this.destroy = async ({ callEvents = true }) => {
      // console.log(_prp);

      if (callEvents) {
        this._dialogEl.close("dismiss");
      } else {
        this._dialogEl.remove();
      }
      await animationsComplete(this._dialogEl);
      this.ee.emit("destroy");
      clearFromList();
    };
  }

  lightDismiss({ target: dialog }) {
    if (dialog.nodeName === "DIALOG") dialog.close("dismiss");
  }

  async dialogClose({ target: dialog }) {
    dialog.setAttribute("inert", "");
    dialog.dispatchEvent(dialogClosingEvent);

    await animationsComplete(dialog);

    dialog.dispatchEvent(dialogClosedEvent);
  }

  async loadDialog(dialog) {
    // console.log("loading dialog", window.MegaDialog);
    dialog.addEventListener("click", this.lightDismiss);
    dialog.addEventListener("close", this.dialogClose);

    this.dialogAttrObserver.observe(dialog, {
      attributes: true,
    });

    this.dialogDeleteObserver.observe(document.body, {
      attributes: false,
      subtree: false,
      childList: true,
    });

    // remove loading attribute
    // prevent page load @keyframes playing
    await animationsComplete(dialog);
    dialog.removeAttribute("loading");

    dialog.addEventListener("closing", (rest) =>
      dialogClosing(rest, this.config?.onClosingModal)
    );
    dialog.addEventListener("closed", (rest) =>
      dialogClosed(rest, this.config?.onClosedModal)
    );
    dialog.addEventListener("opening", dialogOpening);
    dialog.addEventListener("opened", dialogOpened);
    dialog.addEventListener("removed", dialogRemoved);

    // check if in phone device loadDraggable function

    // if (window.innerWidth < 768) {
    //   loadDraggable(dialog);
    // }
  }
}

const loadDraggable = (dialog) => {
  gsap.registerPlugin(Draggable);

  Draggable.create(dialog, {
    type: "y",

    onPress: function () {
      console.log("clicked");
    },
    onDrag: function () {
      // console.log("dragging", this.getDirection() === 'dragging up', this.getDirection());
      // if(this.getDirection() === "up") {
      //   this.endDrag();
      // }
      // if(this.getDirection() === 'down'){
      //   dialog.close();
      // }
      // if (this.y <= 20) this.endDrag();
    },
    // trigger: dragHandlerRef.current,
  });
};
class ModalsManager {
  constructor(app) {
    this.app = app;
    this.modals = [];
  }

  show(Component, _config) {
    const _newModal = new Modal(
      Component,
      _config,
      this.app,
      () => {
        // clear from list
        this.modals = this.modals.filter((_m) => _m.id !== _newModal.id);
      },
      this.modals.length + 1
    );

    return _newModal;
  }
}

export default ModalsManager;
