import { Outlet, useLoaderData } from "@remix-run/react";
import GettingStartedContainer from "~/containers/helpCenter/gettingStarted";
import { FAKE_HELP_CENTER } from "~/store/defaults";

export async function loader({ params }) {
  const data = FAKE_HELP_CENTER.gettingStarted;
  return { data };
};
export default function GettingStarted() {
  const { data } = useLoaderData();
  return (
    <GettingStartedContainer links={data}>
      <Outlet />
    </GettingStartedContainer>
  );
}
