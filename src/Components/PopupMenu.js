import React from "react";
import ProfilePicture from "./ProfilePicture";
import AppContext from "../AppContext";



function PopupMenu(props){

    const {userData, setUserData} = React.useContext(AppContext);

    console.log(`bg-neutral-700 rounded-md absolute z-10 ${props.margin} h-${props.height} w-${props.width} ${(props.expanded ? "visible" : "invisible")}`)
    return(
        <div className={`bg-neutral-700 rounded-md absolute z-10 ${props.margin} ${props.height} ${props.width} ${(props.expanded ? "visible" : "invisible")}`}  >
            <div className="flex flex-col justify-center items-center gap-1">
                <ProfilePicture width="w-10" height="w-10" />
                <h1>{userData.username}</h1>
            </div>
        </div>
    );
}

export default PopupMenu;
