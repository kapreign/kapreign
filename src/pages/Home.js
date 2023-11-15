import React, { useState } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import Banners from "../Components/Banners";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
// import Teams from "../Components/Teams";
import Landing from "../Layouts/Landing";
import Banr from "../Components/Banr";
import Navmob from "../Components/Navmob";
import options from "../Components/Particles";
import ContactUs from "../Components/ContactUs";

export default function Home({ children }) {
  const [theme, setTheme] = useState(true);
  const [menu, setMenu] = useState(false);
  const themeChanger = () => {
    setTheme(!theme);
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};
  const menuOpen = () => {
    setMenu(!menu);
  };
  menu && console.log("ok");
  return (
    <div>
      {menu ? <Navmob theme={theme} /> : ""}
      <Particles
        id="tsparticles"
        className="h-screen absolute z-10 w-full"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      <Banr theme={theme} />
      {/* <Banner theme={theme}/> */}
      <Landing theme={theme} />
      <Projects theme={theme} />
      {/* <Teams theme={theme} /> */}
      <Banners theme={theme} />
      <ContactUs theme={theme} />
    </div>
  );
}
