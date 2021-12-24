import React from "react";
import { Link } from "react-router-dom";
import { SarrowBot, Slogo, Ssearch } from "../components/Icons";
import { Tinput, Tspan } from "../components/Tags";

function Nav() {
  return (
    <nav>
      <Slogo clas="logo" />
      <div className="bowl_menu">
        <Link to="/" className="block_menu">
          <Tspan title="Discover" />
          <SarrowBot />
        </Link>
        <Link to="/" className="block_menu">
          <Tspan title="Licensing" />
          <SarrowBot />
        </Link>
        <Link to="/" className="block_menu">
          <Tspan title="NFT Vault" />
          <Tspan title="New" clas="new_title_block" />
        </Link>
        <Link to="/" className="block_menu">
          <Tspan title="Memberships" />
        </Link>
        <Link to="/" className="block_menu">
          <Tspan title="Quests" />
        </Link>
        <Link to="/" className="block_menu">
          <Tspan title="Blog" />
        </Link>
      </div>

      <div className="bowl_Search">
        <Ssearch clas="search_svg" />
        <Tinput clas="input_Search" plc="search 500px" />
      </div>

      <div className="bowl_logged">
        <Link to="/" className="to_login ">
          <Tspan title="Log in" />
        </Link>
        <Link to="/" className="to_signup">
          <Tspan title="Sign up" />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
