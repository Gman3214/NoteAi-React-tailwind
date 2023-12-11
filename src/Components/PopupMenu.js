import React, { useState } from "react";
import ProfilePicture from "./ProfilePicture";
import AppContext from "../AppContext";
import TextInput from "./TextInput";
import Button from "./Button";




function PopupMenu(props){

    const {userData, setUserData} = React.useContext(AppContext);
    const [inputText, setInputText] = useState("");

    return(
        <div className={`bg-neutral-700 p-3 rounded-md absolute z-10 ${props.margin ?? ""} ${props.height ?? ""} ${props.width ?? "w-15"} ${(props.expanded ? "visible" : "invisible")}`}  >
            <div className="flex flex-col justify-center items-center gap-1">
                <ProfilePicture width="w-10" height="w-10" />
                <h1 className="text-white text-2xl">{userData.username}</h1>
                <TextInput setValue={setInputText} />
                <Button text="Save" onClick={ () => {setUserData(prevValue => ({...prevValue, gptApiKey: inputText }))}} />
                
            </div>
        </div>
    );
}

export default PopupMenu;
