import React from "react";
import { BiHeart } from "react-icons/bi";
import { motion } from "framer-motion";
import OptimizedImage from "../OptimizedImage";
import { CustomLink } from "~/components";
import { Avatar } from "~/KIT";
const Index = ({
  item,
  navigateTo,
  navigateProps = {},
  className = "",
  radius = 2,
}) => {
  const { title, image, avatar, creator, creatorId, currentBid, likes } = item;
  // console.log("assssssssssssssst");
  return (
    <motion.article
      itemScope
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className={`nft-product surface-1 shadow-3 radius-${radius} p1 flex column w100 ${className}`}
      // onClick={onClick}
    >
      <div className="relative">
        {/* <img
          className={`radius-${radius} mb3 w100 objectFitCover`}
          src={image}
          alt=""
          height={320}
        /> */}
        <CustomLink to={navigateTo} {...navigateProps}>
          <OptimizedImage
            itemProp="image"
            alt={title}
            src={image}
            figureClassName={`w100 h100 mb3 radius-${radius} overflowHide`}
            imgClassName={`w100 objectFitCover`}
            imageHeight={320}
          />
        </CustomLink>
        <div
          className="absolute flex alignCenter radius-1"
          style={{
            padding: "0.25em 0.5em",
            backgroundColor: "#000",
            color: "#fff",
            top: "0.5em",
            right: "0.5em",
          }}
        >
          <BiHeart className="mr1" />
          <span itemProp="likes" className="fs-100">
            {likes}
          </span>
        </div>
      </div>
      <div className="flex column p2 pt0">
        <CustomLink to={navigateTo} {...navigateProps} className="text">
          <h3 itemProp="title" className="fs-200">
            {title}
          </h3>
        </CustomLink>

        <div className="flex alignCenter justifyBetween mt4">
          <CustomLink to={`/user/${creatorId}`} className="text">
            <div className="flex alignCenter">
              <Avatar
                src={avatar}
                className="rounded"
                alt={creator}
                itemProp="creator"
              />
              {/* <img
              src={avatar}
              height={48}
              width={48}
              className="radius-2"
              alt={creator}
              itemProp="creator avatar"
            /> */}
              <div className="flex column ml2">
                <span className="textSecondary fs-100">Creator</span>
                <span itemProp="creator name">{creator}</span>
              </div>
            </div>
          </CustomLink>

          <div className="flex column alignEnd">
            <label className="textSecondary fs-100">Current Bid</label>
            <span itemProp="current bid">{currentBid} ETH</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default Index;
