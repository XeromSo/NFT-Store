import React, { useEffect } from "react";
import { RiTwitterFill } from "react-icons/ri";
import { Avatar, Button, TextField } from "~/KIT";
import verifyPng from "~/assets/fakes/verified.png";
import { CustomDropZone } from "~/components";
import { MdPersonOutline } from "react-icons/md";

export default function Index() {
  // useEffect(() => {
  //   // fetch a fake person image to mirror api
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "26662dad67msh1bd75805d195272p127593jsn9e5d91d7fa0a",
  //       "X-RapidAPI-Host": "mirror-ai.p.rapidapi.com",
  //     },
  //   };

  //   fetch("https://mirror-ai.p.rapidapi.com/token", options)
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // }, []);
  return (
    <>
      <p className="textSecondary mb4 pl4">
        Manage your account detail, display name, biography, email, and link
        your social media accounts.
      </p>
      <div className="flex column alignStart ml0 mt1 surface-1 shadow-3 radius-2 p3">
        <div className="w100 relative">
          {/* <div
            className="radius-2 mainFilledBg w100"
            style={{ height: "14em" }}
          /> */}
          <CustomDropZone
            dropText="Vela"
            style={{
              height: "14em",
              // width: "8em",
            }}
            className="w100 radius-2 flex alignCenter justifyCenter mainFilledBg"
            text="Cover image"
          />
          <div
            className="surface-1 absolute p1 radius-50"
            style={{ bottom: "-2em", left: "1em" }}
          >
            <CustomDropZone
              dropText="Vela"
              icon={<MdPersonOutline size="1.6em" />}
              // style={{
              //   height: "8em",
              //   width: "8em",
              //   // background: "linear-gradient(to right, #56ccf2, #2f80ed)",
              // }}
              className="userSettingAvatar radius-50 flex alignCenter justifyCenter"
              text="Avatar"
            />
            {/* <Avatar
              className="xxLarge"
              style={{
                background: "linear-gradient(to right, #56ccf2, #2f80ed)",
              }}
            >
              S
            </Avatar> */}
          </div>
        </div>

        <div className="grid col12 mt10 w100 p5 p2-sm gap-4">
          <div className="span-8 span-12-md flex column">
            <div className="b b1 radius-1 mb3 flex alignCenter justifyBetween p2 warningFilledBg dNone dFlexMd">
              <div className="flex alignCenter flexGrow1 pr3">
                <img
                  src={verifyPng}
                  alt="verify"
                  className="dNoneXs mr3"
                  style={{
                    height: "2em",
                    // filter: "drop-shadow(4px 8px 12px rgba(0,0,0,0.4))",
                  }}
                />
                <p className="textSecondary fs-150">
                  Proceed with verification process to get more visibility and
                  gain trust on ASGAR
                </p>
              </div>
              <Button className="contained small">Verify</Button>
            </div>
            <TextField
              label="Display Name"
              placeholder="Enter your display name"
            />
            <TextField
              className="mt3"
              label="Username"
              startIcon={<span className="ml3">@</span>}
              placeholder="Enter your username"
            />
            <p className="fs-150 textSecondary mt1">
              Your profile will be available on nft-market.com/[
              <span className="fontBold text">username</span>]
            </p>
            <TextField
              rows={5}
              textArea
              className="mt3"
              label="Biography"
              placeholder="Tell about yourself in a few words"
            />

            <TextField
              className="mt3"
              label="Email"
              placeholder="Enter your email"
              endIcon={<Button className="m1">Confirm</Button>}
            />
            <p className="fs-150 textSecondary mt1">
              Your email for marketplace notifications
            </p>

            <h5 className="mt6">Social links</h5>
            <p className="textSecondary mt1">
              Add your existing social links to build a stronger reputation
            </p>
            <TextField
              className="mt4"
              label="Website"
              placeholder="Enter your website"
              startIcon={<span className="ml3 textSecondary">https://</span>}
            />

            <TextField
              className="mt3"
              label="Twitter"
              placeholder="Enter your twitter link"
              startIcon={<RiTwitterFill className="ml3" />}
              endIcon={<Button className="m1">Link</Button>}
            />
            <Button className="contained mt5 alignSelfStart">
              Save changes
            </Button>
          </div>

          <div className="span-4 pt6 dNoneMd">
            <VerifyAccount />
          </div>
        </div>
      </div>
    </>
  );
}

const VerifyAccount = () => {
  return (
    <div
      className="b b1 radius-2 p1 w100"
      style={{
        position: "sticky",
        top: "8em",
      }}
    >
      <div
        className="w100 radius-2 flex alignCenter justifyCenter pt5 pb5"
        style={{
          height: "8em",
          background: "linear-gradient(to right, #007991, #78ffd6)",
        }}
      >
        <img
          src={verifyPng}
          alt="verify"
          className="h100"
          style={{
            filter: "drop-shadow(4px 8px 12px rgba(0,0,0,0.4))",
          }}
        />
      </div>
      <div className="flex column p2">
        <h6 className="fontBold">Verify your account</h6>
        <p className="textSecondary mt1 fs-150">
          Proceed with verification process to get more visibility and gain
          trust on ASGAR
        </p>
        <Button className="mt4 outlined w100">Get Verfied</Button>
      </div>
    </div>
  );
};
