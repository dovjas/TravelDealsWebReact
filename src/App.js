import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero"
import Destinations from "./components/destinations/Destinations";
import Travel from "./components/travel/Travel";
import Offers from "./components/offers/Offers";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Travel />
      <Offers />
      <Contact />
    </div>
)};

export default App;
