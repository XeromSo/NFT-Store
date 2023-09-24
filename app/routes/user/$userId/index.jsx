import { redirect } from "@remix-run/node";

export function loader ({params}) {
    const {userId} = params;
    return redirect(`/user/${userId}/owned`);
}

export default function Index() {
    return null;
}