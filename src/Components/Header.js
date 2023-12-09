import React from "react";
import ProfileWidget from "./ProfileWidget";

function Header() {
    return(
        <header className="h-20 w-full flex bg-neutral-800 items-center">
            <div className="flex items-center justify-between w-11/12 m-auto">
                <h1 className="font-sans p-5 text-xl font-semibold text-white">NoteAi</h1>
                <ProfileWidget />
            </div>
            
        </header>
    );
}

export default Header;