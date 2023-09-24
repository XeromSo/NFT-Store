import React from "react";
import { MdArrowForward, MdClose, MdSearch, MdSearchOff } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar, Button, TextField } from "~/KIT";
import { CustomLink, OptimizedImage, SearchResNft } from "~/components";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useTranslation } from "react-i18next";
import Tippy from "@tippyjs/react";
import { FAKE_NFTS, FAKE_COLLECTION } from "~/store/defaults";
import useToggle from "~/hooks/useToggle";
import { useNavigate } from "@remix-run/react";
import { BiSearch } from "react-icons/bi";
import SearchContent from "../../components/Dump/SearchRes/SearchContent";
import PopularSearch from "./popularSearch";
import { motion, useAnimationControls } from "framer-motion";

export default function Header() {
  // const { i18n } = useTranslation();
  const [searchInput, setSearchInput] = React.useState("");
  const headerSearchRef = React.useRef(null);
  const [searchVisible, toggleSearchVisible] = useToggle(false);
  const navigate = useNavigate();

  const handleChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <section className="pt8 pt4-xs flex column container md">
        <div className="w100 landingHeaderSwiper">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            // dir={i18n.dir()}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {FAKE_COLLECTION.slice(0, 3).map((collection, index) => (
              <SwiperSlide key={collection.id}>
                <HeaderCollection
                  collection={collection}
                  isFirstSlide={index === 0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className="fs-300"
          style={{
            maxWidth: "100%",
            width: "32em",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "-2em",
            zIndex: 11,
          }}
        >
          <Tippy
            interactive
            onClickOutside={toggleSearchVisible}
            offset={[0, 6]}
            onShow={({ popper, reference }) => {
              popper.style.width =
                headerSearchRef.current.getBoundingClientRect().width + "px";
            }}
            visible={searchVisible && searchInput.length > 0}
            maxWidth="none"
            arrow={false}
            placement="bottom"
            content={
              <div
                className="flex column overflowYAuto p2"
                style={{ maxHeight: "60vh" }}
              >
                <SearchContent
                  searchValue={searchInput}
                  navigateTo={navigate}
                />
              </div>
            }
          >
            <div
              ref={headerSearchRef}
              className="surface-2 radius-1 shadow-3 p2 flex justifyStart alignCenter"
            >
              <TextField
                onChange={handleChangeSearchInput}
                value={searchInput}
                onClick={() => {
                  if (!searchVisible) toggleSearchVisible();
                }}
                inputStyle={{ height: "5.75ch" }}
                startIcon={<BiSearch size="1.6em" className="ml3" />}
                endIcon={
                  searchInput.length > 0 && (
                    <Button
                      aria-label="Clear search input"
                      onClick={() => {
                        setSearchInput("");
                      }}
                      // startIcon={}
                      className="icon contained m1"
                    >
                      <MdClose />
                    </Button>
                  )
                }
                className="flexGrow1"
                placeholder="Search everything.."
              />
            </div>
          </Tippy>
        </div>
      </section>
      <PopularSearch
        onClickSearch={(_search) => {
          toggleSearchVisible();
          setSearchInput(_search);
        }}
      />
    </>
  );
}
const container = {
  hidden: {},
  show: {
    // opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.06,
    },
  },
};
const itemAnim = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};
const HeaderCollection = ({ collection, isFirstSlide }) => {
  const {
    id,
    title,
    creator,
    cover,
    avatar,
    items,
    totalVolume,
    likes,
    userId,
  } = collection;
  const TitleComp = isFirstSlide ? "h1" : "h2";
  // console.log(TitleComp);
  const controls = useAnimationControls();
  // id: 1,
  //   items: 155,
  //   owners: 84,
  //   totalVolume: "24 ETH",
  //   floorPrice: "2 ETH",
  //   cover:
  //     "https://i.seadn.io/gcs/files/ea5e8a39dc93da9cd13abdd9fb328f75.png?auto=format&dpr=1&h=300",
  //   title: "Onigiri Pepes",
  //   creator: "ONI-GIRI",
  //   likes: "1.2k",
  //   media: [
  //     "https://lh3.googleusercontent.com/qNnQM8mDXxGvec2jwkxXAGlN1oWIpPovJSgmaNlAHn8m20jApNHe4hyLlM7pCZuEADXkcoDuMpJM3xiyI1W6zYLY2OshcjxkjoguVw=s400",
  //     "https://img.rarible.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9uZnRzdG9yYWdlLmxpbmsvaXBmcy9iYWZ5YmVpZTRqbmY0YTZiMm9iNzUyZWhoZ2t1cnE3aTdvdXJsZ3phejN3ajJ3enhmZmF0anVueXlzZS8yMzUzLmpwZWc=",
  //     "https://lh3.googleusercontent.com/GgWQKyhT2dEbrPpRTTd7HSUMQh8b0MbPkl8qmBcJQZ_Gh4tgxBIxETLaHcJzwUT1wS3Wq6wQ50mRhm2cfpvPWlmgZIGVzNYyNYxLLg=s400",
  //     "https://lh3.googleusercontent.com/q9TGDksRewtF1LsyDnSZIqOvPxWwxYktJqw_MwR8cCCSwD2DaK5Txnr9B-zq8EFfQB4qDWucXVMeL_t8mhtqmZJFZMp-CMf4Z-w9yw=s400",
  //   ],
  //   ownerIds: [1, 2],
  //   avatar:
  return (
    <div
      className="headerCollection flex column justifyBetween-xs alignCenter radius-3 shadow-2"
      itemScope
      itemType="http://schema.org/CollectionPage"
    >
      <div
        itemProp="image"
        className="w100 h100 absolute inset-0"
        style={{
          // backgroundImage: `url("${cover}")`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          zIndex: -1,
          filter: "brightness(0.64)",
        }}
      >
        <OptimizedImage
          alt={title}
          src={cover}
          figureClassName="w100 h100"
          imgClassName="w100 objectFitCover"
          imageHeight="100%"
          onImageLoad={() => {
            // setTimeout(() => {
            // console.log('called')
            controls.start("show");
            // }, 2000);
            // alert('called')
          }}
        />
      </div>
      <motion.div
        variants={container}
        animate={controls}
        initial="hidden"
        // animate="show"
        itemProp="Nft Detail"
        className="flex column alignCenter contentWrapper"
      >
        <CustomLink to={`/user/${userId}`}>
          <motion.div
            variants={itemAnim}
            // animate={controls}
            // initial="hidden"
            transition={{
              type: "spring",
              bounce: 0.25,
            }}
            className="flex alignCenter justifyCenter"
          >
            <Avatar
              itemProp="creator avatar"
              alt={creator}
              src={avatar}
              className="small"
            />
            <span itemProp="creator" className="ml3 whiteText">
              {creator}
            </span>
          </motion.div>
        </CustomLink>
        <motion.div
          variants={itemAnim}
          // animate={controls}
          // initial="hidden"
          transition={{
            type: "spring",
            bounce: 0.25,
          }}
          className=" mt1"
        >
          <CustomLink to={`/collection/${id}`}>
            <TitleComp
              itemProp="name"
              className="whiteText textAlign center fs-500"
            >
              {title}
            </TitleComp>
          </CustomLink>
        </motion.div>
        <motion.div
          variants={itemAnim}
          // animate={controls}
          // initial="hidden"
          transition={{
            type: "spring",
            bounce: 0.25,
          }}
          className="grid col3 gap-6 whiteText mt3"
        >
          <div
            // variants={itemAnim}
            // transition={{
            //   type: "spring",
            //   bounce: 0.25,
            // }}
            className="flex column alignCenter"
          >
            <span
              // variants={itemAnim}
              // animate={controls}
              // initial="hidden"
              // transition={{
              //   type: "spring",
              //   bounce: 0.25,
              // }}
              style={{ opacity: "0.6" }}
              className="fs-200"
            >
              Items
            </span>
            <span itemProp="numberOfItems" className="fs-300">
              {items}
            </span>
          </div>
          <div
            // variants={itemAnim}
            // transition={{
            //   type: "spring",
            //   bounce: 0.25,
            // }}
            className="flex column alignCenter"
          >
            <span style={{ opacity: "0.6" }} className="fs-200">
              Volume
            </span>
            <span itemProp="totalVolume" className="fs-300">
              {totalVolume}
            </span>
          </div>
          <div
            // variants={itemAnim}
            // transition={{
            //   type: "spring",
            //   bounce: 0.25,
            // }}
            className="flex column alignCenter"
          >
            <span style={{ opacity: "0.6" }} className="fs-200">
              Likes
            </span>
            <span itemProp="likes" className="fs-300">
              {likes}
            </span>
          </div>
        </motion.div>
      </motion.div>
      <CustomLink to={`/collection/${id}`}>
        <Button className="contained mt6 shadow-0">View Collection</Button>
      </CustomLink>
    </div>
  );
};
