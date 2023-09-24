import { Outlet } from "@remix-run/react";

export function meta() {
  return {
    title: "Auth",
    description: "Auth desc",
    keywords: "remix, javascript, react",
  };
};
export default function Auth() {
  return (
    <>
      <Outlet />
    </>
  );
}
