import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./sections/Nav";
import Header from "./sections/Header";
import MakesDifferent from "./sections/MakesDifferent";
import Sectt from "./sections/Sectt";
import BestOf from "./sections/BestOf";
import {
  SruleStar,
  Sapple,
  Sportfolio,
  Squests,
  Scrowns,
} from "./components/Icons";
import sectt1 from "./assets/img/banner_editors_tablet@2x.0db64dfc.png";
import sectt2 from "./assets/img/banner_portfolio_desktop.7c38b910.png";
import sectt3 from "./assets/img/banner_resource_hub_desktop.7ed26f5e.png";
import sectt4 from "./assets/img/banner_quests_desktop@2x.69ef9bf3.png";
import sectt5 from "./assets/img/banner_licensing_desktop@2x.440dbd64.png";
import Designed from "./sections/Designed";
import Discover from "./sections/Discover";
import Prizes from "./sections/Prizes";
import PaidPhoto from "./sections/PaidPhoto";
import Community from "./sections/Community";
import Footer from "./sections/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main>
          <Header />
          <MakesDifferent />
          <Sectt
            Icon={SruleStar}
            src={sectt1}
            title="Editors’ Choice"
            author="Marta Bevacqua"
          />
          <BestOf />
          <Sectt
            src={sectt2}
            Icon={Sportfolio}
            title="Portfolio"
            margin={true}
            back="#45457c"
            author="Hayden Scott"
          />
          <Designed />
          <Sectt
            src={sectt3}
            Icon={Sapple}
            title="Resource Hub"
            margin={true}
            back="#3d8459"
            author="Szabo Viktor"
          />
          <Discover />
          <Sectt
            src={sectt4}
            Icon={Squests}
            title="Quests"
            margin={true}
            author="Raceala Elena"
          />

          <Prizes />
          <Sectt
            src={sectt5}
            Icon={Scrowns}
            title="Licensing"
            margin={true}
            author="Benny Bulke"
          />
          <PaidPhoto />
          <Community />
          <Footer />
        </main>
      </div>
      {/* this route because router-react-dom dont work link without this lines */}
      <Routes>
        <Route exact path="/" />
      </Routes>
    </Router>
  );
}

export default App;
