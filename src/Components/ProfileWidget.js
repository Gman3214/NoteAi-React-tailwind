import React, { useState }from "react";
import ProfilePicture from "./ProfilePicture"
import Popover from '@mui/material/Popover';
import AppContext from "../AppContext";
import Login from './Login'
import Register from "./Register";
import Profile from "./Profile";

function ProfileWidget (){
    const {userData} = React.useContext(AppContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [register, setRegister] = useState(false);

    const handlePopoverClick = (event) =>{
        setAnchorEl(event.currentTarget)
    }

    const handlePopoverClose = () =>{
        setAnchorEl(null)
    }

    const handleRegisterToggle = () => {
        setRegister(!register);
    }

    const showMenu = () => {
        if (userData.username !== ""){
            return (
                <Profile />
            );
        }else{
            return (
                <div className="text-center">
                    {register ? <Register /> : <Login />}
                    <button className="text-white text-sm mb-2 px-2 py-1 rounded-lg" onClick={handleRegisterToggle}>
                        {register ? "Go to Login" : "Go to Register"}
                    </button>

                </div>
                );
            
        }
    }

    let open = Boolean(anchorEl);
    let id = open ? 'simple-popover' : undefined;

    return(
        <div className="flex justify-end items-start" >
            <ProfilePicture onClick={handlePopoverClick} />
            <Popover 
            PaperProps={{sx: { backgroundColor: '#343434'} }}
            id={id} 
            open={open} 
            anchorEl={anchorEl} 
            onClose={handlePopoverClose} 
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
                        >
                {showMenu()}

            </Popover>
        </div>
    );
}

export default ProfileWidget;