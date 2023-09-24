import React from "react";
import { FAKE_BLOGS } from "~/store/defaults";
import { Tabs, Tab, Button } from "~/KIT";
import { CustomLink, OptimizedImage } from "~/components";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Avatar, Button, TextField } from "~/KIT";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useAnimationControls, motion } from "framer-motion";

// const blogsContainer = {
//   hidden: {
//     // opacity: 0,
//   },
//   show: {
//     // opacity: 1,
//     transition: {
//       staggerChildren: 0.16,
//       delayChildren: 0.16,
//     },
//   },
// };
// const blogItemAnim = {
//   hidden: { opacity: 0, x: -100 },
//   show: { opacity: 1, x: 0 },
// };
export default function Index({ blogs }) {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <section className="container md flex column alignCenter pt4 pb4">
      <Tabs
        value={activeTab}
        onChange={setActiveTab}
        className=" mW100 overflowXAuto scrollBarVisibleNone"
      >
        <Tab label="All" value={0} />
        <Tab label="Sports" value={1} />
        <Tab label="Tech" value={2} />
        <Tab label="Animations" value={3} />
        <Tab label="Vahab" value={4} />
      </Tabs>

      <div className="flex column mt4 w100">
        <BlogHeader />

        <div
          // variants={blogsContainer}
          // initial="hidden"
          // animate="show"
          className="grid col3 col2-sm col1-xs gap-8 mt18"
        >
          {FAKE_BLOGS.map((blog, index) => (
            <div
              // variants={blogItemAnim}
              className="flex column"
              key={blog.id}
            >
              <Blog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const Blog = ({ blog }) => {
  return (
    <>
      <OptimizedImage
        src={blog.image}
        figureClassName="overflowHide w100 radius-2 shadow-3"
        imgClassName="w100 objectFitCover"
        imageHeight="16em"
      />
      {/* <img
        src={blog.image}
        className="w100 radius-2 shadow-3 objectFitCover"
        style={{ height: "16em" }}
      /> */}

      <div className="flex column p3">
        <p className="textSecondary">
          {blog.author} - {blog.date}
        </p>
        <CustomLink className="text" to={`/blogs/${blog.id}`}>
          <h4 className="fontBold mt1 fs-400" style={{ lineHeight: "1.2" }}>
            {blog.title}
          </h4>
        </CustomLink>
      </div>
    </>
  );
};

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
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
const BlogHeader = () => {
  const controls = useAnimationControls();
  return (
    <div className="w100 blogsHeaderSwiper">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // dir={i18n.dir()}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {FAKE_BLOGS.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="flex column alignCenter">
              <OptimizedImage
                src={blog.image}
                figureClassName="overflowHide w100 radius-2 shadow-3"
                imgClassName="w100 objectFitCover"
                loadingHeight="32em"
                onImageLoad={() => {
                  controls.start("show");
                }}
              />
              {/* <div
                className="radius-2 shadow-2"
                style={{
                  backgroundImage: `url("${blog.image}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "32em",
                  width: "100%",
                }}
              /> */}

              <motion.div
                variants={container}
                initial="hidden"
                animate={controls}
                className="bodyBg p12 p4-xs flex column alignStart radius-2"
                style={{ marginTop: "-8em", maxWidth: "54em" }}
              >
                <motion.p
                  variants={itemAnim}
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                  }}
                  className="textSecondary"
                >
                  {blog.author} - {blog.date}
                </motion.p>
                <motion.div
                  variants={itemAnim}
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                  }}
                >
                  <CustomLink to={`/blogs/${blog.id}`} className="text">
                    <h2
                      className="fs-600 mt2 mb2 max3LineText"
                      style={{ lineHeight: "1.2" }}
                    >
                      {blog.title}
                    </h2>
                  </CustomLink>
                </motion.div>
                <motion.p
                  variants={itemAnim}
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                  }}
                  className="textSecondary pb4"
                >
                  {blog.content}
                </motion.p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}

        {/* <div className="blogSwipersNavWrapper">
          <Button>
            <MdKeyboardArrowLeft />
          </Button>
          <Button>
            <MdKeyboardArrowRight />
          </Button>
        </div> */}
      </Swiper>
    </div>
  );
};
