import React, {useState} from "react";
import { IconButton, Popover } from '@mui/material';
import ColorLensIcon from '@mui/icons-material/ColorLens';



function CreateButtons(color, setColorFunction){
    const defaultStyle = `h-3 w-3 mx-1 rounded-full border border-black ${color}`
    return (
        <button className={defaultStyle} onClick={() => setColorFunction(color)}></button>
    )
}

// possible props (setColor : state function, colors : array, pickerTitle : string)
function SimpleColorToggle(props){
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) =>{
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () =>{
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <IconButton onClick={handleClick}><ColorLensIcon className="text-white" /></IconButton>
            <Popover PaperProps={{
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
                {props.colors.map((color) => CreateButtons(color, props.setColorFunction))}
            </Popover>
            <div>
            </div>
        </div>
    );
}

export default SimpleColorToggle;