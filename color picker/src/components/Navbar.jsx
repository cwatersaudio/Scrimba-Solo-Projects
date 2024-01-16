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
          onChange={props.updateTempColor}
        />
        <Menu />

        <button
          className='scheme--button'
          onClick={() => {
            props.updateSeedColor(props.tempSeed);
          }}>
          Get Color Scheme
        </button>
      </div>
    </>
  );
}
