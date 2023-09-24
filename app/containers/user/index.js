import React, { useEffect } from "react";
import { Avatar, Tabs, Tab, Button } from "~/KIT";
import {
  BiCheck,
  BiUpload,
  BiPlus,
  BiDotsHorizontalRounded,
} from "react-icons/bi";
import {
  Product,
  SmallProduct,
  DetailColumn,
  HeaderCoverAvatarBio,
  Page404,
  UnderConstruction,
} from "~/components";
import { useParams, useLocation, useNavigate, Link } from "@remix-run/react";
import useToggle from "~/hooks/useToggle";
import { useAppContext } from "~/context/appContext";

// const Owned = React.lazy(() => import("./owned"));
// const Created = React.lazy(() => import("./created"));
// const Collections = React.lazy(() => import("./collections"));
// const OnSale = React.lazy(() => import("./onSale"));
// const Activity = React.lazy(() => import("./activity"));
// const Sold = React.lazy(() => import("./sold"));

// const userRoutes = {
//   owned: Owned,
//   created: Created,
//   collections: Collections,
//   onSale: OnSale,
//   activity: Activity,
//   sold: Sold,
// };
export default function Index({ userDetail, userCollections, children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [followed, toggleFollowed] = useToggle(false);
  const [activeTab, setActiveTab] = React.useState("owned");
  const { cover, avatar, creator, addresses, bio, followers, following } =
    userDetail;

  // console.log(userDetail)
  const appCtx = useAppContext();
  // useEffect(() => {
  //   if (search) {
  //     const tab = search.split("=")[1];
  //     setActiveTab(tab);
  //   }
  // }, [search]);
  return (
    <section className="container md flex column alignCenter pt5 pb5">
      <HeaderCoverAvatarBio
        title={creator}
        avatar={avatar}
        cover={cover}
        bio={bio}
        bioClassName="textAlign center"
        detailWrapperClassName="alignCenter pl2-sm pr2-sm"
      />
      <div className="flex column alignCenter mt5 w100-sm">
        <div className="flex alignCenter mb3">
          {/* // BiCheck for followed with className mainFilledBg */}
          <Button
            onClick={() => {
              toggleFollowed();
              if (followed) {
                appCtx.ToastManager.Toast({
                  title: "Unfollowed",
                  message: "You have unfollowed this user",
                  // type: "error",
                  position: "bottom-left",
                  onClose: (_node) => {
                    // console.log("Toast closed", _node);
                  },
                  autoClose: false,
                  content: ({
                    closeToast,
                    // toastProps: { title, message, type, position },
                  }) => {
                    return (
                      <div className="flex alignCenter mt2">
                        <Button
                          className="small outlined"
                          onClick={() => {
                            closeToast();
                          }}
                        >
                          Undo
                        </Button>
                      </div>
                    );
                  },
                });
              } else {
                appCtx.ToastManager.Toast({
                  title: "Followed",
                  message: "You have followed this user",
                  type: "success",
                  position: "bottom-left",
                  // autoClose: false,
                });
              }
            }}
            className={followed ? "mainFilledBg" : "contained"}
            startIcon={followed ? <BiCheck /> : <BiPlus />}
          >
            {followed ? "Followed" : "Follow"}
          </Button>
          <Button className="ml2 mr2 icon">
            <BiUpload />
          </Button>
          <Button className="icon">
            <BiDotsHorizontalRounded />
          </Button>
        </div>
        <div
          className="w100 grid col8 gap-y-4-sm radius-1 p3 mb5 mr0-sm"
          //   style={{ maxWidth: "40em" }}
        >
          <DetailColumn
            title={`Addresses (${addresses.length})`}
            value={
              <>
                {addresses[0].slice(0, 4)}...{addresses[0].slice(-4)}
              </>
            }
            className="span-2 span-4-sm pl3 pr3 b br1"
          />
          <DetailColumn
            title="Collections"
            value={userCollections.length}
            className="span-2 span-4-sm b br1 br0-sm"
          />
          <DetailColumn
            title="Followers"
            value={followers}
            className="span-2 span-4-sm b br1"
          />
          <DetailColumn
            title="Following"
            value={following}
            className="span-2 span-4-sm"
          />
        </div>
      </div>
      <Tabs
        // value={activeTab}
        // onChange={(e) => {
        //   // navigate(e,{
        //   //   replace: true,
        //   // });

        //   // change the url without reloading the page
        //   window.history.pushState({}, "", `/user/${userDetail.id}?tab=${e}`);
        //   setActiveTab(e);
        // }}
        value={pathname}
        onChange={(e) =>
          navigate(e, {
            state: { scroll: false },
          })
        }
        className="mt1 mb3 overflowXAuto mW100 scrollBarVisibleNone"
      >
        <Tab label="Owned" value={`/user/${userDetail.id}/owned`} />
        <Tab label="On sale" value={`/user/${userDetail.id}/onsale`} />
        <Tab label="Created" value={`/user/${userDetail.id}/created`} />
        <Tab label="Collections" value={`/user/${userDetail.id}/collections`} />
        <Tab label="Activity" value={`/user/${userDetail.id}/activity`} />
        <Tab label="Sold" value={`/user/${userDetail.id}/sold`} />
      </Tabs>

      {children}
      {/* <UnderConstruction /> */}
      {/* <React.Suspense fallback={<div>Loading...</div>}>
        {userRoutes[activeTab] ? (
          React.createElement(userRoutes[activeTab], {
            userDetail,
            userCollections,
          })
        ) : (
          <div>
            <Page404 />
          </div>
        )}
      </React.Suspense> */}
    </section>
  );
}
