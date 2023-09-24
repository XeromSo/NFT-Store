import { Outlet, useLoaderData } from "@remix-run/react";
import CreatingContainer from "~/containers/helpCenter/creating";
import { FAKE_HELP_CENTER } from "~/store/defaults";

export async function loader({ params }) {
  const data = FAKE_HELP_CENTER.creating;
  return { data };
};
export default function GettingStarted() {
  const { data } = useLoaderData();
  return (
    <CreatingContainer links={data}>
      <Outlet />
    </CreatingContainer>
  );
}
