import { useMemo, useState } from "react";
import { MdExpandMore, MdOutlineFilterList } from "react-icons/md";
import { BsGridFill, BsGrid3X3GapFill } from "react-icons/bs";
import {
  CustomLink,
  Product,
  SmallProduct,
  UnderConstruction,
} from "~/components";
import { Button, Select, Tab, Tabs } from "~/KIT";
import { FAKE_NFTS } from "~/store/defaults";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "@remix-run/react";
import { useAppContext } from "~/context/appContext";
import { motion } from "framer-motion";
const container = {
  hidden: {},
  show: {
    // opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.04,
    },
  },
};
const itemAnim = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};
export default function Index() {
  const appCtx = useAppContext();
  const [selectedType, setSelectedType] = useState(0);
  const [selectedFake, setSelectedFake] = useState("recentlyAdded");
  const [selectedViewMode, setSelectedViewMode] = useState("list");
  const [productLoadCount, setProductLoadCount] = useState(12);
  // const navigate = useNavigate();

  // const handleOpenProductModal = (_productId) => {
  //   navigate(`/explore/${_productId}?scrollY=${window.scrollY}`);
  // };
  const memoizedProducts = useMemo(() => {
    return FAKE_NFTS.length === 0 ? (
      <div
        className="w100 flex alignCenter justifyCenter"
        style={{ minHeight: "40vh" }}
      >
        No mahsol
      </div>
    ) : (
      FAKE_NFTS.slice(0, productLoadCount).map((item, index) => (
        <motion.div
          key={index}
          variants={itemAnim}
          // whileHover={{ scale: 1.05 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // initial={{ opacity: 0, y: 50 }}
          // transition={{ delay: 0.2 }}
          transition={{
            type: "spring",
            bounce: 0.16,
            // damping: 8
          }}
          className={`${
            selectedViewMode === "grid"
              ? "span-3 span-6-sm span-12-xs"
              : "span-2 span-4-sm span-6-xs"
          }`}
        >
          <StoreProduct
            // onClick={handleOpenProductModal}
            viewMode={selectedViewMode}
            item={item}
            key={index}
          />
        </motion.div>
      ))
    );
  }, [FAKE_NFTS, selectedViewMode, productLoadCount]);

  const handleOpenSearchModal = () => {
    appCtx.ModalsManager.show(SearchContent, {
      dialogClassName: "w100 overflowYAuto",
    });
  };
  return (
    <>
      <section className="pt16 pb8 pt4-xs">
        <div className="container md">
          <h2 className="mb3 textAlign center left-xs fs-500-xs">
            Explore everything
          </h2>
          <div className="grid alignCenter col12 pb3 dNoneMd">
            <div className="span-2">
              <Button
                onClick={handleOpenSearchModal}
                endIcon={<MdExpandMore size="1.4em" />}
                className="outlined"
              >
                Recently Added
              </Button>
            </div>
            <div className="span-8 flex alignCenter justifyCenter gap-1">
              <Tabs value={selectedType} onChange={setSelectedType}>
                <Tab label="All" value={0} />
                <Tab label="NFTs" value={1} />
                <Tab label="Collections" value={2} />
                <Tab label="Users" value={3} />
                {/* <Tab label="Home & Garden" value={3} /> */}
                {/* <Tab label="Sports" value={4} /> */}
              </Tabs>
              {/* <Button className="contained">All</Button>
              <Button>Art</Button>
              <Button>Game</Button>
              <Button>Photography</Button> */}
            </div>
            <div className="span-2 flex justifyEnd">
              <Tabs
                value={selectedViewMode}
                onChange={(value) => setSelectedViewMode(value)}
              >
                <Tab
                  className="icon"
                  // style={{ padding: "0.6em" }}
                  label={<BsGridFill />}
                  value="grid"
                />
                <Tab
                  className="icon"
                  // style={{ padding: "0.6em" }}
                  label={<BsGrid3X3GapFill />}
                  value="list"
                />
              </Tabs>
              <Button
                onClick={handleOpenSearchModal}
                startIcon={<MdOutlineFilterList size="1.4em" />}
                className="outlined ml2"
              >
                Filter
              </Button>
            </div>
          </div>

          <div className="dNone dFlexMd column alignStart">
            <div className="grid col2 mb2 w100">
              <div className="flex">
                <Button
                  onClick={handleOpenSearchModal}
                  className="outlined"
                  startIcon={<BiSearch />}
                >
                  Quick Search
                </Button>
              </div>
              <div className="flex alignCenter justifyEnd">
                <Button
                  onClick={handleOpenSearchModal}
                  className="icon outlined mr2"
                >
                  <MdOutlineFilterList />
                </Button>
                <Tabs
                  value={selectedViewMode}
                  onChange={(value) => setSelectedViewMode(value)}
                >
                  <Tab
                    // style={{ padding: "0.3em" }}
                    className="icon"
                    label={<BsGridFill />}
                    value="grid"
                  />
                  <Tab
                    // style={{ padding: "0.3em" }}
                    className="icon"
                    label={<BsGrid3X3GapFill />}
                    value="list"
                  />
                </Tabs>
              </div>
            </div>
            <Tabs
              className="overflowXAuto mW100 w100"
              value={selectedType}
              onChange={setSelectedType}
            >
              <Tab label="All" value={0} />
              <Tab label="NFTs" value={1} />
              <Tab label="Collections" value={2} />
              <Tab label="Users" value={3} />
              {/* <Tab label="Sports" value={4} /> */}
            </Tabs>
          </div>
        </div>
      </section>
      {/* <h1>Products</h1> */}
      <section>
        <div className="container md">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid col12 gap-3"
          >
            {memoizedProducts}
          </motion.div>
        </div>
      </section>
      <div className="flex justifyCenter mt12">
        <Button
          className="outlined"
          onClick={() => {
            setProductLoadCount(productLoadCount + 4);
            // alert('ast')
          }}
        >
          Load More
        </Button>
      </div>
      {/* <CustomLink to="/products/2">
        <Button>Go to product 2</Button>
      </CustomLink> */}
    </>
  );
}

const comps = {
  grid: Product,
  list: SmallProduct,
};
const StoreProduct = ({ item, viewMode }) => {
  const Comp = comps[viewMode];

  return (
    <Comp
      navigateTo={`/explore/${item.id}`}
      navigateProps={{
        state: {
          scroll: false,
        },
      }}
      item={item}
    />
  );
};

const SearchContent = () => {
  return <UnderConstruction />;
};
