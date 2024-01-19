import React from "react";

export default function ColorSwatch(props) {

  function copyText() {
    navigator.clipboard.writeText(props.color)

  }
  return (
    <>
      <div className='swatch'>
        <div
          className='color--block'
          style={{ backgroundColor: props.color }}
          onClick={copyText}
        >
           <div className="copied--bubble">Copied to Clipboard!</div>
        </div>
        <div className='hex--code--container'>
          <div className='hex--code'>
            <span>{props.color}</span>
          </div>
        </div>
       
      </div>
    </>
  );
}
