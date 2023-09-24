import React from "react";
import {
  RiDownloadLine,
  RiInstagramFill,
  RiLinkedinFill,
  RiTelegramFill,
} from "react-icons/ri";
import { Button } from "~/KIT";
import { CustomLink, Logo } from "~/components";
import bgPatternSvg from "~/assets/topography.svg";
import { NavLink } from "@remix-run/react";
export default function Index() {
  return (
    <>
      <section
        className="mt12"
        style={{
          marginBottom: "-4em",
          zIndex: "-1",
        }}
      >
        <div className="container md pl0 pr0">
          <div
            className="mainBg overflowHide radius-4 shadow-3 w100 p16 p8-xs relative flex column alignStart"
            style={{ zIndex: 0 }}
          >
            <img
              src={bgPatternSvg}
              alt="Download section cover"
              className="w100 h100 absolute inset-0"
              style={{
                objectFit: "cover",
                zIndex: "0",
                opacity: "0.1",
                transform: "scale(4)",
              }}
            />
            <div className="flex column alignStart" style={{ zIndex: 2 }}>
              <h3 className="flex column">
                <span>Try to find the best</span>
                <span>price for your home</span>
              </h3>
              <p className="textSecondary mt8 fs-300">
                The best price for your home is the one that fits your budget.
              </p>
              <Button
                endIcon={<RiDownloadLine size="1.2em" />}
                className="large mt12 contained"
                style={{ padding: "0.8em 1.5em" }}
              >
                Download application now
              </Button>
            </div>
          </div>
        </div>
      </section>
      <footer className="main-footer">
        <div className="container md">
          <div className="grid col4 col2-sm col2-xs gap-6 placeCenter">
            <div className="flex column alignStart h100 w100 gap-1">
              <label className="mb2 fontBold fs-300 mb1">Main pages</label>
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/explore">Explore</CustomLink>
              {/* <CustomLink to="/">Login</CustomLink> */}
              <CustomLink to="/explore">Top Sellers</CustomLink>
              <CustomLink to="/">Contact Us</CustomLink>
              {/* <CustomLink to="/">About Us</CustomLink> */}
            </div>
            <div className="flex column alignStart h100 w100 gap-1">
              <label className="mb2 fontBold fs-300 mb1">Resources</label>
              <CustomLink to="/blogs">Blogs</CustomLink>
              <CustomLink to="/helpCenter">Help Center</CustomLink>
              <CustomLink to="/ranking">Ranking</CustomLink>
              <CustomLink to="/dashboard/settings/preferences/appearance">
                Setting - Preferences
              </CustomLink>
            </div>
            <div className="flex column alignStart justifyBetween w100 h100">
              <div className="flex column alignStart ">
                <label className="mb2 fontBold fs-300">Get in touch</label>
                <p className="textSecondary">
                  <span>Question or feedback?</span>
                  {/* <br /> */}
                  <span>We'd love to hear from you!</span>
                </p>
              </div>
              <div className="flex alignCenter gap-1 mt4">
                <Button aria-label="Telegram" className="icon circle">
                  <RiTelegramFill color="#2AABEE" size="1.4em" />
                </Button>
                <Button aria-label="Instagram" className="icon circle">
                  <RiInstagramFill color="#E1306C" size="1.4em" />
                </Button>
                <Button aria-label="Linkedin" className="icon circle">
                  <RiLinkedinFill color="#0077b5" size="1.4em" />
                </Button>
              </div>
            </div>

            <div className="flex column alignStart justifyBetween w100 h100">
              <Logo />
              <div className="flex column mt3">
                <p>© 2022 All rights reserved.</p>
                <div className="flex alignCenter">
                  <CustomLink to="/">Terms</CustomLink>
                  <span className="textSecondary ml2 mr2">|</span>
                  <CustomLink to="/">Privacy</CustomLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
