import { nanoid } from "nanoid";
import React from "react";
import { BiCopy } from "react-icons/bi";
import { MdContentCopy, MdCopyAll, MdMoreHoriz } from "react-icons/md";
import { CustomLink } from "~/components";
import { Avatar, Button } from "~/KIT";
import { FAKE_WALLETS } from "~/store/defaults";

import ethSvg from "~/assets/exch/eth.svg";
import polygSvg from "~/assets/exch/polyg.svg";
import immuSvg from "~/assets/exch/immu.svg";

const avatars = {
  "Immutable X": immuSvg,
  Polygon: polygSvg,
  Ethereum: ethSvg,
};
export default function Index() {
  return (
    <>
      <p className="textSecondary mb4 pl4">
        Add one or more wallets to showcase all your NFTs in one place.{" "}
        <CustomLink to="/" className="text fontBold">
          Read more
        </CustomLink>
      </p>
      <div className="flex column alignStart ml0 mt1 surface-1 shadow-3 radius-2 p2">
        {FAKE_WALLETS.map((_wallet) => {
          return <Wallet key={nanoid()} wallet={_wallet} />;
        })}

        <Button className="large w100">Link a wallet</Button>
      </div>
    </>
  );
}

const Wallet = ({ wallet }) => {
  const { status, address, type } = wallet;
  return (
    <div className="flex alignCenter justifyBetween p2 w100">
      <div className="flex flexGrow1 alignCenter">
        <Avatar
          className="small"
          src={avatars[type]}
          style={{
            filter: status === "offline" ? "grayscale(1)" : "none",
          }}
        />
        <div className="flex column alignStart ml3">
          <div className="flex alignCenter">
            <p className="text fontBold mr3">{address}</p>
            <MdContentCopy size="0.9em" className="textSecondary cursorPoint" />
          </div>

          <p className="textSecondary flex alignCenter mt1 fs-100">
            {type}
            <span
              className={`${
                status === "online" ? "successBg" : "errorBg"
              } ml3 radius-50`}
              style={{ height: "0.6em", width: "0.6em" }}
            />
          </p>
        </div>
      </div>

      <Button className="icon">
        <MdMoreHoriz />
      </Button>
    </div>
  );
};
