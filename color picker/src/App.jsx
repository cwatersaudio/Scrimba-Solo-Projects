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
  const [tempSeed, setTempSeed] = React.useState(colors.seedColor);

  React.useEffect(() => {
    ///scheme{?hex,rgb,hsl,cmyk,format,mode,count
    const trimmedHex = colors.seedColor.slice(1);
    fetch(
      `https://www.thecolorapi.com/scheme?hex=${trimmedHex}&format=json&mode=analogic-complement&count=4`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const colorSwatchAPI = data.colors.map((item) => {
          return item.hex.value;
        });
        const newSwatch = [colors.seedColor,...colorSwatchAPI]
        updateColorScheme(newSwatch);
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

  function updateTempColor(event) {
    setTempSeed(event.target.value);
  }
  const colorSwatches = colors.swatches.map((item, index) => {
    return <ColorSwatch  color={item} key={index}/>; //will eventually send hex
  });
  return (
    <>
    <main>
      <Navbar colors={colors} updateSeedColor={updateSeedColor} updateTempColor={updateTempColor} tempSeed = {tempSeed} />
      <div className='swatch--container'>
        {colorSwatches}
      </div>
    </main>
    </>
  );
}

export default App;
