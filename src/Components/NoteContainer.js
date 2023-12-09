import React, {useState} from "react";
import Note from "./Note";


function CreateNotes(note){
    return(
        <Note key={note.id} title={note?.title} text={note?.text} />
    )
}

function NoteContainer(props){
    return(
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 p-4 ">
            {props.usernotes.map(CreateNotes)}
        </div>
        
    );
}

export default NoteContainer;