import React, { memo } from "react";
import "./style.scss";

interface OpenCloseTriangleProps {
  open: boolean;
  onChange: () => void;
  isHovered: boolean;
}
function OpenCloseTriangle({ open, onChange, isHovered }: OpenCloseTriangleProps) {
  return (
    <span className={`OpenCloseTriangle ${open && "open"} ${isHovered && "hovered"}`} onClick={() => onChange()}>
      &#x25B6;
    </span>
  );
}
export default memo(OpenCloseTriangle);
