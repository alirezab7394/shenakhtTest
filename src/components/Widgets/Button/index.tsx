import React, { CSSProperties, useRef, useState } from "react";
import "./style.scss";

interface Props {
  title?: any;
  style?: CSSProperties;
  onClick?: (event?: React.MouseEvent) => void;
  type?: "white";
  className?: string;
  children?: any;
  shape?: "iconButton" | "normal";
}
export default function Button({
  title,
  style = {},
  onClick = () => {},
  type = "white",
  className = "",
  children,
  shape = "normal",
}: Props) {
  const rippleAnimation = useRef("1");
  const [rippleStyle, setRippleStyle] = useState<CSSProperties>({});
  let onButtonClick = (e: React.MouseEvent) => {
    onClick(e);
    let d = Math.max(e.currentTarget.getBoundingClientRect().width, e.currentTarget.getBoundingClientRect().height);
    let x = e.pageX - e.currentTarget.getBoundingClientRect().left - d / 2;
    let y = e.pageY - e.currentTarget.getBoundingClientRect().top - d / 2;
    rippleAnimation.current = rippleAnimation.current === "1" ? "2" : "1";
    setRippleStyle({
      left: x,
      top: y,
      width: d,
      height: d,
      animation: `rippleAnimation${rippleAnimation.current} 0.65s linear`,
    });
  };

  return (
    <button
      className={`myCustomButtonClass ${type} ${className} ${shape}`}
      style={style}
      onClick={(e) => onButtonClick(e)}
    >
      {children ? children : title}
      <div className={`myCustomButtonClass--ripple`} style={rippleStyle}></div>
    </button>
  );
}
