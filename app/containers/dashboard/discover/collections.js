import React from "react";
import { nanoid } from "nanoid";
import { useLocation, useNavigate } from "@remix-run/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Collection } from "~/components";

export default function Collections({ list }) {
  const navigate = useNavigate();
  const handleNavigate = (_path) => {
    navigate(`/collection/${_path}`);
  };
  const memorizedList = React.useMemo(() => {
    return list.map((item) => {
      return (
        <SwiperSlide key={nanoid()}>
          <Collection onClick={() => handleNavigate(item.id)} detail={item} />
        </SwiperSlide>
      );
    });
  }, [list]);
  return (
    <div className="flex column mt3">
      <div className="p3 pb1">
        <h5 className="fontBold">Collections</h5>
      </div>
      <div className="w100">
        <Swiper
          style={{
            padding: "1.25em 1.25em 1.25em 0.75em",
            margin: "-0.75em 0",
          }}
          spaceBetween={8}
          slidesPerView={"auto"}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {memorizedList}
        </Swiper>
      </div>
    </div>
  );
}
