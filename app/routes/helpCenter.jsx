import { Outlet } from "@remix-run/react";

export function meta() {
  return {
    title: "Help center",
    description: "Help center desc",
    keywords: "remix, javascript, react",
  };
}
export default function HelpCenter() {
  return (
    <>
      {/* <h1>helpCenter</h1> */}
      <Outlet />
    </>
  );
}
