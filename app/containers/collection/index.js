import React, { useEffect, useMemo } from "react";
import { Checkbox, Button, Select, TextField, Avatar, Tabs, Tab } from "~/KIT";
import { MdVerified, MdKeyboardArrowLeft, MdExpandMore } from "react-icons/md";

import {
  BiChevronUp,
  BiChevronDown,
  BiFilter,
  BiRefresh,
  BiSearch,
  BiLeftArrowAlt,
} from "react-icons/bi";
import { BsGrid3X3GapFill, BsGridFill } from "react-icons/bs";
import { FAKE_NFTS } from "~/store/defaults";
import {
  Product,
  SmallProduct,
  CustomLink,
  HeaderCoverAvatarBio,
  DetailColumn,
  UnderConstruction,
  Page404,
} from "~/components";
import { useLocation, useNavigate } from "@remix-run/react";
import { Collapse } from "react-collapse";
import useToggle from "~/hooks/useToggle";
import { useAppContext } from "~/context/appContext";
import { useAnimationControls, motion } from "framer-motion";
const Items = React.lazy(() => import("./items"));
const Activity = React.lazy(() => import("./activity"));

const collectionRoutes = {
  items: Items,
  activity: Activity,
};

const container = {
  hidden: {},
  show: {
    // opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.04,
    },
  },
};
const itemAnim = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};
export default function Index({ collection }) {
  const {
    id,
    items,
    owners,
    totalVolume,
    floorPrice,
    title,
    cover,
    creator,
    userId,
    likes,
    media,
    avatar,
  } = collection;
  const controls = useAnimationControls();
  const [selectedTab, setSelectedTab] = React.useState("items");
  const { search } = useLocation();
  useEffect(() => {
    if (search) {
      const tab = search.split("=")[1];
      setSelectedTab(tab);
    }
  }, [search]);
  return (
    <section className="container md flex column alignCenter pt5 pb5">
      <HeaderCoverAvatarBio
        title={title}
        avatar={avatar}
        cover={cover}
        detailWrapperClassName="alignCenter"
        bioClassName="textAlign center"
        onImageLoad={() => {
          controls.start("show");
        }}
        bio="lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        consectetur, lorem sit amet aliquam luctus, nunc nisl aliquam nisl, vel
        tincidunt nunc lorem vel nunc. Nulla consectetur, lorem sit amet aliquam
        luctus, nunc nisl aliquam nisl, vel tincidunt nunc lorem vel nunc."
      />
      <motion.div
        // variants={container}
        // initial="hidden"
        // animate="show"

        variants={container}
        initial="hidden"
        animate={controls}
        className="grid col12 radius-2 mainFilledBg p3 w100 mt5 gap-y-4-sm"
        style={{ maxWidth: "48em" }}
      >
        <motion.div
          variants={itemAnim}
          // animate={controls}
          // initial="hidden"
          transition={{
            type: "spring",
            bounce: 0.25,
          }}
          className="span-2 span-4-sm span-6-xs b br1"
        >
          <DetailColumn title="Total Items" value={items} />
        </motion.div>
        <motion.div
          variants={itemAnim}
          // animate={controls}
          // initial="hidden"
          transition={{
            type: "spring",
            bounce: 0.25,
          }}
          className="span-2 span-4-sm span-6-xs b br1 br0-xs"
        >
          <DetailColumn title="Total Volume" value={totalVolume} />
        </motion.div>
        <motion.div
          variants={itemAnim}
          // animate={controls}
          // initial="hidden"
          transition={{
            type: "spring",
            bounce: 0.25,
          }}
          className="span-2 span-4-sm span-6-xs b br1 br0-sm br1-xs"
        >
          <DetailColumn title="Owners" value={owners} />
        </motion.div>
        <motion.div
          variants={itemAnim}
          // animate={controls}
          // initial="hidden"
          transition={{
            type: "spring",
            bounce: 0.25,
          }}
          className="span-2 span-4-sm span-6-xs b br1 br0-xs"
        >
          <DetailColumn title="Floor Price" value={floorPrice} />
        </motion.div>
        <motion.div
          variants={itemAnim}
          // animate={controls}
          // initial="hidden"
          transition={{
            type: "spring",
            bounce: 0.25,
          }}
          className="span-2 span-4-sm span-6-xs b br1"
        >
          <DetailColumn
            title="Creator"
            value={<CustomLink to={`/user/${userId}`}>{creator}</CustomLink>}
          />
        </motion.div>
        <motion.div
          variants={itemAnim}
          // animate={controls}
          // initial="hidden"
          transition={{
            type: "spring",
            bounce: 0.25,
          }}
          className="span-2 span-4-sm span-6-xs"
        >
          <DetailColumn title="Likes" value={likes} />
        </motion.div>
      </motion.div>

      <Tabs
        value={selectedTab}
        className="mt6 mb3"
        onChange={(e) => {
          // navigate(e,{
          //   replace: true,
          // });

          // change the url without reloading the page
          window.history.pushState({}, "", `/collection/${id}?tab=${e}`);
          setSelectedTab(e);
        }}
      >
        <Tab label="Items" value={"items"} />
        <Tab label="Activity" value={"activity"} />
      </Tabs>

      <React.Suspense fallback={<div>Loading...</div>}>
        {collectionRoutes[selectedTab] ? (
          React.createElement(collectionRoutes[selectedTab], {
            // userDetail,
            collection,
          })
        ) : (
          <div>
            <Page404 />
          </div>
        )}
      </React.Suspense>
      {/* <Items collection={collection} /> */}
    </section>
  );
}
