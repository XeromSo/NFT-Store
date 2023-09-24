import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "~/KIT";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FAKE_USERS } from "~/store/defaults";
import { CustomLink, OptimizedImage } from "~/components";
export default function TopSellers() {
  return (
    <section className="container md">
      <div className="flex column pt16 pb16 pt6-xs pb6-xs">
        <div className="flex alignCenter justifyBetween w100">
          <div className="flex column">
            <h2 className="fs-500">Top Sellers</h2>
            {/* <p className="textSecondary">
                  The NFT marketplace with everything for everyone
                </p> */}
          </div>
          <div className="flex alignCenter">
            <Button
              className="icon outlined circle"
              aria-label="Go to previous slide"
            >
              <MdKeyboardArrowLeft size="1.5em" />
            </Button>
            <Button
              className="icon contained circle ml2"
              aria-label="Go to next slide"
            >
              <MdKeyboardArrowRight size="1.5em" />
            </Button>
          </div>
        </div>

        <div className="w100 mt8">
          <Swiper
            style={{ padding: "1em 0", margin: "-1em 0" }}
            spaceBetween={24}
            slidesPerView={9}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 8,
              },
              480: {
                slidesPerView: 6,
                spaceBetween: 12,
              },
              780: {
                slidesPerView: 8,
              },
              1100: {
                slidesPerView: 10,
                spaceBetween: 16,
              },
            }}
          >
            {FAKE_USERS.map((_person, _idx) => (
              <SwiperSlide key={`${_person.creator}_${_idx}`}>
                <Seller info={_person} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

const Seller = ({ info }) => {
  const { avatar, creator, balance, id } = info;
  return (
    <div className="flex column alignCenter w100">
      <OptimizedImage
        src={avatar}
        alt={creator}
        // figureCaption={creator}
        figureClassName="w100 mb3 radius-3 overflowHide"
        imgClassName="w100 objectFitCover"
        loadingHeight="8em"
        imageHeight="100%"
      />

      {/* <img
        src={avatar}
        alt=""
        className="radius-3 mb3"
        style={{
          // height: "6.5em",
          width: "100%",
        }}
      /> */}
      <CustomLink to={`/user/${id}`}>
        <h3 className="fs-300">{creator}</h3>
      </CustomLink>
      <p className="fs-150 textSecondary">{balance} ETH</p>
    </div>
  );
};
