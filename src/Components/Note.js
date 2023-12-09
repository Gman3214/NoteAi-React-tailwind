import React, {useState} from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SimpleColorPicker from "./SimpleColorToggle";
import "./../Styles/TextEditor.css";


function Note(props){
    const [editorText, setEditorText] = useState('');
    const [noteColor, SetColor] = useState('')
    const noteDefaultStyle = "flex-shrink rounded-lg p-4"

    const colorsOptions = ["bg-red-800", "bg-green-800", "bg-blue-800", "bg-orange-800", "bg-neutral-800", "bg-transparent"]

    const changeColor = (color) => {
        SetColor(`${color}`)
    }

    return (
        <div className="flex-shrink" >
        <div className={`${noteDefaultStyle} ${noteColor} border border-neutral-600`}>
            <h1 className="text-3xl text-white" >{props.title}</h1>
            <CKEditor
                    editor={ ClassicEditor }
                    data="<p style='color:blue;'>What are you sinking about?</p>"
                    onChange={ ( event ) => {setEditorText(event);}}
                    config={{toolbar: ["undo", "redo"]}

                    } />
            <SimpleColorPicker setColorFunction={changeColor} colors={colorsOptions} />
        </div>
        </div>
    );
}

export default Note;