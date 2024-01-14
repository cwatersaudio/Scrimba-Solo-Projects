import React from "react";

export default function ColorSwatch(props) {
  return (
    <>
      <div className='swatch'>
        <div
          className='color--block'
          style={{ backgroundColor: props.color }}
        ></div>
        <div className='hex--code--container'>
          <div className='hex--code'>
            <span>#1234</span>
          </div>
        </div>
      </div>
    </>
  );
}
