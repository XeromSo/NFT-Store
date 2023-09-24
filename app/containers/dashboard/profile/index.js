import React from "react";
import { MdEdit } from "react-icons/md";
import { CustomLink } from "~/components";
import { Avatar, Button, Tab, Tabs } from "~/KIT";

export default function Index() {
  return (
    <>
      <div
        className="radius-2 shadow-2 mt3"
        style={{
          backgroundImage:
            'url("https://cdn.wallpapersafari.com/8/19/8Fthys.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "16em",
          width: "100%",
        }}
      />

      <div
        className="flex alignEnd pl3 pr3"
        style={{
          marginTop: "-2.5em",
        }}
      >
        <div className="radius-50 bodyBg p1">
          <Avatar
            className="shadow-4"
            src="https://thumbs.dreamstime.com/b/closeup-photo-funny-excited-lady-raise-fists-screaming-loudly-celebrating-money-lottery-winning-wealthy-rich-person-wear-casual-172563278.jpg"
            style={{
              height: "6.5em",
              width: "6.5em",
            }}
          />
        </div>

        <div className="p3 pr0 ml3 w100 flex justifyBetween alignCenter">
          <div className="flex column alignStart">
            <h4 className="fs-400">My name is asgar</h4>
            <p className="textSecondary">+6.5K Followers</p>
          </div>
          <div className="flex alignCenter dNoneSm">
            <CustomLink to="/dashboard/settings/profile">
              <Button className="" startIcon={<MdEdit />}>
                Edit Profile
              </Button>
            </CustomLink>
          </div>
        </div>
      </div>

      {/* <div className="flex justifyCenter mt8">
        
      </div> */}
    </>
  );
}
