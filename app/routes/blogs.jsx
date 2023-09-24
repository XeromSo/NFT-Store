import { Outlet } from "@remix-run/react";

export function meta() {
  return {
    title: "Blogs",
    description: "Blogs desc",
    keywords: "remix, javascript, react",
  };
};

export default function Blogs() {
  return (
    <>
      {/* <h1>blogs</h1> */}

      <Outlet />
    </>
  );
}
