import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero"
import Destinations from "./components/destinations/Destinations";
import Travel from "./components/travel/Travel";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Travel />
    </div>
)};

export default App;
