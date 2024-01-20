import React from "react";

export default function ColorSwatch(props) {

const [copyBubbleText, setCopyBubbleText] = React.useState("Copy to clipboard?")

function copyText() {
    navigator.clipboard.writeText(props.color)
    setCopyBubbleText("Copied!")
    setTimeout((resetText),1500)
  }


  function resetText() {
      setCopyBubbleText("Copy to clipboard?")
  }
  return (
    <>
      <div className='swatch'>
        <div
          className='color--block'
          style={{ backgroundColor: props.color }}
          
        >
           <div className="copied--bubble"
           onClick={copyText}
           >{copyBubbleText}</div>
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
