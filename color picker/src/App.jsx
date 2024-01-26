import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ColorSwatch from "./components/ColorSwatch";

function App() {
  const [colors, setColors] = React.useState({
    seedColor: "#31DDBB",
    swatches: ["#000000", "#000000", "#000000", "#000000", "#000000"],
    colorMode: "Triad",
  });

  React.useEffect(() => {
    const trimmedHex = colors.seedColor.slice(1);
    const trimmedMode = colors.colorMode.toLowerCase()
    fetch(
      `https://www.thecolorapi.com/scheme?hex=${trimmedHex}&format=json&mode=${trimmedMode}&count=4`
    )
      .then((res) => res.json())
      .then((data) => {
        const colorSwatchAPI = data.colors.map((item) => {
          return item.hex.value;
        });
        const newSwatch = [colors.seedColor, ...colorSwatchAPI]
        updateColors(newSwatch);
      });
  }, [colors.seedColor, colors.colorMode]);


  function updateColors(newColors) {
    setColors((prevColors) => {
      return {
        ...prevColors,
        swatches: newColors,
      };
    });
  }




  function handleChange(event) {
    const { name, value } = event.target
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

    <div className="app--canvas"
      style={{ background: `linear-gradient(0.25turn,${colors.swatches.reverse().toString()})` }}
    >
      <div className="app--container">
        <Navbar
          colors={colors}
          handleChange={handleChange}
        />
        <div className='swatch--container'>
          {colorSwatches}
        </div>
      </div>
    </div>

  );
}

export default App;



