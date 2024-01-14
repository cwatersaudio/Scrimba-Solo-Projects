import React from "react";

export default function Navbar() {
  return (
    <>
      <div className='nav--container'>
        <div>Color Picker</div>
        <div id='colorDropdown'>
          <select className='select-menu-trigger'></select>
          <div class='dropdown-content'>
            <a href='#'>Link 1</a>
            <a href='#'>Link 2</a>
            <a href='#'>Link 3</a>
          </div>
        </div>

        <button className='scheme--button'>Get Color Scheme</button>
      </div>
    </>
  );
}
