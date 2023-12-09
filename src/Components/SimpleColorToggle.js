import React from "react";

function CreateButtons(color, setColorFunction){
    const defaultStyle = `h-3 w-3 ml-1 rounded-full border border-black ${color}`
    return (
        <button className={defaultStyle} onClick={() => setColorFunction(color)}></button>
    )
}

// possible props (setColor : state function, colors : array, pickerTitle : string)
function SimpleColorToggle(props){
    return (
        <div>
            {props.colors.map((color) => CreateButtons(color, props.setColorFunction))}
        </div>
    );
}


export default SimpleColorToggle;