import React from 'react'
import { NftListWithFilter } from "~/components";
import { FAKE_NFTS } from "~/store/defaults";

export default function Index() {
  return (
    <NftListWithFilter data={FAKE_NFTS}/>
  )
}
