import React from "react";
import { BiHeart } from "react-icons/bi";
import OptimizedImage from "../OptimizedImage";
import { CustomLink } from "~/components";
import { Avatar } from "~/KIT";
// import { motion } from "framer-motion";
export default function SmallProduct({
  item,
  // onClick,
  navigateTo,
  navigateProps = {},
  radius = 2,
  className = "",
}) {
  const { title, image, avatar, creator, currentBid, likes, creatorId } = item;
  return (
    <article
      itemScope
      // whileInView={{ opacity: 1, y: 0 }}
      // initial={{ opacity: 0, y: 50 }}
      // transition={{ delay: 0.2 }}
      // initial={false}
      // onClick={onClick}
      className={`nft-small-product surface-1 shadow-2 radius-${radius} p1 flex column ${className}`}
    >
      <div className="relative">
        {/* <img
          className="mb1 objectFitCover w100"
          src={image}
          alt=""
          height={160}
        /> */}
        <CustomLink to={navigateTo} {...navigateProps}>
          <OptimizedImage
            itemProp="image"
            src={image}
            figureClassName="w100 h100 mb1 radius-2"
            imgClassName="w100 objectFitCover"
            imageHeight={"10em"}
            loadingHeight={"8em"}
          />
        </CustomLink>
        <div
          className="absolute flex alignCenter radius-1"
          style={{
            padding: "0.25em 0.5em",
            backgroundColor: "rgba(0,0,0,0.32)",
            color: "#fff",
            top: "0.35em",
            right: "0.35em",
          }}
        >
          <BiHeart className="mr1" size="1em" />
          <span itemProp="likes" className="fs-100">
            {likes}
          </span>
        </div>
      </div>
      <div className="p2">
        <CustomLink to={navigateTo} {...navigateProps} className="text">
          <h3
            itemProp="nft title"
            style={{ lineHeight: "1.2" }}
            className="fs-200 max1LineText"
          >
            {title}
          </h3>
        </CustomLink>

        <CustomLink
          to={`/user/${creatorId}`}
          className="textSecondary textOnHover"
        >
          <div className="flex alignCenter mt2">
            <Avatar
              itemProp="avatar"
              src={avatar}
              className="mr3 xSmall rounded"
            />
            <p className="fs-100" itemProp="nft creator">
              {creator}
            </p>
          </div>
        </CustomLink>
      </div>
    </article>
  );
}
