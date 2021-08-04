import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

interface LinkDotProps {
  hasChildren: boolean;
  isOpen: boolean;
  id: number;
}
function LinkDot({ hasChildren, isOpen, id }: LinkDotProps) {
  return (
    <Link to={`/${id}`}>
      <div className={`LinkDot ${hasChildren && !isOpen && "light"}`}>
        <span className="LinkDot--main">&#x25CF;</span>
      </div>
    </Link>
  );
}
export default memo(LinkDot);
