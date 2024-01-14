import React from "react";

export default function ColorSwatch(props) {
  return (
    <>
      <div className='color--block'>
        <div className='hex--code'>
          <span className='hex--code'>{props.hex}</span>
        </div>
      </div>
    </>
  );
}
