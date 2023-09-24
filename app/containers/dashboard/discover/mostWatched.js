import React from "react";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import { CustomLink } from "~/components";

export default function MostWatched({ list }) {
  const memorizedList = React.useMemo(() => {
    return list.map((item) => {
      return (
        <SwiperSlide key={nanoid()}>
          <MostWatchedProduct item={item} />
        </SwiperSlide>
      );
    });
  }, [list]);
  return (
    <div className="flex column mt3">
      <div className="p3 pb1">
        <h5 className="fontBold">Most watched</h5>
      </div>
      <div className="w100 mostWatchedSwiperWrapper">
        <Swiper
          slidesPerView={1}
          grid={{
            rows: 2,
          }}
          spaceBetween={16}
          pagination={{
            clickable: true,
          }}
          //   navigation Navigation
          modules={[Grid, Pagination]}
          className="h100"
          breakpoints={{
            320: {
              slidesPerView: 1,
              grid: {
                rows: 2,
              },
            },
            640: {
              slidesPerView: 2,
              grid: {
                rows: 2,
              },
            },
          }}
          style={{ padding: "1.25em 2.5em 1.25em 0.75em", margin: "-0.75em 0" }}
        >
          {memorizedList}
        </Swiper>
      </div>
    </div>
  );
}

const MostWatchedProduct = ({ item }) => {
  const { id, title, image, avatar, creator, currentBid, likes } = item;
  return (
    <div className="flex alignCenter h100">
      <img
        className="objectFitCover radius-2 shadow-1"
        src={image}
        style={{ width: "8em", height: "100%" }}
      />
      <div className="flex column ml3">
        <CustomLink to={`/nft/${id}`} className="text">
          <h6 className="max1LineText">{title}ss</h6>
        </CustomLink>
        <span className="textSecondary mt1">{creator}</span>
        <span className="textSecondary fs-150">
          {likes} likes - {currentBid} ETH
        </span>
      </div>
    </div>
  );
};
