import { Tbtn, Timage, Tspan } from "./Tags";
import { Sanalysis, Scrown, Sgrow, Smath } from "../components/Icons";
import { Link } from "react-router-dom";

const Card4MakeUsDifferents = ({ Svg, title, description }) => (
  <div className="card_info_make_us_diff">
    <Svg clas="svg_card_inmausdf" />
    <Tspan clas="title_card_inmausdf" title={title} />
    <Tspan clas="description_card_inmausdf" title={description} />
  </div>
);

const TitlesSection = ({ title, description, btn, btn2 }) => (
  <>
    <Tspan clas="title_best_of" title={title} />
    <Tspan clas="description_best_of" title={description} />
    <Tbtn title={btn} clas={`btn_best_of ${btn2 ? "active" : null}`} />
  </>
);

const CardBest = ({ title, src }) => (
  <div className="card_best_of">
    <Link to="/">
      <Timage clas="image_Card_best" src={src} />
      <Tspan clas="title_publish_best" title={title} />
    </Link>
  </div>
);
export { Card4MakeUsDifferents, CardBest, TitlesSection };
