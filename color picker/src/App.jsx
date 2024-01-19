import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ColorSwatch from "./components/ColorSwatch";

function App() {
  const [colors, setColors] = React.useState({
    seedColor: "#31DDBB",
    swatches: ["#000000", "#000000", "#000000", "#000000", "#000000"],
    colorMode: "triad",
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

  // function updateSeedColor(event) {
  //   const newSeed = event.target.value
  //   setColors((prevColors) => {
  //     return {
  //       ...prevColors,
  //       seedColor: newSeed,
  //     };
  //   });
  // }

  function updateColors(newColors) {
    setColors((prevColors) => {
      return {
        ...prevColors,
        swatches: newColors,
      };
    });
  }

  // function updateColorMode(newMode) {
  //   setColors(prevColors => {
  //     return {
  //       ...prevColors,
  //       colorMode: newMode
  //     }
  //   })

  // }



  function handleChange(event) {
   const {name, value} = event.target
   console.log(name,value)
    setColors(prevColors => {
      return {
        ...prevColors,
        [name]: value
      }
    })
  }

  const colorSwatches = colors.swatches.map((item, index) => {
    return <ColorSwatch  
            color={item} 
            key={index}
            />;
  });

  return (
    <>
      <div className="app--canvas"
        style={{background: `linear-gradient(0.25turn,${colors.swatches.toString()})`}}
      >
        <div className="app--container">
          <Navbar 
          colors={colors} 
          // updateSeedColor={updateSeedColor} //this could be simplified into one modifying function probably
          tempSeed = {tempSeed} 
          // updateColorMode= {updateColorMode}
          handleChange = {handleChange}
          />
          <div className='swatch--container'>
            {colorSwatches}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;



//To DO:

// - hover styles for buttons
// -make dropdown menu trigger prettier (see Figma)
// - add little arrow to trigger
// -center hex codes
// -Check alignment of dropdown
// - add animation to dropdown 
// - add 'copied' message to colors
// - box shadow for app