import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { FAKE_HELP_CENTER } from "~/store/defaults";
import HelpCenterContent from "~/containers/helpCenter/HelpCenterContent";

export async function loader({ params }) {
  const data = FAKE_HELP_CENTER.creating.find(
    (item) => item.id === Number(params.id)
  );
  return { data };
}

export function meta({ data }) {
  return {
    title: data.title,
    description: "Help center desc",
    keywords: "remix, javascript, react",
  };
}
export default function Index() {
  const { data } = useLoaderData();
  return <HelpCenterContent data={data} />;
}
// ((STORAGE_KEY) => {
//   if (!window.history.state || !window.history.state.key) {
//     let key = Math.random().toString(32).slice(2);
//     window.history.replaceState(
//       {
//         key,
//       },
//       ""
//     );
//   }

//   try {
//     let positions = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
//     let storedY = positions[window.history.state.key];

//     if (typeof storedY === "number") {
//       window.scrollTo(0, storedY);
//     }
//   } catch (error) {
//     console.error(error);
//     sessionStorage.removeItem(STORAGE_KEY);
//   }
// })("positions");
