import React from "react";

export default function Accolade (props) {
    function handleClick (event){
        props.addLike(props.id)
    }
    return(
        <div className="accolade--container">
            <p className="bold">To: {props.to}</p>
            <p>{props.accolade}</p>
            <p className="bold">From: {props.from}</p>
            <button
            onClick={handleClick}
            className="bold"
            //add name field


            >{`💜 ${props.likes}`}</button>

        </div>
    )

}