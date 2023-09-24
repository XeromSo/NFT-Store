import React from "react";
import { Avatar } from "~/KIT";
import { MdVerified } from "react-icons/md";
import OptimizedImage from "../OptimizedImage";
export default function Index(props) {
  const {
    cover,
    avatar,
    title,
    bio,
    detailWrapperClassName = "",
    bioClassName = "",
    onImageLoad,
  } = props;
  return (
    <>
      {/* <img
        src={cover}
        style={{ maxHeight: "26em", minHeight: '16em' }}
        className="objectFitCover radius-2 shadow-3 w100"
      /> */}
      <OptimizedImage
        src={cover}
        figureStyle={{ maxHeight: "26em", minHeight: "16em" }}
        imgClassName="objectFitCover w100"
        figureClassName="w100 radius-2 shadow-3 overflowHide"
        loadingHeight="26em"
        onImageLoad={onImageLoad}
      />
      <div className={`flex column ${detailWrapperClassName}`}>
        <Avatar
          src={avatar}
          className="xxLarge shadow-3"
          style={{ marginTop: "-2em" }}
        />
        <div className="mt3 flex alignCenter">
          <h1 className="fs-500 fontBold mr2">{title}</h1>
          <MdVerified size="2em" className="mainColor" />
        </div>
        <p
          className={`textSecondary mt3 ${bioClassName}`}
          style={{ maxWidth: "92ch" }}
        >
          {bio}
        </p>
      </div>
    </>
  );
}
