import AppearanceContent from "~/containers/dashboard/settings/preferences/appearance";

export function meta() {
  return {
    title: "Sett - Pref - Appearance",
    description: "Setting pref appearance desc",
    keywords: "remix, javascript, react",
  };
};
export default function Appearance() {
  return <AppearanceContent />;
}
