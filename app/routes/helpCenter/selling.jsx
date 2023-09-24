import { Outlet, useLoaderData } from "@remix-run/react";
import SellingContainer from "~/containers/helpCenter/selling";
import { FAKE_HELP_CENTER } from "~/store/defaults";

export async function loader() {
  const data = FAKE_HELP_CENTER.selling;
  return { data };
};
export default function GettingStarted() {
  const { data } = useLoaderData();
  return (
    <SellingContainer links={data}>
      <Outlet />
    </SellingContainer>
  );
}
