import React from "react";
import DefaultImage from "./../Images/man.png"

function ProfilePicture (props){
    return(
        <img 
        className={`${props.width ?? "w-7"} ${props.height ?? "h-7"} rounded-full justify-self-end`}
        src={props.profilePicture ?? DefaultImage}
        alt=""
        onClick={(event) => props.onClick(event)} />
    );
}

export default ProfilePicture;