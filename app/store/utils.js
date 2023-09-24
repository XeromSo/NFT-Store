import Web3 from 'web3';
import create from "zustand";
import { defaults } from "./defaults";

export const getWeb3 = () =>
  new Promise ((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        
        try {
          // Request account access if needed
          await window.ethereum.request({ method: 'eth_requestAccounts' }); //return accounts
          // Accounts now exposed
          resolve(web3);
        } catch (error) {
          reject("User denied account access. " + error);
          console.log("User denied account access. " + error)
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        resolve(web3);
      }
      // Fallback to localhost; use dev console port by default...
      else {
        const provider = new Web3.providers.HttpProvider(
          "http://127.0.0.1:8545"
        );
        const web3 = new Web3(provider);
        console.log("No web3 instance injected, using Local web3.");
        resolve(web3);
      }
    });
  });

export const createZustand = (key) => {
  let values = {};

  if (defaults[key]) {
    values = defaults[key];
  } else {
    values = defaults["_DEFAULT"];
  }

  if (typeof window !== "undefined") {
    const local = window.localStorage.getItem(`NFT_M_${key}`);
    if (local) {
      values = { ...values, ...JSON.parse(local) };
    }
  } else {
    values = defaults["_DEFAULT"];
  }

  const _saveInStorage = () => {
    // window.requestIdleCallback(() => {
    localStorage.setItem(`NFT_M_${key}`, JSON.stringify(values));
    // });
  };

  const _obj = create((set) => ({
    ...values,
    setKey: (_key, _value) => {
      set((prv) => ({ ...prv, [_key]: _value }));

      values[_key] = _value;
      _saveInStorage();
    },
  }));

  return _obj;
};

export const detectColorScheme = () => {
  return new Promise((resolve, reject) => {
    if (typeof window !== "undefined") {
      var theme = "light"; //default to light

      //local storage is used to override OS theme settings
      if (localStorage.getItem("theme")) {
        if (localStorage.getItem("theme") == "dark") {
          var theme = "dark";
        }
      } else if (!window.matchMedia) {
        //matchMedia method not supported
        return false;
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //OS theme setting detected as dark
        var theme = "dark";
      }

      //dark theme preferred, set document with a `data-theme` attribute
      if (theme == "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      }

      resolve(theme);
    } else resolve("light");
  });
};

export const changeCssRootValue = (_key, _value) => {
  if (typeof window !== "undefined") {
    document.documentElement.style.setProperty(_key, _value);
  }
};
export const disableReactDevTools = () => {
  const noop = () => undefined;
  const DEV_TOOLS = window?.__REACT_DEVTOOLS_GLOBAL_HOOK__;

  if (typeof DEV_TOOLS === "object") {
    for (const [key, value] of Object.entries(DEV_TOOLS)) {
      DEV_TOOLS[key] = typeof value === "function" ? noop : null;
    }
  }
};
export const setAttributes = (_el, _attrs) => {
  for (const key in _attrs) {
    _el.setAttribute(key, _attrs[key]);
  }
};

export function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function updateUrlBarColor(_color) {
  if (typeof window !== "undefined") {
    const _meta = document.querySelector("meta[name=theme-color]");
    if (_meta) {
      _meta.setAttribute("content", _color);
    }
  }
}

// https://stackoverflow.com/questions/38241480/detect-macos-ios-windows-android-and-linux-os-with-js
export function getOS() {
  let userAgent = window.navigator.userAgent,
      platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'MacOS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (/Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}