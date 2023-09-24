import React from "react";
import { Title } from "~/components";
import { Select, Button, Avatar } from "~/KIT";
import { FAKE_NFTS, FAKE_COMMENTS } from "~/store/defaults";
import { MdInfo } from "react-icons/md";
import {
  BiRightArrowAlt,
  BiPulse,
  BiUser,
  BiUpArrowAlt,
  BiDownArrowAlt,
  BiLinkAlt,
  BiCommentAdd,
  BiHeart,
} from "react-icons/bi";
import { nanoid } from "nanoid";
export default function Index() {
  return (
    <div className="mt2 grid col12 gap-2">
      <div className="span-8 span-12-md flex column gap-2">
        <OverviewCard />
        <ChartCard />
      </div>
      <div className="span-4 span-12-md flex column gap-2">
        <PopularNfts />
        <Comments />
      </div>
    </div>
  );
}

const OverviewCard = () => {
  return (
    <div className="surface-1 shadow-2 radius-1 p4 flex column">
      <div className="flex alignCenter justifyBetween w100">
        <Title title="Overview" color="primary" />
        <Select
          className="small"
          parentStyle={{
            width: "9em",
          }}
          options={[
            {
              label: "Last 7 days",
              value: "last7days",
            },
            {
              label: "Last 1 month",
              value: "last30days",
            },
            {
              label: "Last 3 month",
              value: "last90days",
            },
            {
              label: "All time",
              value: "allTime",
            },
          ]}
          value="allTime"
        />
      </div>

      <div className="flex alignCenter column-xs surface-4 radius-2 p3 mt3">
        <Button className="w100 flex justifyStart alignStart p3 dashboardOverviewBtn active relative ">
          <Avatar className="secondaryFilledBg small">
            <BiUser />
          </Avatar>
          <div className="flex column alignStart ml3">
            <div className="flex alignCenter fs-100" style={{ opacity: "0.6" }}>
              <span className="mr2">Followers</span>
              <MdInfo />
            </div>
            <h4>1,234</h4>
          </div>

          <div
            className="fs-100 error absolute flex alignCenter errorFilledBg radius-1 p1"
            style={{ top: "0.5em", right: "0.5em" }}
          >
            <BiDownArrowAlt className="mr1" />
            <span>37%</span>
          </div>
        </Button>
        <Button className="ml1 mt1-xs ml0-xs w100 flex justifyStart alignStart p3 dashboardOverviewBtn relative">
          <Avatar className="infoFilledBg small">
            <BiPulse />
          </Avatar>
          <div className="flex column alignStart ml3">
            <div className="flex alignCenter fs-100" style={{ opacity: "0.6" }}>
              <span className="mr2">Incomes</span>
              <MdInfo />
            </div>
            <h4>2.48 ETH</h4>
          </div>

          <div
            className="fs-100 success absolute flex alignCenter successFilledBg radius-1 p1"
            style={{ top: "0.5em", right: "0.5em" }}
          >
            <BiUpArrowAlt className="mr1" />
            <span>37%</span>
          </div>
        </Button>
      </div>

      <div className="grid col6 col3-sm gap-3 mt5 p3">
        <Person
          detail={{
            src: "https://thumbs.dreamstime.com/b/closeup-photo-funny-excited-lady-raise-fists-screaming-loudly-celebrating-money-lottery-winning-wealthy-rich-person-wear-casual-172563278.jpg",
            name: "John Doe",
          }}
        />
        <Person
          detail={{
            src: "https://thumbs.dreamstime.com/b/closeup-photo-funny-excited-lady-raise-fists-screaming-loudly-celebrating-money-lottery-winning-wealthy-rich-person-wear-casual-172563278.jpg",
            name: "John Doe",
          }}
        />
        <Person
          detail={{
            src: "https://thumbs.dreamstime.com/b/closeup-photo-funny-excited-lady-raise-fists-screaming-loudly-celebrating-money-lottery-winning-wealthy-rich-person-wear-casual-172563278.jpg",
            name: "John Doe",
          }}
        />
        <Person
          detail={{
            src: "https://thumbs.dreamstime.com/b/closeup-photo-funny-excited-lady-raise-fists-screaming-loudly-celebrating-money-lottery-winning-wealthy-rich-person-wear-casual-172563278.jpg",
            name: "John Doe",
          }}
        />
        <Person
          detail={{
            src: "https://thumbs.dreamstime.com/b/closeup-photo-funny-excited-lady-raise-fists-screaming-loudly-celebrating-money-lottery-winning-wealthy-rich-person-wear-casual-172563278.jpg",
            name: "John Doe",
          }}
        />

        <div className="flex column alignCenter">
          <Avatar className="mainFilledBg">
            <BiRightArrowAlt />
          </Avatar>
          <span className="textSecondary mt2 fs-150">View all</span>
        </div>
      </div>
    </div>
  );
};
const Person = ({ detail }) => {
  const { src, name } = detail;
  return (
    <div className="flex column alignCenter">
      <Avatar src={src} />
      <span className="textSecondary mt2 fs-150">{name}</span>
    </div>
  );
};

const ChartCard = () => {
  return (
    <div className="surface-1 shadow-2 radius-1 p3 flex column">
      <div className="flex alignCenter justifyBetween w100">
        <div className="flex alignCenter">
          <div
            className="secondaryFilledBg mr3"
            style={{ height: "2em", width: "1em", borderRadius: "0.2em" }}
          />
          <h4 className="fs-300" style={{ lineHeight: "1.2" }}>
            Followers statistics
          </h4>
        </div>
        <Select
          className="small"
          parentStyle={{
            width: "9em",
          }}
          options={[
            {
              label: "Last 7 days",
              value: "last7days",
            },
            {
              label: "Last 1 month",
              value: "last30days",
            },
            {
              label: "Last 3 month",
              value: "last90days",
            },
            {
              label: "All time",
              value: "allTime",
            },
          ]}
          value="last7days"
        />
      </div>

      <div
        className="infoFilledBg flex alignCenter justifyCenter mt3 radius-1"
        style={{ height: "24em" }}
      >
        Chart is here
      </div>
    </div>
  );
};

const PopularNfts = () => {
  return (
    <div className="surface-1 shadow-2 radius-1 p3 flex column">
      <div className="flex alignCenter">
        <div
          className="infoFilledBg mr3"
          style={{ height: "2em", width: "1em", borderRadius: "0.2em" }}
        />
        <h4 className="fs-300" style={{ lineHeight: "1.2" }}>
          Trending NFTs
        </h4>
      </div>

      <div className="grid col2 gap-2 textSecondary mt5 fs-100 pb2 b bb1">
        <span>DETAIL</span>
        <span className="textAlign right">PRICE</span>
      </div>

      <div className="flex column gap-2 pt2">
        {FAKE_NFTS.slice(0, 4).map((nft, index) => {
          return <NftProduct key={nanoid()} detail={nft} />;
        })}

        <Button className="outlined mt1">All Products</Button>
      </div>
    </div>
  );
};
const NftProduct = ({ detail }) => {
  const { title, image, avatar, creator, currentBid, likes, color } = detail;
  return (
    <div className="grid alignCenter col5 gap-2">
      <div className="flex alignCenter span-3">
        <Avatar
          src={image}
          style={{ borderRadius: "0.3em", height: "2em", width: "2em" }}
        />
        <div className="flex column ml3 fs-150">
          <span className="max1LineText" title={title}>
            {title}
          </span>
          <span className="textSecondary">{creator}</span>
        </div>
      </div>

      <div className="flex column alignEnd span-2">
        <span>{currentBid} ETH</span>
        <span className="textSecondary fs-150">{likes} likes</span>
      </div>
    </div>
  );
};

const Comments = () => {
  return (
    <div className="surface-1 shadow-2 radius-1 p3 flex column">
      <div className="flex alignCenter">
        <div
          className="warningFilledBg mr3"
          style={{ height: "2em", width: "1em", borderRadius: "0.2em" }}
        />
        <h4 className="fs-300" style={{ lineHeight: "1.2" }}>
          Comments
        </h4>
      </div>
      <div className="flex column gap-2 pt2 mt4">
        {FAKE_COMMENTS.slice(0, 4).map((comment, index) => {
          return <Comment key={nanoid()} detail={comment} />;
        })}
        <Button className="outlined mt1">All Comments</Button>
      </div>
    </div>
  );
};
const Comment = ({ detail }) => {
  const { avatar, name, comment, date, forProduct } = detail;
  // console.log(detail);
  return (
    <div className="flex alignStart pt1 pb1 b bb1">
      <Avatar className="small" src={avatar} />
      <div className="flex column ml3 w100">
        <div className="flex column fs-150">
          <span className="fontBold">{name}</span>

          {/* <span className="textSecondary">On</span> */}
          <div className="flex wrap">
            <span className="textSecondary mr1">On</span>
            <span className="ellipsisText fonBold" style={{ maxWidth: "24ch" }}>
              {forProduct}
            </span>
          </div>

          <p className="mt2 fs-150">{comment}</p>
        </div>

        <div className="flex alignCenter justifyBetween">
          <time className="mt2">
            <span className="textSecondary fs-100">{date} ago</span>
          </time>
          <div className="flex alignCenter">
            <Button title="Add Comment" className="icon small fs-150">
              <BiCommentAdd />
            </Button>
            <Button title="Like Comment" className="icon small fs-150">
              <BiHeart />
            </Button>
          </div>
        </div>

        {/* <div className="flex alignCenter gap-1 mt3 w100">
          <Button className="w100">
            <BiCommentAdd />
          </Button>
          <Button className="w100">
            <BiHeart />
          </Button>
          <Button className="w100">
            <BiLinkAlt />
          </Button>
        </div> */}
      </div>
    </div>
  );
};
