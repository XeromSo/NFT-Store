import AccountContainer from "~/containers/dashboard/settings/account";

export function meta() {
  return {
    title: "User settings account",
    description: "Settings account desc",
    keywords: "remix, javascript, react",
  };
};
export default function Profile() {
  return (
    <AccountContainer />
  )
}
