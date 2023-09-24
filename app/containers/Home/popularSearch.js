import React from "react";
import { Button } from "~/KIT";
import { FAKE_POPULAR_SEARCH } from "~/store/defaults";
import { motion } from "framer-motion";
const container = {
  hidden: {},
  show: {
    // opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.08,
    },
  },
};
const itemAnim = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

export default function PopularSearch({ onClickSearch }) {
  return (
    <section className="container xs">
      <div className="flex column alignCenter alignStart-xs pt12 pb16 pt8-xs pb10-xs">
        <h2 className="fs-500">Popular Search</h2>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex wrap justifyCenter justifyStart-xs gap-3 gap-2-xs mt8 mt4-xs"
        >
          {FAKE_POPULAR_SEARCH.map((item, index) => (
            <motion.div
              variants={itemAnim}
              transition={{
                type: "spring",
                bounce: 0.25,
              }}
              key={`${item}_${index}`}
            >
              <Button className="outlined" onClick={() => onClickSearch(item)}>
                {item}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
