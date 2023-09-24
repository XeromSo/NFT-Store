// import React from "react";
// import "regenerator-runtime/runtime";
import { json } from "@remix-run/node";
import Home from "~/containers/Home";
// import { useTranslation, withTranslation, Trans } from "react-i18next";
import { Component } from "react";
import { useLoaderData, Link } from "@remix-run/react";
// const NewModal = ({ closeModal }) => {
//   return (
//     <form method="dialog">
//       <header>
//         <section className="icon-headline">
//           <h5>New User</h5>
//         </section>
//         <button onClick={closeModal} type="button" title="Close dialog">
//           <title>Close dialog icon</title>
//           <svg width="24" height="24" viewBox="0 0 24 24">
//             <line x1="18" y1="6" x2="6" y2="18" />
//             <line x1="6" y1="6" x2="18" y2="18" />
//           </svg>
//         </button>
//       </header>
//       <article>
//         <section className="flex wrap alignCenter gap-3">
//           <label htmlFor="userimage">Upload an image</label>
//           <input id="toastMsg" name="toastMsg" type="text" />
//         </section>
//         <small>
//           <b>*</b> Maximum upload 1mb
//         </small>
//       </article>
//       <footer>
//         <menu>
//           <button type="reset" value="clear">
//             Clear
//           </button>
//         </menu>
//         <menu>
//           <button onClick={closeModal} id="closeBtn" type="button">
//             Cancel
//           </button>
//           <button type="submit" value="confirm">
//             Confirm
//           </button>
//         </menu>
//       </footer>
//     </form>
//   );
// };

// export const loader = async ({ request }) => {
//   return json({
//     lngs: {
//       en: { nativeName: "English" },
//       fa: { nativeName: "Farsi" },
//     },
//   });
// };

export function meta() {
  return {
    title: "NFT marketplace for digital art",
    description:
      "NFT marketplace for artists and collectors to buy and sell digital art and collectibles online. Buy, sell, and discover exclusive digital art and collectibles.",
    keywords: "NFT, collection, art, digital art, marketplace",
  };
}
// export const handle = {
//   // In the handle export, we could add a i18n key with namespaces our route
//   // will need to load. This key can be a single string or an array of strings.
//   i18n: ["index"],
// };

export default function Index() {
  // const { lngs } = useLoaderData();
  // const { t, ready, i18n } = useTranslation("index");
  // if (!ready) return <div>Language Loading...</div>; // i18next may not be ready when changing route with <Link>

  // console.log(i18n);
  return (
    <>
      {/* <div className="App">
        {Object.keys(lngs).map((lng) => (
          <Link
            key={lng}
            style={{
              marginRight: 5,
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            to={`/?lng=${lng}`}
          >
            {lngs[lng].nativeName}
          </Link>
        ))}
        <div>{t("description.part2")}</div>
        <hr />
        <div>
          <Link to="/second">{t("goto.second")}</Link>
        </div>
      </div> */}

      <Home />
    </>
  );
}
