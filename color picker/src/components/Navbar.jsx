import React from "react";
import Menu from "./Menu";

export default function Navbar(props) {


  return (
    <>
      <div className='nav--container'>
        <input
          type='color'
          id='colorPicker'
          name='seedColor'
          // value={props.colors.seedColor}
          onChange={props.handleChange}
        />
        <Menu 
        updateColorMode = {props.updateColorMode}
        colorMode = {props.colors.colorMode}/>

        <button
          className='mode--button'
          onClick={() => {
            props.updateSeedColor(props.tempSeed);
          }}>
          Get Color Mode
        </button>
      </div>
    </>
  );
}
