import React from "react";
import { Link } from "react-router-dom";
import imghead from "../assets/img/header@2x.0aeae4b0.jpg";
import { Swave0 } from "../components/Icons";
import { Tbtn, Timage, Tspan } from "../components/Tags";
function Header() {
  return (
    <div className="header">
      <Timage src={imghead} clas="image_back_header" />
      <Swave0 clas="wave_header" />
      <div className="bowl_flow_header">
        <Tspan
          clas="title_header_home"
          title="Discover and share the world’s best photos"
        />
        <Tspan
          clas="description_header"
          title="Get inspired with incredible photos from diverse styles and genres around the world. We're not guided by fads—just great photography."
        />
        <Tbtn clas="btn_header" title="Sign up" />
      </div>
    </div>
  );
}

export default Header;
