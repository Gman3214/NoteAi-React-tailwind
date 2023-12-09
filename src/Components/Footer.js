import React from "react";

function GetYear(){
    const currentDate = new Date();
    return currentDate.getFullYear() 
}

function Footer() {
    return(
        <footer className="h-10 w-screen bg-neutral-800 flex items-center justify-center">
            <h1 className="p-2 text-white text-xs">Copyright {GetYear()}</h1>
        </footer>
    );
}

export default Footer;