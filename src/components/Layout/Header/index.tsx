import React from "react";
import { useHistory } from "react-router-dom";
import Button from "src/components/Widgets/Button";
import {ReactComponent as Back} from "src/assets/svg/arrow_back_ios.svg"
import {ReactComponent as Home} from "src/assets/svg/home.svg"
import "./style.scss"

export default function Header() {
  const history = useHistory();
  return (
    <div className="Header">
      <Button shape="iconButton" onClick={() => history?.goBack()}><Back/></Button>
      <Button shape="iconButton" style={{marginLeft:"1rem"}} onClick={() => history?.push("/")}><Home/></Button>
    </div>
  );
}
