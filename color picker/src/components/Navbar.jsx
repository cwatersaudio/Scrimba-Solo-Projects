import React from "react";

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
        <div id='colorDropdown' className='dropdown'>
          //convert to menu with 8 options
          <select className='select-menu-trigger dropbtn'> </select>
          <div className='color-options'>
            <a href='#' className='dropdown-content'>
              Link 1
            </a>
            <a href='#' className='dropdown-content'>
              Link 2
            </a>
            <a href='#' className='dropdown-content'>
              Link 3
            </a>
          </div>
        </div>

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
