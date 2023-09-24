import { json } from "@remix-run/node";
import {
  useParams,
  useLoaderData,
  useNavigate,
  useNavigationType,
  useLocation,
} from "@remix-run/react";
import { useEffect } from "react";
import { useAppContext } from "~/context/appContext";
import { FAKE_NFTS } from "~/store/defaults";
import NftModal from "~/containers/explore/nftModal";
export function meta() {
  return {
    title: "Product modal",
    description: "Product description",
  };
}

export function loader({ params, request }) {
  const { productId } = params;
  const _nftItem = FAKE_NFTS.find((nft) => nft.id === Number(productId));
  if (!_nftItem) {
    return json({ error: "Not found" }, { status: 404 });
  }
  return json(_nftItem);
}
export default function SingleProduct({}) {
  const data = useLoaderData();
  const appCtx = useAppContext();
  const navigate = useNavigate();
  // const { search } = useLocation();
  // console.log(navigate, useLocation());

  // const navigateType = useNavigationType();
  // const scrollYPos = useParams();
  // console.log(navigateType, scrollYPos)

  useEffect(() => {
    // scroll window to previous scroll position
    // window.scrollTo(0, data.scrollYPos);

    // const scrollY = search.split("=")[1];
    // // console.log(scrollY);
    // if (scrollY) {
    //   window.scrollTo(0, Number(scrollY));
    // }
    let _modal;
    appCtx.ModalsManager.show(NftModal, {
      data,
      dialogClassName: "w100 overflowYAuto scrollBarVisibleNone",
      onDestroy: () => navigate(-1),
      // onReadMore: (id) => navigate(`/nft/${id}`),
      navigateTo: (_path) => navigate(_path),
    }).then((res) => {
      // console.log(res);
      _modal = res;
    });
    // console.log(_modal);

    // const updateRoute = (props) => {
    //   if (_modal._dialogEl.open) {
    //     console.log(_modal)
    //     _modal.destroy({ callEvents: false });
    //   }
    // };
    // listen to onpopstate
    // window.addEventListener("popstate", updateRoute);

    return () => {
      console.log("unmount", _modal);

      _modal.destroy({ callEvents: false });
      // window.removeEventListener("popstate", updateRoute);
    };
  }, [data]);

  // return nothing
  return null;
}
