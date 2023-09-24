import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";

hydrateRoot(document, <RemixBrowser />);
if ("serviceWorker" in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/entry.worker.js")
      .then(() => navigator.serviceWorker.ready)
      .then(() => {
        if (navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage({
            type: "SYNC_REMIX_MANIFEST",
            manifest: window.__remixManifest,
          });
        } else {
          navigator.serviceWorker.addEventListener("controllerchange", () => {
            navigator.serviceWorker.controller?.postMessage({
              type: "SYNC_REMIX_MANIFEST",
              manifest: window.__remixManifest,
            });
          });
        }
      })
      .catch((error) => {
        console.error("Service worker registration failed", error);
      });
  });
}

function urlBase64ToUint8Array(base64String) {
  
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  // console.log('base64String', base64String)
  // console.log('paadding', padding)
  
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");
  // const rawData = window.atob(base64);
  // console.log(base64);
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

navigator.serviceWorker.ready
  .then((registration) => {
    const subscription = registration.pushManager.getSubscription();
    // console.log(subscription, registration)
    return { subscription, registration };
  })
  .then(async (sub) => {
    // console.log(sub.subscription)
    if (await sub.subscription) {
      console.log('sub.subscription ast')
      return sub.subscription;
    }

    const subInfo = await fetch("./resources/subscribe");
    const returnedSubscription = await subInfo.text();

    // console.log(returnedSubscription, "================", subInfo);
    // encode to base64 function
    // const base64Subscription = window.btoa(returnedSubscription);
    const convertedVapidKey = urlBase64ToUint8Array(window.btoa(returnedSubscription));
    // console.log(convertedVapidKey)

    return sub.registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: convertedVapidKey,
    });
  })
  .then(async (subscription) => {
    await fetch("./resources/subscribe", {
      method: "POST",
      body: JSON.stringify({
        subscription: subscription,
        type: "POST_SUBSCRIPTION",
      }),
    });
  });
