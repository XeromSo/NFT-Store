import { Outlet, useLoaderData } from "@remix-run/react";
import BuyingContainer from "~/containers/helpCenter/buying";
import { FAKE_HELP_CENTER } from "~/store/defaults";

export async function loader({ params }) {
  const data = FAKE_HELP_CENTER.buying;
  return { data };
};
export default function GettingStarted() {
  const { data } = useLoaderData();
  return (
    <BuyingContainer links={data}>
      <Outlet />
    </BuyingContainer>
  );
}
