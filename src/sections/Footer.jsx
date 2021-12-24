import React from "react";
import {
  Sappstore,
  Sfacebook,
  Sgoogleplay,
  Sinstagram,
  Slogo,
  Spinterrest,
  Stwitter,
} from "../components/Icons";
import { Tspan } from "../components/Tags";

function Footer() {
  return (
    <div className="footer">
      <div className="head_footer">
        <div className="line_footer">
          <Tspan title="Company" clas="title_line_footer" />
          <Tspan title="Newsroom" clas="row_line_footer" />
          <Tspan title="About us" clas="row_line_footer" />
          <Tspan title="Careers" clas="row_line_footer" />
        </div>
        <div className="line_footer">
          <Tspan title="Community" clas="title_line_footer" />
          <Tspan title="Popular photos" clas="row_line_footer" />
          <Tspan title="Editors' Choice" clas="row_line_footer" />
          <Tspan title="Resource Hub" clas="row_line_footer" />
          <Tspan title="Quests" clas="row_line_footer" />
          <Tspan title="Portfolio" clas="row_line_footer" />
          <Tspan title="Groups" clas="row_line_footer" />
        </div>
        <div className="line_footer">
          <Tspan title="Licensing" clas="title_line_footer" />
          <Tspan title="About Licensing" clas="row_line_footer" />
          <Tspan title="Become a Contributor" clas="row_line_footer" />
          <Tspan title="Submission requirements" clas="row_line_footer" />
          <Tspan title="Content types" clas="row_line_footer" />
          <Tspan title="Distribution" clas="row_line_footer" />
        </div>
        <div className="line_footer">
          <Tspan title="Social" clas="title_line_footer" />
          <div className="line_social_footer">
            <Sfacebook />
            <Tspan title="Facebook" clas="row_line_footer" />
          </div>
          <div className="line_social_footer">
            <Stwitter />
            <Tspan title="Twitter" clas="row_line_footer" />
          </div>
          <div className="line_social_footer">
            <Sinstagram />
            <Tspan title="Instagram" clas="row_line_footer" />
          </div>
          <div className="line_social_footer">
            <Spinterrest />
            <Tspan title="Pinterest" clas="row_line_footer" />
          </div>
        </div>

        <div className="line_footer">
          <Tspan title="Download the app" clas="title_line_footer" />
          <Sappstore />
          <Sgoogleplay />
        </div>
      </div>

      <div className="bottom_footer">
        <div className="side_left">
          <Tspan title="@" />
          <Slogo clas="logo_footer" />
        </div>
        <div className="side_rigth">
          <Tspan title="Terms" />
          <Tspan title="Privacy" />
          <Tspan title="Support" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
