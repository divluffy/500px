import React from "react";
import { TitlesSection } from "../components/Cards";
import ban1 from "../assets/img/cards/stock-photo-1000001361.jpg";
import ban2 from "../assets/img/cards/stock-photo-224226723.jpg";
import ban3 from "../assets/img/cards/stock-photo-1024354366.jpg";
import ban4 from "../assets/img/cards/sdgdsdg.jpg";
import { Timage, Tspan } from "../components/Tags";
import { Sapples, Sprices, Sstate } from "../components/Icons";

function Discover() {
  let listdiscover = [
    {
      src: ban1,
      title: "Capture Portraits With These 6 Tips",
      author: "Inna Mosina",
      type: "Article",
      state: "Online",
      price: "Free",
    },
    {
      src: ban2,
      title: "Landscape Photography Tutorial",
      author: "Sam Brockway",
      type: "Article",
      state: "Online",
      price: "Free",
    },
    {
      src: ban3,
      title: "Great Big Photography World Podcast",
      author: "Taya Iv",
      type: "Podcast",
      state: "Online",
      price: "Free",
    },
    {
      src: ban4,
      title: "How to shoot fine art at home",
      author: "Angela Perez",
      type: "Video",
      state: "Online",
      price: "Free",
    },
  ];
  return (
    <div className="bowl_discover">
      <TitlesSection
        title="Discover something new"
        description="Browse videos, articles, workshops, and presets from 500px users to discover new areas of photography and grow your skills. Become a Pro member to list your Resources in the Hub."
        btn="View Resource Hub"
      />

      <div className="bowl_cards_discover">
        {listdiscover.map(({ src, title, type, state, price, author }, i) => {
          return (
            <div className="card_discover_line">
              <Timage src={src} clas="img_card_discover" />
              <div className="bowl_bottom_card_disocver">
                <Tspan title={title} clas="title_card_discover" />

                <div className="list_card_discover">
                  <div className="line_discover_inside">
                    <Sapples />
                    <Tspan title={type} clas="span_card_discover" />
                  </div>
                  <div className="line_discover_inside">
                    <Sstate />
                    <Tspan title={state} clas="span_card_discover" />
                  </div>
                  <div className="line_discover_inside">
                    <Sprices />
                    <Tspan title={price} clas="span_card_discover" />
                  </div>
                </div>

                <Tspan title={author} clas="author_discover" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Discover;
