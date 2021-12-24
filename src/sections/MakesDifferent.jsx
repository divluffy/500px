import React from "react";
import { Card4MakeUsDifferents } from "../components/Cards";
import {
  Sanalysis,
  Sappstore,
  Scrown,
  Sgoogleplay,
  Sgrow,
  Smath,
  Swave1,
} from "../components/Icons";
import { Timage, Tspan } from "../components/Tags";
import GetAPp from "../assets/img/devices_desktop.b629f971.png";

function MakesDifferent() {
  const Cards4 = [
    {
      title: "Grow as a photographer",
      svg: Sgrow,
      description:
        "Get immediate exposure with your first upload. Our Pulse algorithm surfaces new photographs and photographers, ensuring your photos are seen by the community so you receive valuable feedback on day one.",
    },
    {
      title: "Build your career",
      svg: Smath,
      description:
        "Market yourself as a professional photographer. Show that you’re available for hire on your Profile and get discovered in Search results, showcase your articles, presents, videos, and more with Resources, and create a Portfolio website to showcase your work.",
    },
    {
      title: "See how you're performing",
      svg: Sanalysis,
      description:
        "With Statistics and Pulse you get valuable insights into how your photos are performing and how you rank in comparison to other photographers in the community.",
    },
    {
      title: "Sell your work",
      svg: Scrown,
      description:
        "Earn one of the highest royalty rates in the industry when you distribute your photography through 500px to a global marketplace, where buyers can view and purchase your work for commercial usage.",
    },
  ];
  return (
    <div className="makes_us_different">
      <Tspan clas="title_maksdiff" title="What makes us different" />
      <div className="bowl_4_Cards_usdif">
        {Cards4.map(({ svg, title, description }, i) => (
          <Card4MakeUsDifferents
            key={i}
            Svg={svg}
            title={title}
            description={description}
          />
        ))}
      </div>

      <div className="get_our_app">
        <div className="info_get_app">
          <Tspan clas="title_get_app" title="Get the app" />
          <Tspan
            clas="description_get_app"
            title="Join our community of over 16 million like-minded photographers. Download the 500px app for Android and iOS today!"
          />
          <div className="bowls_btns_apps">
            <Sappstore />
            <Sgoogleplay />
          </div>
        </div>
        <Timage clas="image_get_our_app" src={GetAPp} />
        <Swave1 clas="wave1_get_App" />
      </div>
    </div>
  );
}

export default MakesDifferent;
