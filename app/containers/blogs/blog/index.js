import React from "react";
import { BiCommentDetail, BiLike, BiShareAlt } from "react-icons/bi";
import { MdHeadphonesBattery } from "react-icons/md";
import { OptimizedImage } from "~/components";
import { Button } from "~/KIT";
import { motion } from "framer-motion";
const container = {
  hidden: {
    // opacity: 0,
  },
  show: {
    // opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.06,
    },
  },
};
const itemAnim = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0 },
};
export default function Index({ blog }) {
  const {
    title,
    author,
    date,
    image,
    id,
    content,
    categories,
    likes,
    comments,
  } = blog;
  return (
    <div className="container sm flex column alignCenter mt16 pt16 mt0-xs pt10-xs">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex column alignCenter textAlign center"
        style={{ maxWidth: "44em" }}
      >
        <motion.p variants={itemAnim} className="textSecondary">
          Published by {author} on {date}
        </motion.p>
        <motion.h1
          variants={itemAnim}
          className="fs-500 fontBold mt1 mb3"
          style={{ lineHeight: "1" }}
        >
          {title}
        </motion.h1>

        <motion.div
          variants={itemAnim}
          className="flex wrap alignCenter gap-1 mt2"
        >
          {categories.map((category, index) => (
            <div
              className="mainFilledBg b b1 radius-2 capitalizeText pl3 pr3 pt1 pb1"
              key={index}
            >
              {category}
            </div>
          ))}
        </motion.div>
      </motion.div>

      <OptimizedImage
        src={image}
        figureClassName="overflowHide w100 radius-2 shadow-3 mt8"
        imgClassName="w100 objectFitCover"
        imageHeight="auto"
      />
      {/* <img src={image} className="w100 mt8 radius-2 shadow-3" /> */}

      <div className="relative mt8 w100 flex column alignCenter">
        <div className="flex column" style={{ maxWidth: "44em" }}>
          <p className="fs-300">{content}</p>
          <p className="fs-300">{content}</p>
          <p className="fs-300">{content}</p>
          <p className="fs-300">{content}</p>
          <p className="fs-300">{content}</p>
          <p className="fs-300">{content}</p>
          <p className="fs-300">{content}</p>
          <p className="fs-300">{content}</p>
          <p className="fs-300">{content}</p>
          <p className="fs-300">{content}</p>
          <p className="fs-300">{content}</p>
          <p className="fs-300">{content}</p>
          <p className="fs-300">{content}</p>
          <p className="fs-300">{content}</p>
          <p className="fs-300">{content}</p>
          <p className="fs-300">{content}</p>
          <p className="fs-300">{content}</p>
          <p className="fs-300">{content}</p>
          <p className="fs-300">{content}</p>
          <p className="fs-300">{content}</p>
        </div>
        <div className="dNone dFlexSm wrap alignCenter mt6 w100 mainFilledBg p2 radius-1 gap-1">
          <Button startIcon={<BiShareAlt size="1.6em" />}>Share</Button>
          <Button startIcon={<BiCommentDetail size="1.6em" />}>
            Comments ({comments})
          </Button>
          <Button startIcon={<BiLike size="1.6em" />}>Likes ({likes})</Button>
          {/* <Button className="icon large relative">
            <BiLike size="1.6em" />
            <Badge value={likes} />
          </Button>
          <Button className="icon large relative">
            <BiCommentDetail size="1.6em" />
            <Badge value={comments} />
          </Button> */}
        </div>
        <div
          className="absolute dNoneSm"
          style={{ top: "1em", right: "1em", bottom: "1em" }}
        >
          <div
            className="flex column gap-2"
            style={{ position: "sticky", top: "4em" }}
          >
            <Button className="icon large">
              <BiShareAlt size="1.6em" />
            </Button>
            <Button className="icon large relative">
              <BiLike size="1.6em" />
              <Badge value={likes} />
            </Button>
            <Button className="icon large relative">
              <BiCommentDetail size="1.6em" />
              <Badge value={comments} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Badge = ({
  value,
  style = {
    zIndex: 4,
    top: "-0.5em",
    right: "-0.5em",
    height: "1.8em",
    width: "1.8em",
    padding: "0.2em",
  },
}) => {
  return (
    <span
      className="mainBg fs-100 radius-50 absolute flex alignCenter justifyCenter"
      style={style}
    >
      {value}
    </span>
  );
};
