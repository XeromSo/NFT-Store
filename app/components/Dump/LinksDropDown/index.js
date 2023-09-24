import useToggle from "~/hooks/useToggle";
import Tippy from "@tippyjs/react";
import { MdExpandMore } from "react-icons/md";
const Index = ({
  tippyProps = {},
  iconSize = "1.4em",
  label,
  content,
  labelClassName = "",
}) => {
  const [visible, toggleVisible] = useToggle(false);
  return (
    <Tippy
      visible={visible}
      interactive
      arrow={false}
      placement="bottom-start"
      onClickOutside={toggleVisible}
      content={<div onClick={toggleVisible}>{content}</div>}
      {...tippyProps}
    >
      <div onClick={toggleVisible} className="flex alignCenter cursorPoint">
        <h4 className={`fs-400 mr1 capitalizeText ${labelClassName}`}>
          {label}
        </h4>
        <MdExpandMore size={iconSize} />
      </div>
    </Tippy>
  );
};

export default Index;
