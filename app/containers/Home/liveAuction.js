import { useNavigate } from "@remix-run/react";
import { nanoid } from "nanoid";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Product, CustomLink } from "~/components";
import { Button } from "~/KIT";
import { FAKE_NFTS } from "~/store/defaults";
export default function LiveAuction() {
  // const navigate = useNavigate();
  // const handleGoToNftPage = (id) => {
  //   navigate(`/nft/${id}`);
  // };

  return (
    <section className="container md">
      <div className="flex column pt16 pb16 pt6-xs pb6-xs">
        <div className="flex alignCenter justifyBetween w100">
          <div className="flex column">
            <h2 className="fs-500">Live Auction</h2>
            <p className="textSecondary fs-300">
              The NFT marketplace with everything for everyone
            </p>
          </div>
          <CustomLink className="dNoneXs" to="/explore">
            <Button endIcon={<BiChevronRight />}>Explore more</Button>
          </CustomLink>
        </div>

        <div className="w100 mt8">
          <Swiper
            style={{ padding: "1em 0", margin: "-1em 0" }}
            spaceBetween={16}
            slidesPerView={4}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              780: {
                slidesPerView: 3,
              },
              1100: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }}

            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {FAKE_NFTS.map((item, index) => (
              <SwiperSlide key={nanoid()}>
                <Auction item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <CustomLink className="dNone dFlexXs mt5 w100" to="/explore">
          <Button className="w100" endIcon={<BiChevronRight />}>
            Explore more
          </Button>
        </CustomLink>
      </div>
    </section>
  );
}

const Auction = ({ item }) => {
  return <Product item={item} navigateTo={`/nft/${item.id}`} />;
};
