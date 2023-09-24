import React from "react";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar } from "~/KIT";
import { CustomLink } from "~/components";

export default function TrendNfts({ list }) {
  const memorizedList = React.useMemo(() => {
    return list.map((item) => {
      return (
        <SwiperSlide key={nanoid()}>
          <TrendNft item={item} />
        </SwiperSlide>
      );
    });
  }, [list]);
  return (
    <div className="flex column mt2">
      <div className="p3 pb1">
        <h5 className="fontBold">Trends</h5>
      </div>

      <div className="w100 nft-dashboard-trends">
        <Swiper
          style={{ padding: "1.25em 1.5em 1.25em 0.75em", margin: "-0.75em 0" }}
          spaceBetween={8}
          slidesPerView={"auto"}
          breakpoints={{
            320: {
              slidesPerView: "auto",
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
          }}
        >
          {memorizedList}
        </Swiper>
      </div>
    </div>
  );
}


const TrendNft = ({ item }) => {
    const {
      title,
      image,
      avatar,
      creator,
      currentBid,
      likes,
      id,
      color,
      collection,
      collectionAvatar,
      collectionId,
    } = item;
    // console.log(item);
    return (
      <div
        className={`relative overflowHide flex column justifyBetween p4 radius-2 
            whiteText
            `}
        style={{
          height: "14em",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: "-1",
            filter: "brightness(0.5)",
            // filter: ''
          }}
        />
        <div className="flex column">
          <CustomLink to={`/nft/${id}`}>
            <h3 className="fs-500 whiteText">{title}</h3>
          </CustomLink>
          <p className="">{creator}</p>
          <p>{currentBid} ETH</p>
        </div>
  
        <div className="flex alignCenter">
          <Avatar src={collectionAvatar} className="small mr2" />
          <CustomLink to={`/collection/${collectionId}`}>
            <span className="whiteText">{collection}</span>
          </CustomLink>
        </div>
      </div>
    );
  };