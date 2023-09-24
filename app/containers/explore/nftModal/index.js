import Tippy from "@tippyjs/react";
import React from "react";
import { BiDotsHorizontalRounded, BiHeart, BiMinus } from "react-icons/bi";
import { DetailColumn, OptimizedImage, Page404 } from "~/components";
import useToggle from "~/hooks/useToggle";
import { MdMoreHoriz, MdMoreVert } from "react-icons/md";
import { BsShareFill } from "react-icons/bs";
import { Avatar, Button } from "~/KIT";
import favIcon from "~/assets/favicon.ico";
import {
  SendNotification,
  WebShareLink,
} from "~/utils/client/pwa-utils.client";
export default function Index({ navigateTo, data, closeModal, modalId }) {
  if (data.error) {
    return <Page404 maxWidth="100%" />;
  }
  const {
    avatar,
    collection,
    collectionAvatar,
    collectionId,
    color,
    creator,
    currentBid,
    description,
    id,
    image,
    likes,
    creatorId,
    price,
    title,
  } = data;
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [moreMenuVisible, toggleMoreMenuVisible] = useToggle(false);
  return (
    <div className="flex column">
      <div className="p1 relative">
        {/* {!imageLoaded && <div>Image loading...</div>} */}

        {/* <OptimizedImage 
          src={image}
          figureClassName="w100 mb1"
          imgClassName="w100 objectFitCover radius-2"
          imageHeight={'20em'}
          // style={{minHeight: '16em', maxHeight: '28em'}}
        /> */}
        <img
          src={image}
          onLoad={() => setImageLoaded(true)}
          className={`w100 objectFitCover dialog-drag-to-close-${modalId}`}
          style={{
            maxHeight: "26em",
            minHeight: "16em",
            borderRadius: "0.75em",
          }}
        />
        <div
          className="absolute flex justifyCenter"
          onClick={closeModal}
          style={{ top: "1em", left: "1em", right: "1em" }}
          role="button"
        >
          <span
            className="radius-2"
            style={{
              backgroundColor: "#fff",
              height: "0.24em",
              width: "2.25em",
            }}
          />
        </div>
      </div>
      <div className="flex column p4 pt2">
        <h4
          role="link"
          onClick={() => navigateTo(`/nft/${id}`)}
          className="fs-400 cursorPoint mainColorOnHover"
        >
          {title}
        </h4>
        <div className="flex alignCenter justifyBetween pb2 b bb1">
          <div className="flex alignCenter">
            <span className="textSecondary mr1">Current bid:</span>
            <span className="fontBold">{currentBid} ETH</span>
          </div>
          <div className="flex alignCenter">
            <Button className="" startIcon={<BiHeart size="1.4em" />}>
              {likes}
            </Button>
            <Tippy
              visible={moreMenuVisible}
              onClickOutside={toggleMoreMenuVisible}
              interactive
              content={
                <div
                  className="flex column buttonAlignsLeft mW100"
                  style={{ width: "12em" }}
                >
                  <Button
                    startIcon={<BsShareFill />}
                    onClick={() => {
                      // WebShareLink(
                      //   window.location.href,
                      //   `${title}`,
                      //   `${description}`
                      // )
                      // SendNotification(title, {
                      //   body: `Current bid: ${currentBid} \n${window.location.href}/nft/${id}`,
                      //   silent: false,
                      //   image: collectionAvatar,
                      //   badge: favIcon,
                      //   icon: image,
                      // });
                    }}
                  >
                    Share
                  </Button>
                  {/* <Button onClick={()=>{

                  }}>
                    Place bid
                  </Button> */}
                  <Button
                    onClick={() => {
                      navigateTo(`/nft/${id}`);
                    }}
                  >
                    Detail
                  </Button>
                </div>
              }
            >
              <Button onClick={toggleMoreMenuVisible} className="icon">
                <BiDotsHorizontalRounded size="1.4em" />
              </Button>
            </Tippy>
          </div>
        </div>
        <div className="flex wrap mt2">
          <p className="textSecondary max4LineText">{description}</p>

          {/* <span className="ml1 mainColor">More</span> */}
        </div>
        <div className="grid col2 gap-6 mt5">
          <DetailColumn
            className="alignStart"
            title="Creator"
            value={
              <div
                className="flex alignCenter mt1 cursorPoint mainColorOnHover"
                role="link"
                onClick={() => {
                  navigateTo(`/user/${creatorId}`);
                }}
              >
                <Avatar src={avatar} className="small mr2 rounded" />
                <span>{creator}</span>
              </div>
            }
          />
          <DetailColumn
            className="alignStart"
            title="Collection"
            value={
              <div
                className="flex alignCenter mt1 cursorPoint mainColorOnHover"
                role="link"
                onClick={() => {
                  navigateTo(`/collection/${collectionId}`);
                }}
              >
                <Avatar src={collectionAvatar} className="small mr2 rounded" />
                <span>{collection}</span>
              </div>
            }
          />
        </div>
      </div>
      <div
        className="flex alignCenter mt4 p1 dialogBg"
        style={{ position: "sticky", bottom: 0 }}
      >
        {/* <Button
          onClick={() => {
            console.log("detail", navigateTo, id);
            navigateTo(`/nft/${id}`);
          }}
          className="outlined"
        >
          Detail
        </Button> */}
        <Button
          onClick={() => {
            // navigate(`/nft/${data.id}`);
            // closeModal({ callEvents: false });
          }}
          className="contained flexGrow1"
        >
          Place Bid
        </Button>
      </div>
    </div>
  );
}
