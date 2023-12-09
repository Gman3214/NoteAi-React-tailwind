import React, { useState }from "react";
import ProfilePicture from "./ProfilePicture"
import PopupMenu from "./PopupMenu";

function ProfileWidget (){
    const [expanded, setExpanded] = useState(false);

    return(
        <div className="flex justify-end items-start" >
            <ProfilePicture onClick={() => { setExpanded(expanded ? false : true)}} />
            <PopupMenu width="w-52" height="h-40" margin="mt-8" expanded={expanded} menuItems={[{name: "profile", action: null},{name: "logout", action: null}]} />
        </div>
    );
}

export default ProfileWidget;