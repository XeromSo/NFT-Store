import React from "react";
import {
  MdAccountBalanceWallet,
  MdInventory,
  MdSecurity,
  MdSpaceDashboard,
} from "react-icons/md";
import {CustomLink} from '~/components'
export default function Services() {
  return (
    <section className="container md">
      <div className="flex column pt16 pb16 pt6-xs pb6-xs">
        <h2 className="fs-500">Create and Sell your NFTs</h2>

        <div className="grid col4 col2-sm col1-xs mt7 gap-4 gap-6-xs">
          <Service
            icon={MdAccountBalanceWallet}
            className="mainBg"
            title="Create NFT"
            to="/helpCenter/creating"
            description="Create your own NFTs and sell them to the community. Create your own NFTs and sell them to the community."
          />
          <Service
            icon={MdSpaceDashboard}
            className="errorBg"
            title="Sell NFT"
            to="/helpCenter/selling"
            description="Sell your NFTs to the community. Create your own NFTs and sell them to the community."
          />
          <Service
            icon={MdInventory}
            className="successBg"
            title="Buy NFT"
            to="/helpCenter/buying"
            description="Create your own NFTs and sell them to the community. Create your own NFTs and sell them to the community."
          />
          <Service
            icon={MdSecurity}
            className="warningBg"
            title="List them for sale"
            to="/helpCenter/gettingStarted"
            description="Sell your NFTs to the community. Create your own NFTs and sell them to the community."
          />
        </div>
      </div>
    </section>
  );
}

const Service = ({ to = "/", icon, className, title, description }) => {
  const Icon = icon || "span";
  return (
    <div className={`flex column alignStart`}>
      <div
        className={`flex alignCenter justifyCenter radius-2 p4 ${className}`}
      >
        <Icon color="#fff" size="1.5em" />
      </div>
      <h3 className="fs-400 mt3">{title}</h3>

      <p className="fs-150 textSecondary mt1">{description}</p>

      <CustomLink to={to} className="mt3 fs-150">
        Tutorial
      </CustomLink>
    </div>
  );
};
