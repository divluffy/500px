import React from "react";
import { Tbtn, Timage, Tspan } from "../components/Tags";
import sectt2 from "../assets/img/loh_quests@2x.c67b91f0.png";
import { Sprizes } from "../components/Icons";

function Prizes() {
  return (
    <div className="bowl_prizes">
      <div className="info_prizes">
        <Sprizes clas="icon_prizes" />
        <Tspan clas="title_prizes" title="Take photos. Win prizes." />
        <Tspan
          clas="description_prizes"
          title="Quests are creative photo challenges that encourage you to test your skills and submit your best work for a chance to win exciting prizes. We launch new Quests with unique themes every week so there is always something for everyone!"
        />
        <Tbtn title="View Quests" clas="btn_prizes" />
      </div>

      <Timage src={sectt2} clas="banar_prizes" />
    </div>
  );
}

export default Prizes;
