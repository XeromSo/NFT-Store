import React from "react";
import { CustomLink, LinksDropDown, UnderConstruction } from "~/components";
import CreateLinkList from "../createLinkList";

export default function Index() {
  return (
    <div className="flex column alignCenter pt3 pb3">
      <div className="container xxs mt3">
        <div className="flex column alignStart w100">
          <div className="flex alignCenter">
            <CustomLink to="/dashboard/create">
              <h4 className="fs-400">Create</h4>
            </CustomLink>
            <h5 className="mr2 ml2">-</h5>
            <LinksDropDown label="Story" content={<CreateLinkList activeLink="story" />} />
          </div>
          <UnderConstruction />
        </div>
      </div>
    </div>
  );
}
