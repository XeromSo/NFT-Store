import React from "react";
import { Outlet } from "@remix-run/react";

import ExploreContainer from "~/containers/explore";
export function meta() {
  return {
    title: "Products",
    description: "Products desc",
    keywords: "remix, javascript, react",
  };
}

// this file for products and products/:id
export default function Products() {
  return (
    <>
      {/* <MasalanCategoryBar /> ke ham to product id hast ham to products */}
      <ExploreContainer />
      <Outlet />
    </>
  );
}
