import { json } from "@remix-run/node";
import {
  useParams,
  useLoaderData,
  Outlet,
  ScrollRestoration,
} from "@remix-run/react";
import { FAKE_USERS, FAKE_COLLECTION } from "~/store/defaults";
import UserDetailContainer from "~/containers/user";
import { useEffect } from "react";

export function meta({ data }) {
  return {
    title: data.userDetail.creator,
    description: "Collection desc",
    keywords: "remix, javascript, react",
    // change favicon
    // links: [
    //   {
    //     rel: "favicon",
    //     href: data.image,
    //     type: "image/png",
    //   },
    // ],
  };
}
export async function loader({ params }) {
  const { userId } = params;
  const _userDetail = await FAKE_USERS.find(
    (user) => user.id === Number(userId)
  );

  const _userCollections = await FAKE_COLLECTION.filter((collection) =>
    collection.ownerIds.includes(Number(userId))
  );

  return json(
    { userDetail: _userDetail, userCollections: _userCollections } || {}
  );
}
export default function NftPage() {
  const { userDetail, userCollections } = useLoaderData();
  // useScrollRestoration(false);

  return (
    <>
      <UserDetailContainer
        userDetail={userDetail}
        userCollections={userCollections}
      >
        <Outlet />
      </UserDetailContainer>
    </>
  );
}
