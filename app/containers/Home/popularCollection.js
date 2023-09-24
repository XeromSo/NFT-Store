import React from "react";
import { BiChevronRight, BiHeart, BiRightArrowAlt } from "react-icons/bi";
import { Button } from "~/KIT";
import { Collection, CustomLink } from "~/components";
import { FAKE_COLLECTION } from "~/store/defaults";
import { useNavigate } from "@remix-run/react";
export default function PopularCollection() {
  const navigate = useNavigate();
  return (
    <section className="container md">
      <div className="flex column pt16 pb16 pt6-xs pb6-xs">
        <div className="flex alignCenter justifyBetween w100">
          <h2 className="fs-500">Popular Collections</h2>
          <CustomLink className="dNoneXs" to="/explore">
            <Button endIcon={<BiChevronRight />}>
              Explore more
            </Button>
          </CustomLink>
        </div>

        <div className="grid col3 col2-sm col1-xs gap-4 mt6">
          {FAKE_COLLECTION.slice(0, 3).map((item, index) => (
            <Collection
              key={`${item.creator}_${item.title}`}
              detail={item}
              onClick={() => {
                navigate(`/collection/${item.id}`);
              }}
            />
          ))}
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
