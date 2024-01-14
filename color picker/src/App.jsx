import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ColorSwatch from "./components/ColorSwatch";

function App() {
  return (
    <>
      <Navbar />
      <ColorSwatch />
    </>
  )
}

export default App;
