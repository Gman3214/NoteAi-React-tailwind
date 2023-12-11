import React from "react";

function Button (props){

    return(
        <button className={`text-white bg-neutral-500 px-2 py-1 rounded-lg ${props.extendedClassName ?? ""}`} onClick={props.onClick}>{props.text}</button>
    );
}

export default Button