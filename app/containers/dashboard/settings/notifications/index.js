import React from "react";
import { SettingOption } from "~/components";
import { Switch } from "~/KIT";
export default function Index() {
  return (
    <>
      <p className="textSecondary mb4 pl4">
        Select the kinds of notifications you’d like receive to your email and
        in-app notifications center
      </p>

      <div className="flex column alignStart mt1 w100 surface-1 shadow-3 radius-2 p1">
        <div className="flex column p2 w100">
          <SettingOption
            // icon={BsListTask}
            title="Sales"
            text="When one of your NFTs sells."
            className="pb4 mb1"
            option={<Switch checked id="sales" />}
          />
          <SettingOption
            // icon={BsListTask}
            title="Successful bids"
            text="When your bid was successful and the NFT is in your wallet."
            className="pb4 mb1 mt1"
            option={<Switch checked id="successBids" />}
          />
          <SettingOption
            // icon={BsListTask}
            title="Bids & Outbids"
            text="When someone bids on one of your items or outbids yours bids."
            className="pb4 mb1 mt1"
            option={<Switch checked id="bidsOutbids" />}
          />
          <SettingOption
            // icon={BsListTask}
            title="Expired bids"
            text="When your bid expires or gets deactivated because of insufficient funds"
            className="pb4 mb1 mt1"
            option={<Switch checked id="expiredBids" />}
          />
          <SettingOption
            // icon={BsListTask}
            title="$ASGAR drops"
            text="When you have $ASGAR to claim"
            className="pb4 mb1 mt1"
            option={<Switch checked id="asgarDrops" />}
          />
        </div>
      </div>
    </>
  );
}
