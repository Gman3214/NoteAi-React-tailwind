import React, { useState }from "react";
import ProfilePicture from "./ProfilePicture"
import Popover from '@mui/material/Popover';
import Button from "./Button";
import AppContext from "../AppContext";
import TextInput from "./TextInput";

function ProfileWidget (){
    const {userData, setUserData} = React.useContext(AppContext);
    const [inputText, setInputText] = useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) =>{
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () =>{
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return(
        <div className="flex justify-end items-start" >
            <ProfilePicture onClick={handleClick} />
            <Popover 
            PaperProps={{
                sx: {
                  backgroundColor: '#343434',
                }
              }}
            id={id} 
            open={open} 
            anchorEl={anchorEl} 
            onClose={handleClose} 
            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}>
                <div className=" flex flex-col justify-center items-center gap-1 p-3">
                    <ProfilePicture width="w-10" height="w-10" />
                    <h1 className="text-white text-2xl">{userData.username}</h1>
                    <TextInput setValue={setInputText} />
                    <Button text="Save" onClick={ () => {setUserData(prevValue => ({...prevValue, gptApiKey: inputText }))}} />                  
                </div>
            </Popover>
        </div>
    );
}

export default ProfileWidget;