import React, {useState} from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { IconButton } from "@mui/material";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SimpleColorPicker from "./SimpleColorToggle";
import AppContext from "../AppContext";
import CloseIcon from '@mui/icons-material/Close';
import NoteAssistent from "./NoteAssistent";
import "./../Styles/TextEditor.css";


function Note(props){
    const [title, SetTitle] = useState(props.title)
    const [editorText, setEditorText] = useState(props.text);
    const [noteColor, SetColor] = useState(props.color);

    const {userData, setUserData} = React.useContext(AppContext);
    const colorsOptions = ["bg-red-800", "bg-green-800", "bg-blue-800", "bg-orange-800", "bg-neutral-800", "bg-transparent"]


    const ChangeColor = (color) => {
        SetColor(`${color}`)
    }

    const DestroyNote = () => {
        setUserData((prevValue) => {
            const notesCopy = [...prevValue.notes];
            for (let i = 0; i < prevValue.notes.length ; i++){
                if (prevValue.notes[i].id === props.noteId){
                    notesCopy.splice(i, 1);
                    break;
                }
            }
            return({...prevValue, notes : notesCopy})            
        })
    }

    const UpdateUserData = () => {
        setUserData((prevValue) => {
            const notesCopy = [...prevValue.notes];
            for (const note of notesCopy){
                if (note.id === props.noteId){
                    note.title = title;
                    note.text = editorText;
                    note.color = noteColor;
                    break;
                }
            }
            return({...prevValue, notes : notesCopy})
        })
        console.log("updated context")
    }

    return (
        
        <div className="flex-shrink" onBlur={() => UpdateUserData()}>
        <div className={`flex-shrink rounded-lg p-4 ${noteColor} border border-neutral-600`}>
            <div className="flex justify-end">
                <IconButton onClick={() => DestroyNote()}><CloseIcon className="text-white"/></IconButton>
            </div>
            <input className="text-3xl text-white bg-transparent w-full" value={title} onChange={(e) => SetTitle(e.target.value)}></input>
            <CKEditor
                    editor={ ClassicEditor }
                    data={editorText}
                    onChange={ ( e, editor ) => {setEditorText(editor.getData());}}
                    config={{toolbar: ["undo", "redo"]}

                    } />
            <div className="flex flex-row">
                <SimpleColorPicker setColorFunction={ChangeColor} colors={colorsOptions} />
                <NoteAssistent setEditorText={setEditorText} editorText={editorText} />
            </div>
        </div>
        </div>
    );
}

export default Note;