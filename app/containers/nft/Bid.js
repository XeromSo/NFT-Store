import { MdPerson } from "react-icons/md";
import { Avatar } from "~/KIT";

const Bid = ({ bid }) => {
  const { avatar, name, bidValue, bidTime } = bid;
  return (
    <div className="w100 flex alignCenter justifyBetween">
      <div className="flex alignCenter">
        <Avatar className="small" src={avatar}>
          <MdPerson />
        </Avatar>
        <div className="flex column ml3">
          <span className="fs-200 fontBold">{name}</span>
          <span className="textSecondary fs-150">{bidTime}</span>
        </div>
      </div>

      <div className="flex column alignEnd">
        <span className="fs-200 fontBold">{bidValue}</span>
        <span className="textSecondary fs-150">$138</span>
      </div>
    </div>
  );
};

export default Bid;
