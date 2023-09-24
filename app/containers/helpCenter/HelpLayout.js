import { useLocation, useNavigate } from "@remix-run/react";
import React, { useEffect } from "react";
import {
  BiCartAlt,
  BiCookie,
  BiPurchaseTagAlt,
  BiRocket,
  BiSearch,
} from "react-icons/bi";
import { CustomLink, LinksDropDown } from "~/components";
import { Button, TextField, Select } from "~/KIT";
import DropDownLinksContent from "./DropDownLinksContent";

const icons = {
  gettingStarted: BiRocket,
  creating: BiCookie,
  buying: BiCartAlt,
  selling: BiPurchaseTagAlt,
};
export default function HelpLayout({ links, label, routeKey, children }) {
  const RouteIcon = icons[routeKey];
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const idInPath = Number(pathname.split("/").pop().split("-")[0]);
  const [selectOptions, setSelectOptions] = React.useState([]);

  useEffect(() => {
    setSelectOptions(
      links.map((item) => ({
        label: item.title,
        value: item.id,
      }))
    );
  }, [links]);
  return (
    <section className="container sm flex column pt16 pb16 pt6-sm pb6-sm">
      <div className="grid col12">
        <div className="span-4 span-12-sm pt4 pb4 pr8 pt0-sm pr0-sm">
          <div className="flex alignCenter mb5 mb2-sm">
            <CustomLink to="/helpCenter">
              <span className="fs-200">Help center</span>
            </CustomLink>
            <span className="mr1 ml1">-</span>

            <LinksDropDown
              tippyProps={{
                arrow: false,
                placement: "bottom-start",
              }}
              labelClassName="fs-200"
              iconSize="1.2em"
              label={
                <span className="flex alignCenter ml1">
                  <RouteIcon className="mr1" size="1em" />
                  {label}
                </span>
              }
              content={<DropDownLinksContent activeLink={routeKey} />}
            />
          </div>
          <TextField
            className="mb4 dNoneSm"
            style={{ maxWidth: "16em" }}
            inputStyle={{ padding: "0.35em 0.5em" }}
            startIcon={<BiSearch className="ml3 textSecondary" />}
            placeholder="Search..."
          />
          <div className="flex column dNoneSm">
            <label className="textSecondary">Questions:</label>
            <ul className="flex column gap-1 mt3 decimalUl pl4">
              {links.map(({ id, title }, idx) => {
                const isLinkActive = idInPath === id;
                return (
                  <li key={id}>
                    <CustomLink
                      className={isLinkActive ? "mainColor" : ""}
                      to={`/helpCenter/${routeKey}/${id}`}
                    >
                      {title}
                      {/* {title} {title} */}
                    </CustomLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="dFlexSm w100 dNone">
            <Select
              className="w100"
              label="Questions:"
              options={selectOptions}
              placeholder="Select a question"
              value={idInPath}
              onChange={(e) => {
                // console.log(e);
                navigate(`/helpCenter/${routeKey}/${e.value}`);
              }}
            />
          </div>
        </div>

        <div className="span-8 span-12-sm flex column">{children}</div>
      </div>
    </section>
  );
}
