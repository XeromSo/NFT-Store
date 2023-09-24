import React from "react";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdAdd, MdDone } from "react-icons/md";
import { useAppContext } from "~/context/appContext";
import { Avatar } from "~/KIT";
import { CustomLink } from "~/components";

export default function Stories({ list }) {
  const appCtx = useAppContext();
  const handleOpenStory = (_stories) => {
    // alert()
    appCtx.ModalsManager.show(ShowStories, {
      stories: _stories,
    });
  };
  const memorizedList = React.useMemo(() => {
    return list.map((item) => {
      return (
        <SwiperSlide key={nanoid()}>
          <Storie onClick={() => handleOpenStory(item.media)} item={item} />
        </SwiperSlide>
      );
    });
  }, [list]);

  return (
    <div className="w100 nft-storiesWrapper">
      <Swiper
        style={{ padding: "0.75em", margin: "-0.75em 0" }}
        spaceBetween={8}
        slidesPerView={"auto"}
        // breakpoints={{
        //   320: {
        //     slidesPerView: 1,
        //     spaceBetween: 8,
        //   },
        //   480: {
        //     slidesPerView: 2,
        //     spaceBetween: 12,
        //   },
        //   780: {
        //     slidesPerView: 3,
        //   },
        //   1100: {
        //     slidesPerView: 4,
        //     spaceBetween: 16,
        //   },
        // }}
      >
        <SwiperSlide>
          <CustomLink to="/dashboard/create/story">
            <div
              // onClick={onClick}
              className="cursorPoint flex column alignCenter nft-storie"
            >
              <Avatar className={`surface-2 shadow-2`}>
                <MdAdd />
              </Avatar>
              <h5
                title={name}
                className="textSecondary fs-150 mt3 ellipsisText"
              >
                Add
              </h5>
            </div>
          </CustomLink>
        </SwiperSlide>
        {memorizedList}
      </Swiper>
    </div>
  );
}

const Storie = ({ item, onClick }) => {
  const { name, avatar, seen, verified } = item;
  return (
    <div
      onClick={onClick}
      className="cursorPoint flex column alignCenter nft-storie"
    >
      <Avatar
        className={`${!seen ? "notSeen" : "seen"} shadow-2`}
        badge={
          verified ? (
            <div
              className="bodyBg flex alignCenter justifyCenter radius-50"
              style={{ padding: "0.12em" }}
            >
              <div className="verfiedProfileBadge flex alignCenter justifyCenter">
                <MdDone size="0.7em" />
              </div>
            </div>
          ) : null
        }
        src={avatar}
      />
      <h5 title={name} className="textSecondary fs-150 mt3 ellipsisText">
        {name}
      </h5>
    </div>
  );
};

const ShowStories = ({ stories, closeModal }) => {
  return <div>Show stories</div>;
};
