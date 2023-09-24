import React from "react";
import { BiHeart } from "react-icons/bi";
import OptimizedImage from "../OptimizedImage";

export default function Index({ detail, onClick }) {
  const { title, creator, likes, media, avatar } = detail;
  return (
    <div
      itemScope
      className={"flex column p4 shadow-3 radius-2 surface-1 cursorPoint"}
      onClick={() => (onClick ? onClick() : null)}
    >
      <div className="flex alignStart justifyBetween w100">
        <div className="flex alignCenter">
          {/* <OptimizedImage 
            src={avatar}
            alt={creator}
            figureCaption={creator}
            figureClassName="radius-2 overflowHide"
            imgClassName="w100"
            imageHeight={'3.5em'}
            
            figureStyle={{
              width: '3.5em',
              height: '3.5em',
            }}
          /> */}
          <img
            src={avatar}
            alt=""
            className="radius-2"
            style={{ height: "3.5em", width: "3.5em" }}
          />
          <div className="flex column ml3">
            <h3
              itemProp="collection name"
              className="fs-300 max1LineText pr3"
              title={title}
              style={{ lineHeight: "1.5" }}
            >
              {title}
            </h3>
            <div className="flex alignCenter fs-100 mt1">
              <span className="textSecondary mr1">Created by</span>
              <span itemProp="collection creator">{creator}</span>
            </div>
          </div>
        </div>
        <div
          className="flex alignCenter radius-1"
          style={{
            padding: "0.25em 0.5em",
            backgroundColor: "#000",
            color: "#fff",
          }}
        >
          <BiHeart className="mr1" />
          <span className="fs-100" itemProp="likes">
            {likes}
          </span>
        </div>
      </div>

      <div className="grid col2 gap-2 mt4" itemProp="collection items">
        <OptimizedImage
          src={media[0]}
          alt={title}
          loadingHeight="14em"
          // figureCaption={title}
          figureClassName="radius-1 overflowHide"
          imgClassName="w100 objectFitCover"
          imageHeight={"100%"}
        />
        {/* <img
          className="radius-1"
          src={media[0]}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        /> */}
        <div className="flex column gap-2">
          <div className="grid col2 gap-2">
            {/* <img
              className="radius-1"
              src={media[1]}
              style={{
                width: "100%",
              }}
            /> */}
            <OptimizedImage
              src={media[1]}
              loadingHeight="5em"
              alt={title}
              // figureCaption={title}
              figureClassName="radius-1 overflowHide"
              imgClassName="w100 objectFitCover"
              imageHeight={"auto"}
            />
            {/* <img
              className="radius-1"
              src={media[2]}
              style={{
                width: "100%",
              }}
            /> */}
            <OptimizedImage
              src={media[2]}
              loadingHeight="5em"
              alt={title}
              // figureCaption={title}
              figureClassName="radius-1 overflowHide"
              imgClassName="w100 objectFitCover"
              imageHeight={"auto"}
            />
          </div>
          {/* <img
            className="radius-1"
            src={media[3]}
            style={{
              width: "100%",
            }}
          /> */}
          <OptimizedImage
            src={media[3]}
            loadingHeight="8.5em"
            alt={title}
            // figureCaption={title}
            figureClassName="radius-1 overflowHide"
            imgClassName="w100 objectFitCover"
            imageHeight={"auto"}
          />
        </div>
      </div>
    </div>
  );
}
