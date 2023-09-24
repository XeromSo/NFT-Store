import React from "react";
import Unlist from "./Unlist";
import Listed from "./Listed";
import Purchase from "./Purchase";
import Transfer from "./Transfer";
import Mint from "./Mint";
import { nanoid } from "nanoid";

// import comps lazy mode
// const Unlist = React.lazy(() => import("./Unlist"));
// const Listed = React.lazy(() => import("./Listed"));
// const Purchase = React.lazy(() => import("./Purchase"));
// const Transfer = React.lazy(() => import("./Transfer"));
// const Mint = React.lazy(() => import("./Mint"));

const comps = {
  listed: Listed,
  transfer: Transfer,
  unlist: Unlist,
  purchase: Purchase,
  mint: Mint,
};
export default function Index({ history }) {
  return (
    <div className="mt6 flex column gap-3 p4 radius-2 b b1 w100 mt2">
      {history.map((_history, i) => {
        const Comp = comps[_history.type];
        return <Comp detail={_history} key={nanoid()} />;
      })}

      {/* <Button className=" mt4">Load More</Button> */}
    </div>
  );
}

{
  /* <React.Suspense fallback={<div>Loading...</div>}>
            <Comp detail={_history} />
          </React.Suspense> */
}
