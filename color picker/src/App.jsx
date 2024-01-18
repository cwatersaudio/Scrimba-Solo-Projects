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
      `https://www.thecolorapi.com/scheme?hex=${trimmedHex}&format=json&mode=${colors.colorMode}&count=4`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const colorSwatchAPI = data.colors.map((item) => {
          return item.hex.value;
        });
        const newSwatch = [colors.seedColor,...colorSwatchAPI]
        updateColors(newSwatch);
      });
  }, [colors.seedColor, colors.colorMode]);

  function updateSeedColor(newSeed) {
    console.log(newSeed);
    setColors((prevColors) => {
      return {
        ...prevColors,
        seedColor: newSeed,
      };
    });
  }

  function updateColors(newColors) {
    setColors((prevColors) => {
      return {
        ...prevColors,
        swatches: newColors,
      };
    });
  }

  function updateColorMode(newMode) {
    setColors(prevColors => {
      return {
        ...prevColors,
        colorMode: newMode
      }
    })

  }

  function updateTempColor(event) {
    setTempSeed(event.target.value);
  }
  const colorSwatches = colors.swatches.map((item, index) => {
    return <ColorSwatch  
            color={item} 
            key={index}
            />;
  });
  return (
    <>
    <main>
      <Navbar 
      colors={colors} 
      updateSeedColor={updateSeedColor} //this could be simplified into one modifying function probably
      updateTempColor={updateTempColor} 
      tempSeed = {tempSeed} 
      updateColorMode= {updateColorMode}
      />
      <div className='swatch--container'>
        {colorSwatches}
      </div>
    </main>
    </>
  );
}

export default App;



//To DO:

// - hover styles for buttons
// -make dropdown menu trigger prettier (see Figma)
// - add little arrow to trigger
// -center hex codes
// - import Inter
// -Check alignment of dropdown
// - add animation to dropdown 
// - add 'copied' message to colors