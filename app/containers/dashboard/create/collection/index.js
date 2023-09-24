import Tippy from "@tippyjs/react";
import React from "react";
import { MdAdd, MdAnnouncement, MdDone, MdInfo } from "react-icons/md";
import {
  CustomDropZone,
  CustomLink,
  LinksDropDown,
  SettingOption,
  UnderConstruction,
} from "~/components";
import { Avatar, Button, Select, Switch, TextField } from "~/KIT";
import CreateLinkList from "../createLinkList";

export default function Index() {
  return (
    <div className="flex column alignCenter pt3 pb3">
      <div className="container xxs mt3">
        <div className="flex column alignStart w100">
          <div className="flex alignCenter ml2-sm">
            <CustomLink to="/dashboard/create">
              <h4 className="fs-400">Create</h4>
            </CustomLink>
            <h5 className="mr2 ml2">-</h5>
            <LinksDropDown
              label="Collection"
              content={<CreateLinkList activeLink="collection" />}
            />
          </div>

          <div className="flex column surface-1 shadow-3 radius-1 p4 p2-xs mt4 mt2-sm w100">
            <div className="flex columnReverse-xs alignCenter mb6">
              <CustomDropZone
                dropText="Vela"
                style={{
                  height: "8em",
                  width: "8em",
                }}
                className="mr6 radius-50 alignSelfStart"
                text="Avatar"
              />
              <div className="flex column mb4-xs">
                <label>Logo image</label>
                <p className="textSecondary fs-150 mt2">
                  This image will also be used for navigation. 350 x 350
                  recommended.
                </p>
              </div>
            </div>

            <label>Featured image</label>
            <p className="textSecondary fs-150 mt2">
              This image will be used for featuring your collection on the
              homepage, category pages, or other promotional areas of OpenSea.
              600 x 400 recommended.
            </p>
            <CustomDropZone
              // dropText="Vela"
              style={{
                // height: "8em",
                width: "20em",
              }}
              className="mt2 mb6 mW100"
              // text="Avatar"
            />

            <label>Banner image</label>
            <p className="textSecondary fs-150 mt2">
              This image will appear at the top of your collection page. Avoid
              including too much text in this banner image, as the dimensions
              change on different devices. 1400 x 350 recommended.
            </p>

            <CustomDropZone
              // dropText="Vela"
              // style={{
              //   height: "8em",
              //   width: "8em",
              // }}
              className="mt2 mb6"
              // text="Avatar"
            />

            <TextField
              label="Name"
              placeholder="Example: Treasures of the Sea"
            />

            <label className="mt6">URL</label>
            <p className="textSecondary fs-150 mb2">
              Customize your URL on Nft-Market. Must only contain lowercase
              letters, numbers, and hyphens.
            </p>
            <TextField value={`https://nft-market.io/collection/`} />
            <div className="flex alignCenter mt1">
              <MdDone className="success mr1" />
              <span className="fontBold fs-150">This URL is valid.</span>
            </div>

            <TextField
              textArea
              className="mt4"
              label="Description"
              placeholder="Provide a detailed description of your item."
            />
            <p className="textSecondary fs-150 mt2 mb6">
              <a className="mainColor" href="#">
                Markdown
              </a>{" "}
              syntax is supported. 0 of 1000 characters used.
            </p>

            <label>Category</label>
            <p className="textSecondary mt2 fs-150">
              Adding a category will help make your item discoverable on
              Nft-Market.
            </p>
            <Button
              startIcon={<MdAdd />}
              className="outlined mt2 mb6 alignSelfStart"
            >
              Add category
            </Button>

            <label>Creator earnings</label>
            <p className="textSecondary fs-150 mt2">
              Earn a percentage of the sale price every time one of your items
              is sold. Adding multiple addresses may increase gas fees for
              buyers.
            </p>
            <Button
              startIcon={<MdAdd />}
              className="outlined mt2 alignSelfStart"
            >
              Add address
            </Button>

            <Select
              className="mt6"
              label={
                <div className="flex alignCenter">
                  Blockchain
                  <span className="flex alignCenter ml2 textSecondary">
                    <MdInfo />
                  </span>
                </div>
              }
              options={[
                {
                  label: "Ethereum",
                  value: "eth",
                },
                {
                  label: "Polygon",
                  value: "pol",
                },
                {
                  label: "Solana",
                  value: "solana",
                },
              ]}
            />
            <p className="textSecondary fs-150 mt1 flex wrap alignCenter">
              Select the blockchain where you'd like new items from this
              collection to be added by default.
              {/* open modal and show blockchain information  */}
            </p>

            <label className="mt6">Payment tokens</label>
            <p className="textSecondary mt1 fs-150">
              These tokens can be used to buy and sell your items.
            </p>

            <div className="flex wrap gap-2 mt2">
              <PaymentToken label="ETH" icon="IC" text="Ethereum" />
              <PaymentToken label="WETH" icon="IC" text="Ethereum" />
            </div>
            <Select className="mt2" placeholder="Add token" />

            <SettingOption
              titleClassName="fs-200"
              textClassName="fs-150"
              className="mt6"
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

            <Button className="contained mt8">
              Create collection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const PaymentToken = ({ label, text, icon }) => {
  return (
    <div className="flex alignCenter b b1 radius-2 p1 pr6 ">
      <Avatar className="rounded mainFilledBg">{icon}</Avatar>
      <div className="ml3 flex column alignStart">
        <span>{label}</span>
        <span className="textSecondary fs-150">{text}</span>
      </div>
    </div>
  );
};
