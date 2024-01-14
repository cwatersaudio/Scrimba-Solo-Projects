import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ColorSwatch from "./components/ColorSwatch";

function App() {
  const [colors, setColors] = React.useState({
    seedColor: "#000000",
    swatches: ["#000000", "#000000", "#000000", "#000000", "#000000"], //need to be set by API
  });

  React.useEffect(() => {
    ///scheme{?hex,rgb,hsl,cmyk,format,mode,count
    fetch("https://www.thecolorapi.com/scheme/?");
  }, []);

  function updateSeedColor(event) {
    const newSeed = event.target.value;
    setColors((prevColors) => {
      return {
        ...prevColors,
        seedColor: newSeed,
      };
    });
  }

  const testColors = ["red", "yellow", "green", "blue", "purple"];
  const colorSwatches = colors.swatches.map((item) => {
    return <ColorSwatch color={item} />;
  });
  return (
    <>
      <Navbar seedColor={colors.seedColor} updateSeedColor={updateSeedColor} />
      <div className='swatch--container'>{colorSwatches}</div>
    </>
  );
}

export default App;
