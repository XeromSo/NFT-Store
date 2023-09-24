import React, { useState, useEffect } from "react";
import { TextField, Avatar, Tabs, Tab, Button } from "~/KIT";
import {
  BiHeart,
  BiDollar,
  BiLike,
  BiShareAlt,
  BiRefresh,
} from "react-icons/bi";
import { FAKE_BIDS } from "~/store/defaults";
import { MdMoreHoriz, MdPerson, MdKeyboardArrowDown } from "react-icons/md";
import { useAppContext } from "~/context/appContext";
import * as animationData from "~/assets/anims/successBid.json";
import * as successBgAnim from "~/assets/anims/successBg.json";
import Lottie from "lottie-react";
import {
  CustomLink,
  UnderConstruction,
  Page404,
  OptimizedImage,
} from "~/components";
// import { useEffect } from "react";
import { useLocation } from "@remix-run/react";
import { motion, useAnimationControls } from "framer-motion";
import Overview from "./overview";
import Properties from "./properties";
import Bids from "./bids";
import History from "./history";
import { useRef } from "react";

// const Overview = React.lazy(() => import("./overview"));
// const Properties = React.lazy(() => import("./properties"));
// const Bids = React.lazy(() => import("./bids"));
// const History = React.lazy(() => import("./history"));

const nftRoutes = {
  overview: Overview,
  properties: Properties,
  bids: Bids,
  history: History,
};
export default function Index({ nftItem }) {
  const {
    id,
    title,
    image,
    avatar,
    creator,
    currentBid,
    likes,
    color,
    description,
    collection,
    collectionId,
    collectionAvatar,
    price,
  } = nftItem;
  const appCtx = useAppContext();
  const { search } = useLocation();
  const [selectedTab, setSelectedTab] = useState("overview");
  const controls = useAnimationControls();

  const handleOpenBidModal = () => {
    appCtx.ModalsManager.show(BidForm, {
      nftItem,
      onPlaceBid: (_bidVal) => {
        // console.log("ast");
        return new Promise((resolve, reject) => {
          appCtx.ModalsManager.show(SuccessBidModal, {
            bidValue: _bidVal,
            width: "20em",
          }).then(resolve);
          // resolve();
        });
      },
    });
  };
  const handleOpenUnderConstruction = () => {
    appCtx.ModalsManager.show(UnderConstruction);
  };

  useEffect(() => {
    if (search) {
      const tab = search.split("=")[1];
      setSelectedTab(tab);
    }
  }, [search]);
  return (
    <div className="container md flex column pt5 pb5">
      <div className="grid col12 gap-2">
        <div className="span-8 span-12-md">
          <div className="nft-item-detail-section flex column alignCenter">
            {/* <img
              src={image}
              className="radius-2 shadow-3 nftPageImage"
              // style={{ height: "auto", width: "90%" }}
            /> */}

            <OptimizedImage
              src={image}
              figureClassName="radius-2 shadow-3 overflowHide nftPageImage flex justifyCenter"
              imgClassName="w100"
              imageHeight="auto"
              onImageLoad={() => {
                controls.start("show");
              }}
            />
            <div className="dNone dFlexMd column w100 mt8">
              <NftDetail
                style={{}}
                {...nftItem}
                controls={controls}
                handleOpenBidModal={handleOpenBidModal}
                handleOpenUnderConstruction={handleOpenUnderConstruction}
              />
            </div>

            <Tabs
              value={selectedTab}
              onChange={(e) => {
                // navigate(e,{
                //   replace: true,
                // });

                // change the url without reloading the page
                window.history.pushState({}, "", `/nft/${id}?tab=${e}`);
                setSelectedTab(e);
              }}
              className="mt6 mb3 overflowXAuto mW100 scrollBarVisibleNone"
            >
              <Tab label="Overview" value={`overview`} />
              <Tab label="Properties" value={`properties`} />
              <Tab label="Bids" value={`bids`} />
              <Tab label="History" value={`history`} />
            </Tabs>

            {/* <React.Suspense fallback={<div>Loading...</div>}> */}
            {nftRoutes[selectedTab] ? (
              React.createElement(nftRoutes[selectedTab], {
                bids: FAKE_BIDS,
                ...nftItem,
              })
            ) : (
              <div>
                <Page404 />
              </div>
            )}
            {/* </React.Suspense> */}
          </div>
        </div>
        <div className="span-4 span-12-md flex column p5 p2-xs dNoneMd">
          <NftDetail
            {...nftItem}
            controls={controls}
            handleOpenBidModal={handleOpenBidModal}
            handleOpenUnderConstruction={handleOpenUnderConstruction}
          />

          {/* <Button
            onClick={handleOpenBidModal}
            className="mt6 contained"
            // endIcon={<BiDollar />}
          >
            Place a bid
          </Button> */}
        </div>
      </div>
    </div>
  );
}

const container = {
  hidden: {},
  show: {
    // opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.06,
    },
  },
};
const itemAnim = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};
const NftDetail = ({
  style = { position: "sticky", top: "5em", zIndex: 4 },
  collection,
  collectionId,
  collectionAvatar,
  title,
  avatar,
  creator,
  creatorId,
  currentBid,
  likes,
  color,
  price,
  handleOpenBidModal,
  handleOpenUnderConstruction,
  controls,
}) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={controls}
      className="flex column alignStart"
      style={style}
    >
      <motion.div
        variants={itemAnim}
        transition={{
          type: "spring",
          bounce: 0.25,
        }}
      >
        <CustomLink to={`/collection/${collectionId}`}>
          <div className="flex alignCenter">
            <Avatar src={collectionAvatar} className="xSmall rounded" />
            <h3 className="fs-200 ml2 textSecondary">{collection}</h3>
          </div>
        </CustomLink>
      </motion.div>
      <motion.div
        className=" mt2"
        variants={itemAnim}
        transition={{
          type: "spring",
          bounce: 0.25,
        }}
      >
        <h1 className="fs-500">{title}</h1>
      </motion.div>
      <div className="grid col2 gap-1 mt5 w100">
        <CustomLink to={`/user/${creatorId}`}>
          <motion.div
            variants={itemAnim}
            transition={{
              type: "spring",
              bounce: 0.25,
            }}
            className="flex alignCenter"
          >
            <Avatar src={avatar} className="small mr3" />
            <div className="flex column">
              <label className="textSecondary fs-100">Creator</label>
              <h3 className="fs-200">{creator}</h3>
            </div>
          </motion.div>
        </CustomLink>
        <motion.div
          variants={itemAnim}
          transition={{
            type: "spring",
            bounce: 0.25,
          }}
          className="flex alignCenter"
        >
          <Avatar className={`small mr3 ${color}Bg`}>
            {/* <MdPerson /> */}
          </Avatar>
          <div className="flex column">
            <label className="textSecondary fs-100">Instant Price</label>
            <h3 className="fs-200">{price}</h3>
          </div>
        </motion.div>
      </div>
      <div className="flex alignCenter justifyBetween mt4 pt3 b bt1 w100">
        <div className="flex alignCenter" style={{ opacity: "0.8" }}>
          <motion.div
            variants={itemAnim}
            transition={{
              type: "spring",
              bounce: 0.25,
            }}
          >
            <Button
              onClick={handleOpenUnderConstruction}
              startIcon={<BiHeart />}
            >
              {likes}
            </Button>
          </motion.div>
          <motion.div
            variants={itemAnim}
            transition={{
              type: "spring",
              bounce: 0.25,
            }}
          >
            <Button
              onClick={handleOpenUnderConstruction}
              startIcon={<BiShareAlt />}
            >
              Share
            </Button>
          </motion.div>
          <motion.div
            variants={itemAnim}
            transition={{
              type: "spring",
              bounce: 0.25,
            }}
          >
            <Button
              onClick={handleOpenUnderConstruction}
              startIcon={<BiRefresh />}
            >
              Refresh
            </Button>
          </motion.div>
        </div>
        <Button className="icon">
          <MdMoreHoriz />
        </Button>
      </div>
      <motion.div
        variants={itemAnim}
        transition={{
          type: "spring",
          bounce: 0.25,
        }}
        className="flex alignCenter justifyBetween mt5 p2 pl3 pr3 radius-2 mainFilledBg w100"
      >
        <div className="flex column">
          <label className="textSecondary fs-150">Current Bid</label>
          <div className="flex alignCenter">
            <span className="fontBold fs-300">{currentBid} ETH</span>
            <span className="fontBold fs-150 textSecondary ml2">$150.15</span>
          </div>
        </div>
        <Button onClick={handleOpenBidModal} className="contained h100">
          Place Bid
        </Button>
      </motion.div>
    </motion.div>
  );
};
const BidForm = ({ closeModal, nftItem, onPlaceBid }) => {
  return (
    <div className="p5 flex column">
      <h4 className="fs-400">Place a Bid</h4>
      <p className="textSecondary mt2">
        You must bid at least <strong className="text ml1 mr1">0.1 ETH</strong>{" "}
        higher than the current bid to win this
      </p>

      <TextField
        className="mt4"
        placeholder="Enter bid amount.."
        endIcon={
          <Button className="mr1 fs-150" endIcon={<MdKeyboardArrowDown />}>
            ETH
          </Button>
        }
      />
      <div className="b bt1 pt4 mt4 mb4 w100 flex column gap-2">
        <div className="flex alignCenter justifyBetween w100">
          <label className="textSecondary fs-150">Your balance</label>
          <strong className="fs-150">69.000 ETH</strong>
        </div>
        <div className="flex alignCenter justifyBetween w100">
          <label className="textSecondary fs-150">Service fee</label>
          <strong className="fs-150">0.02 ETH</strong>
        </div>
        <div className="flex alignCenter justifyBetween w100">
          <label className="textSecondary fs-150">Total bid amount</label>
          <strong className="fs-150">15.02 ETH</strong>
        </div>
      </div>
      <Button
        className="contained mt6 w100"
        onClick={() => {
          onPlaceBid().then(() => {
            console.log("ast");
            closeModal();
          });
        }}
      >
        Place a bid
      </Button>
    </div>
  );
};

const SuccessBidModal = ({ closeModal, bidValue }) => {
  const lottieRef = useRef(null);
  const [animPlay, setAnimPlay] = useState(false);
  // const defaultOptions = {
  //   loop: false,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  const handlePlayOtherAnim = () => {
    // alert('tama')
    // setAnimPlay(true);
    lottieRef.current.play();
  };
  return (
    <div
      className="flex column alignCenter textAlign center"
      style={{ maxWidth: "20em", overflow: "visible" }}
    >
      <div className="relative p5">
        <Lottie
          // options={defaultOptions}
          style={{
            width: "240px",
            height: "240px",
          }}
          loop={false}
          autoplay
          animationData={animationData}
          onComplete={() => handlePlayOtherAnim()}
        />
        <div className="absolute inset-0" style={{ zIndex: -1 }}>
          <Lottie
            lottieRef={lottieRef}
            loop
            autoplay={false}
            animationData={successBgAnim}
            style={{
              height: "240px",
            }}
          />
        </div>
      </div>

      <div className="flex column alignCenter p5 pt0">
        <h4 className="fs-400 mb2 flex column alignCenter">
          <span>Your Bidding</span>

          <span>Successfuly Added</span>
        </h4>
        <p className="textSecondary fs-150">
          Yaayy! Your bid (<strong className="text">15.02 ETH</strong>) has been
          successfully placed. You will be notified if you win the auction.
        </p>

        <Button className="mt5 contained w100">Watch the listing</Button>
      </div>
    </div>
  );
};
