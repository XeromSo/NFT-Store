import React from "react";
import Highlighter from "react-highlight-words";
import { Avatar, Button } from "~/KIT";
export default function User({ onClick, searchWords, user }) {
  const { avatar, creator, id, balance } = user;
  return (
    <Button
      onClick={() => onClick(id)}
      className="flex column alignCenter b b1 radius-1 p2 pt4"
    >
      <Avatar src={avatar} className="mb1 " />
      <span className="fs-200">
        <Highlighter
          highlightClassName="textHighLight"
          searchWords={searchWords}
          autoEscape={true}
          textToHighlight={creator}
        />
      </span>
      <span className="textSecondary fs-150">Balance: {balance}</span>
    </Button>
  );
}
