import React from "react";
import { Timage, Tspan } from "../components/Tags";
import sectt2 from "../assets/img/e4012c1.jpg";
import { Sphan } from "../components/Icons";

function PaidPhoto() {
  return (
    <div className="bowl_prizes bowl_paid">
      <Timage src={sectt2} clas="banar_prizes" />
      <div className="info_prizes">
        <Sphan clas="icon_prizes" />
        <Tspan clas="title_prizes" title="Get paid for your photos" />
        <Tspan
          clas="description_prizes"
          title="Don’t let your photos sit there gathering dust, like on other platforms. Gain exposure and get paid for your work with 500px Licensing. You'll earn 60% royalties (one of the industry's highest rates) when you license your photos exclusively with our global distribution partners."
        />
      </div>
    </div>
  );
}

export default PaidPhoto;
