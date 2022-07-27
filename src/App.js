import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero"
import Destinations from "./components/destinations/Destinations";
import Travel from "./components/travel/Travel";
import Offers from "./components/offers/Offers";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Travel />
      <Offers />
    </div>
)};

export default App;
