import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ColorSwatch from "./components/ColorSwatch";

function App() {
  const testColors = ["red", "yellow", "green", "blue", "purple"];
  const colorSwatches = testColors.map((item) => {
    return <ColorSwatch color={item} />;
  });

  console.log(colorSwatches);

  return (
    <>
      <Navbar />
      <div className='swatch--container'>{colorSwatches}</div>
    </>
  );
}

export default App;
