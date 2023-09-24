import React, { useEffect } from "react";
import { BiGroup, BiHourglass, BiPurchaseTag } from "react-icons/bi";
import { TextField, Button, Tabs, Tab, Select, Switch } from "~/KIT";
import {
  CustomDropZone,
  CustomLink,
  SettingOption,
  LinksDropDown,
} from "~/components";
import {
  MdAdd,
  MdAnnouncement,
  MdBarChart,
  MdExpandMore,
  MdInfo,
  MdKeyboardArrowDown,
  MdOutlineList,
  MdOutlineLock,
  MdStarRate,
} from "react-icons/md";
import Tippy from "@tippyjs/react";
import CreateLinkList from "../createLinkList";
import { useAppContext } from "~/context/appContext";
import PropertiesManagerModal from "./PropertiesManagerModal";
import LevelsStatManagerModal from "./LevelsStatManagerModal";
export default function Index() {
  const appCtx = useAppContext();
  const [form, setForm] = React.useState({
    properties: [],
    levels: [],
    stats: [],
  });

  const handleOpenPropertiesModal = () => {
    appCtx.ModalsManager.show(PropertiesManagerModal, {
      savedProperties: form.properties,
      onSave: (_props) => {
        setForm({ ...form, properties: _props });
      },
    });
  };
  const handleOpenLevelsStatModal = (mode = "levels") => {
    appCtx.ModalsManager.show(LevelsStatManagerModal, {
      savedState: form[mode],
      mode,
      onSave: (_props) => {
        setForm({ ...form, [mode]: _props });
      },
    });
  };

  console.log(form);
  // useEffect(() => {
  //   handleOpenPropertiesModal();
  // }, []);
  return (
    <div className="flex column alignCenter pt3 pb3">
      <div className="container xxs mt3">
        <div className="flex column alignStart w100">
          <div className="flex alignCenter ml2-sm">
            <CustomLink to="/dashboard/create">
              <h4 className="fs-400">Create</h4>
            </CustomLink>
            <h5 className="mr2 ml2">-</h5>
            <LinksDropDown label="NFT" content={<CreateLinkList />} />
          </div>
          <div className="flex column surface-1 shadow-3 radius-1 p4 p2-xs mt4 mt2-sm w100">
            {/* <TextField label="Name" /> */}
            <label>Upload File</label>
            <p className="textSecondary fs-150">
              Drag 'n' drop some files here, or click to select files
            </p>
            <CustomDropZone
              className="mt2"
              text="PNG, GIF, WEBP, MP4 or MP3. Max 20mg"
            />

            <label className="mt6">Select Method</label>
            <Tabs value="fixedPrice" className="mt1 overflowXAuto mW100">
              <Tab
                className="w100 fs-150"
                label="Fixed price"
                value="fixedPrice"
                startIcon={<BiPurchaseTag />}
              />
              <Tab
                className="w100 fs-150"
                label="Time auction"
                value="timeAuction"
                startIcon={<BiHourglass />}
              />
              <Tab
                className="w100 fs-150"
                label="Open for bids"
                value="openForBids"
                startIcon={<BiGroup />}
              />
            </Tabs>

            <TextField
              label="Price"
              className="mt2"
              placeholder="Enter price for one piece"
              endIcon={
                <Button
                  className="fs-150 mr1"
                  endIcon={<MdKeyboardArrowDown />}
                >
                  ETH
                </Button>
              }
            />
            <div className="surface-4 radius-2 flex column w100 p2 pl3 pr3 mt2">
              <div className="flex alignCenter justifyBetween w100 pb2 b bb1">
                <label className="fs-150">Service fee</label>
                <div className="flex alignCenter fs-150">
                  <span className="textSecondary mr2">0.24 ETH</span>
                  <span>1%</span>
                </div>
              </div>
              <div className="flex alignCenter justifyBetween w100 pt2">
                <label className="fs-150">You will recive</label>
                <div className="flex alignCenter fs-150">
                  <span className="textSecondary mr2">$38,847</span>
                  <span>23.76 ETH</span>
                </div>
              </div>
            </div>
            <TextField
              className="mt4"
              label="Title"
              placeholder='e. g. "Crypto Funk"'
            />
            <TextField
              className="mt4"
              label="External Link"
              placeholder="https://yoursite.io/item/123"
            />
            <p className="textSecondary fs-150 mt2">
              Asgar will include a link to this URL on this item's detail page,
              so that users can click to learn more about it. You are welcome to
              link to your own webpage with more details.
            </p>

            <TextField
              textArea
              className="mt4"
              label="Description"
              placeholder="Provide a detailed description of your item."
            />
            <p className="textSecondary fs-150 mt2">
              The description will be included on the item's detail page
              underneath its image.{" "}
              <a className="mainColor" href="#">
                Markdown
              </a>{" "}
              syntax is supported.
            </p>

            <Select
              label="Collection"
              placeholder="Select collection"
              options={[]}
              emptyOptions={() => (
                <div className="flex column alignCenter">
                  <MdOutlineList size="2.5em" className="mb2" />
                  <h6>No collections found.</h6>
                  <Button
                    startIcon={<MdAdd />}
                    className="fs-150 p1 pl3 pr3 outlined mt4"
                  >
                    Create new one
                  </Button>
                </div>
              )}
              className="mt4"
            />

            <p className="textSecondary fs-150 mt2 flex wrap alignCenter">
              This is the collection where your item will appear.
              <Tippy
                interactive
                content={
                  <div className="flex column alignStart p2">
                    <p className="fs-150">
                      Moving items to a different collection may take up to 30
                      minutes. 
                    </p>
                    <p className="mt2 fs-150">
                      You can{" "}
                      <a className="textDecNone mainColor" href="#">
                        manage your collection here
                      </a>
                    </p>
                  </div>
                }
              >
                <span className="flex alignCenter ml2">
                  <MdInfo />
                </span>
              </Tippy>
            </p>

            <TextField
              className="mt4"
              label="Royalties"
              placeholder="e. g. 10%"
              endIcon={<span className="mr3 fs-300">%</span>}
            />
            <p className="textSecondary fs-150 mt2">
              Suggested: 0%, 10%, 20%, 30%. Maximum is 50%
            </p>
            <SettingOption
              titleClassName="fs-200"
              textClassName="fs-150"
              className="mt4"
              titleComponent="div"
              title={
                <div className="flex alignCenter">
                  Properties{" "}
                  {form.properties.length > 0 ? (
                    <Tippy
                      interactive
                      content={
                        <PropertiesContentDetail detail={form.properties} />
                      }
                      placement="top"
                    >
                      <div
                        style={{ height: "2.5ch", width: "2.5ch" }}
                        className="p1 whiteText ml2 errorBg radius-50 flex alignCenter justifyCenter fs-150"
                      >
                        {form.properties.length}
                      </div>
                    </Tippy>
                  ) : (
                    ""
                  )}
                </div>
              }
              text="Textual traits that show up as rectangles"
              icon={MdOutlineList}
              option={
                <Button
                  onClick={handleOpenPropertiesModal}
                  className="outlined icon large"
                >
                  <MdAdd />
                </Button>
              }
            />
            <SettingOption
              titleClassName="fs-200"
              textClassName="fs-150"
              className="mt2"
              titleComponent="div"
              title={
                <div className="flex alignCenter">
                  Levels{" "}
                  {form.levels.length > 0 ? (
                    <Tippy
                      interactive
                      content={<LevelsStatContent detail={form.levels} />}
                      placement="top"
                    >
                      <div
                        style={{ height: "2.5ch", width: "2.5ch" }}
                        className="p1 whiteText ml2 errorBg radius-50 flex alignCenter justifyCenter fs-150"
                      >
                        {form.levels.length}
                      </div>
                    </Tippy>
                  ) : (
                    ""
                  )}
                </div>
              }
              text="Numerical traits that show as a progress bar"
              icon={MdStarRate}
              option={
                <Button
                  onClick={() => handleOpenLevelsStatModal()}
                  className="outlined icon large"
                >
                  <MdAdd />
                </Button>
              }
            />
            <SettingOption
              titleClassName="fs-200"
              textClassName="fs-150"
              className="mt2"
              titleComponent="div"
              title={
                <div className="flex alignCenter">
                  Stats{" "}
                  {form.stats.length > 0 ? (
                    <Tippy
                      interactive
                      content={
                        <LevelsStatContent detail={form.stats} label="Stats" />
                      }
                      placement="top"
                    >
                      <div
                        style={{ height: "2.5ch", width: "2.5ch" }}
                        className="p1 whiteText ml2 errorBg radius-50 flex alignCenter justifyCenter fs-150"
                      >
                        {form.stats.length}
                      </div>
                    </Tippy>
                  ) : (
                    ""
                  )}
                </div>
              }
              text="Numerical traits that just show as numbers"
              icon={MdBarChart}
              option={
                <Button
                  onClick={() => handleOpenLevelsStatModal("stats")}
                  className="outlined icon large"
                >
                  <MdAdd />
                </Button>
              }
            />
            <SettingOption
              titleClassName="fs-200"
              textClassName="fs-150"
              className="mt2"
              title="Unlockable Content"
              text="Include unlockable content that can only be revealed by the owner of the item."
              icon={MdOutlineLock}
              iconProps={{
                className: "mr4 primary",
              }}
              option={<Switch id="unlockableContent" />}
            />
            <SettingOption
              titleClassName="fs-200"
              textClassName="fs-150"
              className="mt2"
              title="Explicit & Sensitive Content"
              iconProps={{
                className: "mr4 warning",
              }}
              text={
                <div className="flex wrap alignCenter">
                  Set this item as explicit and sensitive content
                  <Tippy
                    interactive
                    content={
                      <div className="flex column alignStart p2">
                        <p className="fs-150">
                          Setting your asset as explicit and sensitive content,
                          like pornography and other not safe for work (NSFW)
                          content, will protect users with safe search while
                          browsing Asgar.
                        </p>
                        <a
                          className="textDecNone mainColor mt2 fs-150"
                          href="#"
                        >
                          Learn more about explicit content.
                        </a>
                      </div>
                    }
                  >
                    <span className="flex alignCenter ml2">
                      <MdInfo />
                    </span>
                  </Tippy>
                </div>
              }
              icon={MdAnnouncement}
              option={<Switch id="sensContent" />}
            />
            <Button className="mt6 contained large">Create item</Button>
            {/* <div cl>

            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

const LevelsStatContent = ({ detail, label = "Levels" }) => {
  return (
    <div className="flex column p1" style={{ minWidth: "12em" }}>
      <label className="textSecondary fs-150 mb2">{label}</label>
      {detail.map((item, index) => (
        <div className="flex alignCenter justifyBetween w100" key={item.id}>
          <label>{item.name}</label>
          <div className="flex alignCenter">
            <span>{item.value}</span>
            <span className="textSecondary ml1 mr1">of</span>
            <span>{item.of}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const PropertiesContentDetail = ({ detail }) => {
  return (
    <div className="flex column p1" style={{ minWidth: "12em" }}>
      <label className="textSecondary fs-150 mb2">Properties</label>
      {detail.map((item, index) => (
        <div className="flex alignCenter justifyBetween w100" key={item.id}>
          <label>{item.name}</label>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
};
