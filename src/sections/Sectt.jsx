import React from "react";
import { Timage, Tspan } from "../components/Tags";
function Sectt({ Icon, title, margin, author, src, back }) {
  return (
    <div
      className={`sectt_bowl
    
    ${margin ? "margin" : null}`}
    >
      <Timage clas="background_Sectt" src={src} />
      <div className="bowl_flow_Sectt" style={{ "--back": back ? back : null }}>
        <Icon clas={` svg_sectt ${back ? "active" : null}`} />
        <Tspan title={title} clas="title_Sectt" />
      </div>
      <Tspan title={`Photo by ${author}`} clas="publish_photo_by" />
    </div>
  );
}

export default Sectt;
