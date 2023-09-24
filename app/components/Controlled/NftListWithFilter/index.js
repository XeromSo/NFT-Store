import React from "react";
import { Collapse } from "react-collapse";
import {
  BiChevronDown,
  BiChevronUp,
  BiFilter,
  BiRefresh,
  BiSearch,
} from "react-icons/bi";
import { BsGrid3X3GapFill, BsGridFill } from "react-icons/bs";
import { MdExpandMore, MdKeyboardArrowLeft } from "react-icons/md";
import { SmallProduct, Product, UnderConstruction } from "~/components";
import { useAppContext } from "~/context/appContext";
import useToggle from "~/hooks/useToggle";
import { Button, Checkbox, Tab, Tabs, TextField } from "~/KIT";

const comps = {
  grid: Product,
  list: SmallProduct,
};
const StoreProduct = ({ item, viewMode, filterMode }) => {
  const Comp = comps[viewMode];

  return (
    <div
      className={`${
        viewMode === "grid"
          ? `span-${filterMode ? "4" : "3"} span-6-sm span-12-xs`
          : `span-${filterMode ? "3" : "2"} span-4-sm span-6-xs`
      }`}
    >
      <Comp
        radius={1}
        navigateTo={`/nft/${item.id}`}
        //   onClick={() => onClick(item.id)}
        item={item}
      />
    </div>
  );
};

export default function Index({ data, onFilter }) {
  const [filterMode, toggleFilterMode] = useToggle(false);
  //   const navigate = useNavigate();
  const appCtx = useAppContext();

  //   const handleOpenProductModal = (_productId) => {
  //     navigate(`/nft/${_productId}`);
  //   };

  const handleOpenFilterModal = () => {
    appCtx.ModalsManager.show(FilterModal, {
      dialogClassName: "w100 overflowYAuto",
    });
  };
  const [selectedViewMode, setSelectedViewMode] = React.useState("grid");
  const memoizedProducts = React.useMemo(() => {
    return data.length === 0 ? (
      <div
        className="w100 flex alignCenter justifyCenter"
        style={{ minHeight: "40vh" }}
      >
        No mahsol
      </div>
    ) : (
      data.map((item, index) => (
        <StoreProduct
          filterMode={filterMode}
          //   onClick={handleOpenProductModal}
          viewMode={selectedViewMode}
          item={item}
          key={index}
        />
      ))
    );
  }, [data, selectedViewMode, filterMode]);
  return (
    <div className="flex column w100">
      <div className="flex alignCenter justifyBetween p2 surface-1 shadow-3 radius-1">
        <div className="span-3 flex alignCenter">
          <Button
            onClick={toggleFilterMode}
            className={`${filterMode ? "outlined" : ""} dNoneSm`}
            startIcon={<BiFilter />}
            endIcon={filterMode ? <MdKeyboardArrowLeft /> : ""}
          >
            Filter
          </Button>
          <Button
            onClick={handleOpenFilterModal}
            className={"dFlexSm dNone"}
            startIcon={<BiFilter />}
            // endIcon={filterMode ? <MdKeyboardArrowLeft /> : ""}
          >
            Filter
          </Button>
          <TextField
            style={{ width: "24em" }}
            className="mW100 ml3 dNoneSm"
            placeholder="Search by NFTs.."
            startIcon={<BiSearch className="ml2" />}
          />
        </div>

        <div className="flex alignCenter">
          <Button
            onClick={handleOpenFilterModal}
            endIcon={<MdExpandMore size="1.4em" />}
            className="outlined mr2 dNoneSm"
          >
            Recently Added
          </Button>
          <Tabs
            //   className="small"
            value={selectedViewMode}
            onChange={(value) => setSelectedViewMode(value)}
          >
            <Tab
              // style={{ padding: "0.2em" }}
              className="icon"
              label={<BsGridFill />}
              value="grid"
            />
            <Tab
              className="icon"
              // style={{ padding: "0.2em" }}
              label={<BsGrid3X3GapFill />}
              value="list"
            />
          </Tabs>
          <Button
            // style={{ height: "2.5em", width: "2.5em" }}
            className="icon ml1 outlined"
          >
            <BiRefresh />
          </Button>
        </div>
      </div>
      <div className="grid col12 gap-4 mt3 alignStart">
        {filterMode ? (
          <div
            className={`span-3 flex column surface-1 shadow-3 radius-1 overflowYAuto`}
            style={{ position: "sticky", top: "4em", maxHeight: "85vh" }}
          >
            <Filter />
          </div>
        ) : (
          ""
        )}

        <div className={`${filterMode ? "span-9" : "span-12"}`}>
          <div className="grid col12 gap-2">{memoizedProducts}</div>
        </div>
      </div>
    </div>
  );
}

const Filter = () => {
  return (
    <>
      <label className="textSecondary p5 pb1 fs-200">Generals</label>
      <FilterItem
        className=""
        label="Status"
        content={
          <div className="flex wrap gap-1 pt2">
            <Button className="contained">All</Button>
            <Button className="outlined">Fixed price</Button>
            <Button className="outlined">Open for offers</Button>
            <Button className="outlined">Live auction</Button>
            <Button className="outlined">Not for sale</Button>
          </div>
        }
      />
      <FilterItem
        className="b bt1"
        label="Price"
        content={
          <div className="flex column pt2">
            <div className="flex alignCenter w100">
              <TextField inputStyle={{ width: "inherit" }} placeholder="Min" />
              <span className="textSecondary ml3 mr3">To</span>
              <TextField inputStyle={{ width: "inherit" }} placeholder="Max" />
              <Button className="ml2 outlined" endIcon={<MdExpandMore />}>
                ETH
              </Button>
            </div>
            <Button className="contained mt3">Apply</Button>
          </div>
        }
      />
      <FilterItem
        className="b bt1"
        label="Currency"
        content={
          <div className="flex column gap-2 pt2">
            <Checkbox label="ETH" id="1" />
            <Checkbox label="BNB" id="2" />
            <Checkbox label="USDT" id="3" />
            <Checkbox label="DAI" id="4" />
          </div>
        }
      />
      {/* ! Properties filter coming from api */}
      <label className="textSecondary p5 pb1 mt3 fs-200">Properties</label>
      <FilterItem
        className=""
        label="Background"
        content={
          <div className="flex column gap-2 pt2">
            <TextField
              inputStyle={{ padding: "0.32em 0.5em" }}
              className="mb2"
              startIcon={<BiSearch className="ml2" />}
              placeholder="Search.."
            />
            <div className="flex alignCenter">
              <Checkbox label="Green" id="green" className="flexGrow1 mr3" />
              <span className="textSecondary">1748</span>
            </div>
            <div className="flex alignCenter">
              <Checkbox label="Black" id="black" className="flexGrow1 mr3" />
              <span className="textSecondary">2423</span>
            </div>
            <div className="flex alignCenter">
              <Checkbox label="Yellow" id="yellow" className="flexGrow1 mr3" />
              <span className="textSecondary">1081</span>
            </div>
          </div>
        }
      />
      <FilterItem
        className="b bt1"
        label="Eyes"
        content={
          <div className="flex column gap-2 pt2">
            <TextField
              inputStyle={{ padding: "0.32em 0.5em" }}
              className="mb2"
              startIcon={<BiSearch className="ml2" />}
              placeholder="Search.."
            />
            <div className="flex alignCenter">
              <Checkbox label="Open" id="open" className="flexGrow1 mr3" />
              <span className="textSecondary">1748</span>
            </div>
            <div className="flex alignCenter">
              <Checkbox
                label="Side-eye"
                id="sideEye"
                className="flexGrow1 mr3"
              />
              <span className="textSecondary">2423</span>
            </div>
            <div className="flex alignCenter">
              <Checkbox
                label="Relaxed"
                id="relaxed"
                className="flexGrow1 mr3"
              />
              <span className="textSecondary">1081</span>
            </div>
            <div className="flex alignCenter">
              <Checkbox label="Heart" id="heart" className="flexGrow1 mr3" />
              <span className="textSecondary">3049</span>
            </div>
            <div className="flex alignCenter">
              <Checkbox label="Angry" id="angry" className="flexGrow1 mr3" />
              <span className="textSecondary">236</span>
            </div>
          </div>
        }
      />
    </>
  );
};

const FilterItem = ({ className = "", label, content }) => {
  const [visible, toggleVisible] = useToggle(false);
  return (
    <div className={`flex column p4 pb3 pt3 ${className}`}>
      <div
        className="flex alignCenter justifyBetween cursorPoint pl1 pr1"
        onClick={toggleVisible}
      >
        <span className="fs-200 fontBold">{label}</span>
        {visible ? <BiChevronUp /> : <BiChevronDown />}
      </div>
      <Collapse isOpened={visible}>{content}</Collapse>
    </div>
  );
};

const FilterModal = ({ closeModal }) => {
  return <UnderConstruction />;
};
