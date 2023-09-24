import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useTransition,
} from "@remix-run/react";
import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "~/context/appContext";
import { Button, TextField, Avatar, Switch } from "~/KIT";
import useScrollPosition from "~/hooks/useScrollPosition";
import DrawerContent from "./Drawer";
import {
  CustomLink,
  OptimizedImage,
  Logo,
  UnderConstruction,
} from "~/components";
import { MdKeyboardArrowDown, MdPerson, MdMenu } from "react-icons/md";
import Tippy from "@tippyjs/react";
import { BiSearch } from "react-icons/bi";
import SearchModal from "./SearchModal";

export default function Index() {
  const { pathname } = useLocation();
  const appCtx = useAppContext();
  const { appearance, general } = appCtx.preferences();
  const { theme } = appearance;
  const [searchValue, setSearchValue] = useState("");
  const scrollPosition = useScrollPosition();
  const navigate = useNavigate();
  const handleConnectWallet = () => {
    appCtx.ModalsManager.show(TestModal);
  };

  const handleOpenDrawerMenu = () => {
    appCtx.ModalsManager.show(DrawerContent, {
      dialogClassName: "w100 overflowYAuto scrollBarVisibleNone",
      goToPage: (page) => {
        navigate(page);
      },
    });
  };
  const handleOpenUnderConstruction = () => {
    appCtx.ModalsManager.show(UnderConstruction, {
      dialogClassName: "w100 overflowYAuto",
    });
  };
  const handleOpenSearchModal = () => {
    appCtx.ModalsManager.show(SearchModal, {
      dialogClassName:
        "w100 overflowYAuto searchModalStyles scrollBarVisibleNone",
      navigate,
      search: searchValue,
      setSearch: setSearchValue,
      // onDestroy: () => {
      // setSearchValue("");
      // setSearchValue("");
      // }
    });
  };

  // useEffect(() => {
  //   handleOpenDrawerMenu();
  // }, []);
  return (
    <header className={`main-header ${scrollPosition > 32 ? "scrolled" : ""}`}>
      <div className="container md">
        <div className="grid col12 pt1 pb1">
          <div className="flex alignCenter span-3 span-6-sm">
            <Button
              aria-label="Navigation Menu Button"
              className="dNone dFlexSm mr2 icon"
              onClick={handleOpenDrawerMenu}
            >
              <MdMenu />
            </Button>
            <CustomLink to="/" className="inheritColor">
              <Logo />
            </CustomLink>
            {/* {transition.state === "loading" ? (
              <div className="loader">Loading..</div>
            ) : null} */}
          </div>

          <nav className="flex alignCenter justifyCenter gap-1 span-6 dNoneSm">
            <CustomLink to="/">
              <Button
                className={`headerLink ${
                  pathname.split("/")[1] === "" ? "activatedLink" : ""
                }`}
              >
                Home
              </Button>
            </CustomLink>
            <CustomLink to="/explore">
              <Button
                className={`headerLink
                  ${pathname.split("/")[1] === "explore" ? "activatedLink" : ""}
                  `}
              >
                Explore
              </Button>
            </CustomLink>

            <Tippy
              interactive
              content={
                <div
                  className="flex column buttonAlignsLeft"
                  style={{
                    width: "12em",
                    maxWidth: "100%",
                  }}
                >
                  <CustomLink to="/blogs">
                    <Button
                      className={`w100 ${
                        pathname.split("/")[1] === "blogs" ? "outlined" : ""
                      }`}
                    >
                      Blogs
                    </Button>
                  </CustomLink>
                  <CustomLink to="/helpCenter">
                    <Button
                      className={`w100 ${
                        pathname.split("/")[1] === "helpCenter"
                          ? "outlined"
                          : ""
                      }`}
                    >
                      Help center
                    </Button>
                  </CustomLink>
                  <CustomLink to="/ranking">
                    <Button
                      className={`w100 ${
                        pathname.split("/")[1] === "ranking" ? "outlined" : ""
                      }`}
                    >
                      Ranking
                    </Button>
                  </CustomLink>
                </div>
              }
            >
              <Button
                className="headerLink"
                endIcon={<MdKeyboardArrowDown size="1.2em" />}
              >
                Resources
              </Button>
            </Tippy>
          </nav>
          <div className="flex alignCenter justifyEnd gap-1 span-3 dNoneSm">
            <Button
              onClick={() => {
                appCtx.updateTheme(theme === "dark" ? "light" : "dark");
              }}
              className="icon theme-toggle mr1"
              id="theme-toggle"
              title="Toggles light & dark"
              aria-label={theme}
              aria-live="polite"
            >
              <svg
                className="sun-and-moon"
                aria-hidden="true"
                width="26"
                height="26"
                viewBox="0 0 26 26"
              >
                <mask className="moon" id="moon-mask">
                  <rect x="0" y="0" width="100%" height="100%" fill="white" />
                  <circle cx="26" cy="10" r="6" fill="black" />
                </mask>
                <circle
                  className="sun"
                  cx="13"
                  cy="13"
                  r="6"
                  mask="url(#moon-mask)"
                  fill="currentColor"
                />
                <g className="sun-beams" stroke="currentColor">
                  <line x1="13" y1="1" x2="13" y2="3" /> // top
                  <line x1="20" y1="6.2" x2="21.4" y2="4.8" /> // top-right
                  <line x1="23" y1="13" x2="25" y2="13" /> // right
                  <line x1="20" y1="20" x2="21.4" y2="21.4" /> // bottom-right
                  <line x1="13" y1="22.6" x2="13" y2="24.6" /> // bottom
                  <line x1="4.82" y1="21.78" x2="6.34" y2="19.8" /> //
                  bottom-left
                  <line x1="1.2" y1="13" x2="3.2" y2="13" /> // left
                  <line x1="4.8" y1="4.8" x2="6.5" y2="6.5" /> // top-left
                </g>
              </svg>
            </Button>

            <CustomLink
              to={general.dashboardInitialRoute}
              aria-label="Go to dashboard"
            >
              <Button
                className="icon circle"
                aria-label="User Dashboard Button"
              >
                <Avatar
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  className="small"
                  src="https://images.generated.photos/qfOTcXh13zYKIfYSrP_ML6SorgbIXAn9BBfzSNmg2is/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/OTY5NzM4LmpwZw.jpg"
                />
              </Button>
            </CustomLink>
            <Button
              onClick={handleOpenSearchModal}
              className="icon circle"
              aria-label="Search Button"
            >
              <BiSearch />
            </Button>

            {/* <Button onClick={handleConnectWallet} className="contained ml2">
              Connect wallet
            </Button> */}
          </div>

          <div className="span-6 dNone dFlexSm alignCenter justifyEnd">
            <Button
              onClick={handleOpenSearchModal}
              className="icon circle"
              aria-label="Search Button"
            >
              <BiSearch />
            </Button>
            <CustomLink
              to={general.dashboardInitialRoute}
              aria-label="Go to dashboard"
            >
              <Button
                className="icon circle"
                aria-label="User Dashboard Button"
              >
                <Avatar
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  className="small"
                  src="https://images.generated.photos/qfOTcXh13zYKIfYSrP_ML6SorgbIXAn9BBfzSNmg2is/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/OTY5NzM4LmpwZw.jpg"
                />
              </Button>
            </CustomLink>
            {/* <Button className="icon" onClick={handleOpenDrawerMenu}>
              <MdMenu />
            </Button> */}
          </div>
        </div>
      </div>
    </header>
  );
}
