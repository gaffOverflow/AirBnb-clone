import React from "react";
import ReactDom from "react-dom/client";
import NavBar from "./src/components/NavBar.jsx";
import Hero from "./src/components/Hero.jsx";
import HeroSection from "./src/components/Hero.jsx";
import Card from "./src/components/card.jsx"

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Card/>
    </>
  );
}

export default App;
