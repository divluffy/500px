import React from "react";
import { Link } from "react-router-dom";
import { Tbtn, Timage, Tspan } from "../components/Tags";
import BanC1 from "../assets/img/cards/editors1@3x.e0b9b07f.png";
import BanC2 from "../assets/img/cards/editors2@3x.fc1a8fcc.png";
import BanC3 from "../assets/img/cards/editors3@3x.0e716ea7.png";
import BanC4 from "../assets/img/cards/editors4@3x.0a146aef.png";
import BanC5 from "../assets/img/cards/editors5@3x.55520542.png";
import BanC6 from "../assets/img/cards/editors6@3x.152133df.png";
import BanC7 from "../assets/img/cards/editors7@3x.7a76c89b.png";
import BanC8 from "../assets/img/cards/editors8@3x.1d22d3c1.png";
import { CardBest, TitlesSection } from "../components/Cards";

function BestOf() {
  let listBest = [
    {
      title: "Photo by Raimondo Jereb",
      src: BanC1,
    },
    {
      title: "Photo by milos nejezchleb",
      src: BanC2,
    },
    {
      title: "Photo by Elke Vogelsang",
      src: BanC3,
    },
    {
      title: "Photo by Els Vanopstal",
      src: BanC4,
    },
    {
      title: "Photo by Chun Chau",
      src: BanC5,
    },
    {
      title: "Photo by Tajouj Hamadto",
      src: BanC6,
    },
    {
      title: "Photo by Renat Renee-Ell",
      src: BanC7,
    },
    {
      title: "Photo by Hayden Scott",
      src: BanC8,
    },
  ];
  return (
    <div className="bowl_best_of">
      <TitlesSection
        title="The best of the best."
        description="Our editors are always on the lookout for jaw dropping content for you to discover and stay inspired. Check back weekly to see what’s new."
        btn="View Editors"
      />
      <div className="bowl_cards_Best_of">
        {listBest.map(({ title, src }, i) => (
          <CardBest src={src} title={title} />
        ))}
      </div>
    </div>
  );
}

export default BestOf;
