import React, {useContext, useState} from "react";
import { Popover, IconButton } from "@mui/material";
import Button from './Button';
import CircularProgress from '@mui/material/CircularProgress';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AppContext from "../AppContext";
import OpenAI from "openai";



async function AskGpt(question , task, setEditorText) {
    const assistent = new OpenAI({ apiKey: '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', dangerouslyAllowBrowser: true }) 
    const completion = await assistent.chat.completions.create({
      messages: [
        { role: "system", content: task },
        { role: "user", content: question },
    ],
      model: "gpt-3.5-turbo",
    });
    console.log(completion.choices[0].message.content);
    setEditorText(completion.choices[0].message.content)
    
}

function NoteAssistent (props){
    const {userData, setUserData} = useContext(AppContext)
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) =>{
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () =>{
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return(
        <div>
            <IconButton onClick={(event) => {handleClick(event)}}><AutoFixHighIcon className="text-white"/></IconButton>
            <Popover PaperProps={{
                sx: { backgroundColor: '#343434'}
              }}
            id={id} 
            open={open} 
            anchorEl={anchorEl} 
            onClose={handleClose} 
            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
            >
                <Button extendedClassName="mx-1 my-2" 
                text="Summarize" 
                onClick={
                    () => {
                        AskGpt(props.editorText, " You are an assistent that summarizes text, wrap the answer in htmll" , props.setEditorText)
                        }}></Button>
                <Button extendedClassName="mx-1 my-2" 
                text="Rewrite" 
                onClick={
                    () => {
                        AskGpt(props.editorText, " You are an assistent that Rewrites text and makes it more orginaized and easy to read, wrap the answer in html" , props.setEditorText)
                        }}></Button>
                <Button extendedClassName="mx-1 my-2" 
                text="Expand" 
                onClick={
                    () => {
                        AskGpt(props.editorText, " You are an assistent that Expands text According to the subject that is written, wrap the answer in html" , props.setEditorText)
                        }}></Button>
            </Popover>
        </div>
    )
}


export default NoteAssistent