import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ColorSwatch from "./components/ColorSwatch";

function App() {
  const [colors, setColors] = React.useState({
    seedColor: "#000000",
    swatches: ["#000000", "#000000", "#000000", "#000000", "#000000"],
    colorMode: "monochrome",
  });

  React.useEffect(() => {
    ///scheme{?hex,rgb,hsl,cmyk,format,mode,count
    const trimmedHex = colors.seedColor.slice(1);
    fetch(
      `https://www.thecolorapi.com/scheme?hex=${trimmedHex}&format=json&mode=analogic-complement&count=5`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const colorSwatchAPI = data.colors.map((item) => {
          return item.hex.value;
        });
        console.log(colorSwatchAPI);
        updateColorScheme(colorSwatchAPI);
      });
  }, [colors.seedColor]);

  function updateSeedColor(newSeed) {
    console.log(newSeed);
    setColors((prevColors) => {
      return {
        ...prevColors,
        seedColor: newSeed,
      };
    });
  }

  function updateColorScheme(newScheme) {
    setColors((prevColors) => {
      return {
        ...prevColors,
        swatches: newScheme,
      };
    });
  }
  const testColors = ["red", "yellow", "green", "blue", "purple"];
  const colorSwatches = colors.swatches.map((item) => {
    return <ColorSwatch color={item} />; //will eventually send hex
  });
  return (
    <>
      <Navbar colors={colors} updateSeedColor={updateSeedColor} />
      <div className='swatch--container'>{colorSwatches}</div>
    </>
  );
}

export default App;
