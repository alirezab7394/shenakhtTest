import React, { memo } from "react";
import "./style.scss";

interface LinkDotProps {}
function LinkDot() {
  return (
    <div className="LinkDot">
      <span className="LinkDot--main">&#9679;</span>
    </div>
  );
}
export default memo(LinkDot);
