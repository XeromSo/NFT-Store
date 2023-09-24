import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { FAKE_HELP_CENTER } from "~/store/defaults";
import HelpCenterContent from "~/containers/helpCenter/HelpCenterContent";

export async function loader({ params }) {
  const data = FAKE_HELP_CENTER.selling.find(
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
