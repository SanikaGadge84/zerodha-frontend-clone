import React from "react";
import Hero from "./Hero";
import Awards from "./Awards.js";
import Stats from "./Stats.js";
import Pricing from "./Pricing.js";
import Education from "./Education.js";
import OpenAccount from "../OpenAccount.js";
import Navbar from "../Navbar.js";
import Footer from "../Footer.js";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />

      {/* <h1>REACT IS WORKING</h1> */}
    </>
  );
}
