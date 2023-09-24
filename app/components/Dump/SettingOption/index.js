import React from "react";

export default function Index({
  textHolderClassName = "",
  textHolderProps = {},
  parentStyle = {},
  startOption = "",
  option,
  title,
  text,
  icon,
  className = "",
  titleClassName = "",
  textClassName = "",
  titleComponent,
  background= 'surface-4',
  iconProps = {},
}) {
  const Icon = icon ? icon : false;
  const Title = titleComponent ? titleComponent : "p";
  return (
    <div
      className={`flex alignStart ${background} p4 pr6 radius-2 ${className}`}
      style={parentStyle}
    >
      {Icon ? (
        <Icon
          className="m mr4"
          size="1.4em"
          {...iconProps}
          // style={{fontSize: '1.3rem'}}
        />
      ) : (
        startOption
      )}

      {/* change alignEnd to alignCenter */}
      <div className="flex alignStart column-sm justifyBetween w100">
        <div
          className={`flex column mb4-sm ${textHolderClassName}`}
          {...textHolderProps}
        >
          <Title
            style={{ lineHeight: 1 }}
            className={`mb2 fs-300 ${titleClassName}`}
          >
            {title}
          </Title>
          {text && (
            <div
              style={{ maxWidth: "54ch" }}
              className={`fs-200 textSecondary mt05 mb0 pr4 ${textClassName}`}
            >
              {text}
            </div>
          )}
        </div>

        {option}
      </div>
    </div>
  );
}
