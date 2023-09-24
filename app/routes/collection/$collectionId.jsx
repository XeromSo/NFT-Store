import { json } from "@remix-run/node";
import { useParams, useLoaderData } from "@remix-run/react";
import { FAKE_COLLECTION } from "~/store/defaults";
import CollectionDetailContainer from "~/containers/collection";

export function meta({ data }) {
  return {
    title: data.title,
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
  const { collectionId } = params;
  const _collectionItem = FAKE_COLLECTION.find(
    (_collection) => _collection.id === Number(collectionId)
  );

  return json(_collectionItem);
}
export default function CollectionPage() {
  const data = useLoaderData();
  return <CollectionDetailContainer collection={data} />;
}
