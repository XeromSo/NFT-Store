import React from "react";
import {
  BiAddToQueue,
  BiHeart,
  BiPurchaseTagAlt,
  BiTransfer,
} from "react-icons/bi";
import { MdDone } from "react-icons/md";
import { CustomLink } from "~/components";
import { Avatar } from "~/KIT";
import { FAKE_COLLECTION_ACTIVITY } from "~/store/defaults";
import { FaHammer } from "react-icons/fa";
import { motion } from "framer-motion";

const Listed = ({ detail }) => {
  const { address, type, value, date, nft, nftAvatar } = detail;
  return (
    <ActivityTemplate
      date={date}
      address={address}
      nft={nft}
      nftAvatar={nftAvatar}
      icon={BiAddToQueue}
    >
      <p className="textSecondary fs-150 flex wrap alignCenter mt1">
        listed by
        <CustomLink to="/user/2" className="text mainColorOnHover">
          <div className="flex alignCenter mr2 ml2">
            <Avatar className="xxSmall primaryFilledBg" />
            <span className="ml2">{address}</span>
          </div>
        </CustomLink>
        for <span className="text mr1 ml1">{value.price}</span>
      </p>
    </ActivityTemplate>
  );
};
const Transfer = ({ detail }) => {
  const { address, type, value, date, nft, nftAvatar } = detail;
  return (
    <ActivityTemplate
      date={date}
      address={address}
      nft={nft}
      nftAvatar={nftAvatar}
      icon={BiTransfer}
    >
      <p className="textSecondary fs-150 flex wrap alignCenter mt1">
        transfered from
        <CustomLink to="/user/2" className="text mainColorOnHover">
          <div className="flex alignCenter mr2 ml2">
            <Avatar className="xxSmall primaryFilledBg" />
            <span className="ml2">{address}</span>
          </div>
        </CustomLink>
        to{" "}
        <CustomLink to="/user/2" className="text mainColorOnHover">
          <div className="flex alignCenter mr2 ml2">
            <Avatar className="xxSmall primaryFilledBg" />
            <span className="ml2">{value.toAddress}</span>
          </div>
        </CustomLink>
      </p>
    </ActivityTemplate>
  );
};
const Liked = ({ detail }) => {
  const { address, type, value, date, nft, nftAvatar } = detail;
  return (
    <ActivityTemplate
      date={date}
      address={address}
      nft={nft}
      nftAvatar={nftAvatar}
      icon={BiHeart}
    >
      <p className="textSecondary fs-150 flex wrap alignCenter mt1">
        liked by
        <CustomLink to="/user/2" className="text mainColorOnHover">
          <div className="flex alignCenter ml2">
            <Avatar className="xxSmall primaryFilledBg" />
            <span className="ml2">{address}</span>
          </div>
        </CustomLink>
      </p>
    </ActivityTemplate>
  );
};
const Purchase = ({ detail }) => {
  const { address, type, value, date, nft, nftAvatar } = detail;
  return (
    <ActivityTemplate
      date={date}
      address={address}
      nft={nft}
      nftAvatar={nftAvatar}
      icon={BiPurchaseTagAlt}
    >
      {value.mode === "buy" ? (
        <p className="textSecondary fs-150 flex wrap alignCenter mt1">
          purchased by
          <CustomLink to="/user/2" className="text mainColorOnHover ml2 mr2">
            <div className="flex alignCenter">
              <Avatar className="xxSmall primaryFilledBg" />
              <span className="ml2">{address}</span>
            </div>
          </CustomLink>
          for
          <span className="text mr2 ml2">{value.price}</span>
          from
          <CustomLink to="/user/2" className="text mainColorOnHover ml1">
            <div className="flex alignCenter ml2">
              <Avatar className="xxSmall primaryFilledBg" />
              <span className="ml2">{value.fromAddress}</span>
            </div>
          </CustomLink>
        </p>
      ) : (
        <p className="textSecondary fs-150 flex wrap alignCenter mt1">
          <CustomLink to="/user/2" className="text mainColorOnHover">
            <div className="flex alignCenter mr2">
              <Avatar className="xxSmall primaryFilledBg" />
              <span className="ml2">{address}</span>
            </div>
          </CustomLink>
          accepted bid <span className="text mr1 ml1">{value.price}</span>
          by
          <CustomLink to="/user/2" className="text mainColorOnHover">
            <div className="flex alignCenter ml2">
              <Avatar className="xxSmall primaryFilledBg" />
              <span className="ml2">{value.fromAddress}</span>
            </div>
          </CustomLink>
        </p>
      )}
    </ActivityTemplate>
  );
};
const Bid = ({ detail }) => {
  const { address, type, value, date, nft, nftAvatar } = detail;
  return (
    <ActivityTemplate
      date={date}
      address={address}
      nft={nft}
      nftAvatar={nftAvatar}
      icon={FaHammer}
    >
      {value.mode === "cancel" ? (
        <p className="textSecondary fs-150 flex wrap alignCenter mt1">
          bid cancelled by
          <CustomLink to="/user/2" className="text mainColorOnHover ml2 mr2">
            <div className="flex alignCenter">
              <Avatar className="xxSmall primaryFilledBg" />
              <span className="ml2">{address}</span>
            </div>
          </CustomLink>
        </p>
      ) : (
        <p className="textSecondary fs-150 flex wrap alignCenter mt1">
          <CustomLink to="/user/2" className="text mainColorOnHover">
            <div className="flex alignCenter mr2">
              <Avatar className="xxSmall primaryFilledBg" />
              <span className="ml2">{address}</span>
            </div>
          </CustomLink>
          offered <span className="text mr1 ml1">{value.price}</span>
        </p>
      )}
    </ActivityTemplate>
  );
};
const Sales = ({ detail }) => {
  return <div className="flex alignCenter">Sales</div>;
};

const ActivityTemplate = ({
  date,
  address,
  children,
  nft,
  nftAvatar,
  icon = BiAddToQueue,
}) => {
  const Icon = icon;
  return (
    <div className="flex alignCenter">
      <Avatar
        badgePosition="top-left"
        badge={
          <div
            className="blackBg whiteText flex alignCenter justifyCenter radius-50"
            style={{ padding: "0.24em" }}
          >
            <div className="verfiedProfileBadge flex alignCenter justifyCenter">
              <Icon size="1em" />
            </div>
          </div>
        }
        src={nftAvatar}
        className="large rounded"
      />
      <div className="flex column ml4">
        <CustomLink to="/nft/3" className="text mainColorOnHover">
          <h5 className="fontBold fs-200" style={{ lineHeight: "1.2" }}>
            {nft}
          </h5>
        </CustomLink>
        {children}
        <time className="textSecondary fs-150 mt2" dateTime={date}>
          {date}
        </time>
      </div>
    </div>
  );
};

const comps = {
  listed: Listed,
  transfer: Transfer,
  liked: Liked,
  purchase: Purchase,
  bid: Bid,
  sales: Sales,
};
// burns, carbon footprint ?!
const container = {
  hidden: {},
  show: {
    // opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};
const itemAnim = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};
export default function Index() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w100 surface-1 shadow-3 radius-2 p4 flex column gap-4 overflowHide"
      style={{ maxWidth: "48em" }}
    >
      {FAKE_COLLECTION_ACTIVITY.map((_activity, i) => {
        const Comp = comps[_activity.type];
        return (
          <motion.div
            variants={itemAnim}
            transition={{
              type: "spring",
              bounce: 0.25,
            }}
            key={`${_activity.type}_${i}`}
          >
            <Comp detail={_activity} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
