import React from "react";
import { TitlesSection } from "../components/Cards";
import { Timage, Tspan } from "../components/Tags";
import BanC3 from "../assets/img/desktop_portfolio.fdf6ee3e.png";

function Designed() {
  return (
    <div className="designed_built">
      <TitlesSection
        title="Designed and built for photographers"
        description="Create your own high-quality website in minutes. Portfolios allows you to share your work externally so you can build your own brand and market yourself as a professional photographer."
        btn="Get Started"
      />

      <Timage src={BanC3} clas="image_designed_built" />
    </div>
  );
}

export default Designed;
