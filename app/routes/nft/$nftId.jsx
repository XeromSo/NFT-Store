import { json } from "@remix-run/node";
import { useParams, useLoaderData } from "@remix-run/react";
import { FAKE_NFTS } from "~/store/defaults";
import NftDetailContainer from "~/containers/nft";

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
  const { nftId } = params;
  const _nftItem = FAKE_NFTS.find((nft) => nft.id === Number(nftId));
  return json(_nftItem);
}
export default function NftPage() {
  const data = useLoaderData();
  //   console.log(data);
  return <NftDetailContainer nftItem={data} />;
}
