import React from "react";
import { Button } from "~/KIT";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { OptimizedImage } from "~/components";

export default function categories() {
  return (
    <section className="mainFilledBg pt16 pb16 pt6-xs pb6-xs overflowXHide">
      <div className="container md">
        <div className="flex column">
          <div className="flex alignStart justifyBetween w100 mb8">
            <div className="flex column">
              <h2 className="fs-500">Categories</h2>
              <p
                className="textSecondary mt1 fs-300"
                style={{ maxWidth: "48ch" }}
              >
                Much destionation here but, The NFT marketplace with everything
                for everyone
              </p>
            </div>

            <div className="flex alignCenter dNoneXs">
              <Button 
              aria-label="Go to previous slide" className="outlined icon circle large">
                <MdArrowBack size="1.7em" />
              </Button>
              <Button 
              aria-label="Go to next slide" className="ml2 outlined icon circle large">
                <MdArrowForward size="1.7em" />
              </Button>
            </div>
          </div>

          <div className="w100">
            <Swiper
              style={{ overflow: "visible" }}
              spaceBetween={16}
              slidesPerView={5}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  // spaceBetween: 20,
                },
                380: {
                  slidesPerView: 2,
                  // spaceBetween: 20,
                },
                // when window width is >= 480px
                540: {
                  slidesPerView: 3,
                  // spaceBetween: 16,
                },
                // when window width is >= 640px
                769: {
                  slidesPerView: 4,
                  // spaceBetween: 16,
                },
                980: {
                  slidesPerView: 5,
                  spaceBetween: 24,
                },
              }}
              //   onSlideChange={() => console.log("slide change")}
              //   onSwiper={(swiper) => console.log(swiper)}
            >
              {[
                {
                  title: "Art",
                  image: "https://opensea.io/static/images/categories/art.png",
                },
                {
                  title: "Collectibles",
                  image:
                    "https://opensea.io/static/images/categories/collectibles.png",
                },
                {
                  title: "Domain names",
                  image:
                    "https://opensea.io/static/images/categories/domain-names.png",
                },
                // {
                //   title: "Photography",
                //   image:
                //     "https://opensea.io/static/images/categories/photography-category.png",
                // },
                {
                  title: "Sports",
                  image:
                    "https://opensea.io/static/images/categories/sports.png",
                },
                {
                  title: "Virtual worlds",
                  image:
                    "https://opensea.io/static/images/categories/virtual-worlds.png",
                },
                {
                  title: "Utility",
                  image:
                    "https://opensea.io/static/images/categories/utility.png",
                },
              ].map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex column alignCenter">
                    <OptimizedImage
                      src={item.image}
                      alt={item.title}
                      figureClassName="w100 overflowHide"
                      imgClassName="objectFitCover"
                      imageHeight="14em"
                      figureStyle={{
                        borderTopLeftRadius: "50%",
                        borderTopRightRadius: "50%",
                      }}
                    />
                    {/* <img
                      src={item.image}
                      alt="ast"
                      className="w100"
                      style={{
                        borderTopLeftRadius: "50%",
                        borderTopRightRadius: "50%",
                        objectFit: "cover",
                        height: "14em",
                        // width: '100%',
                      }}
                    /> */}
                    <h3 className="mt3 fs-300">{item.title}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
