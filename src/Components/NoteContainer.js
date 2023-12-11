import React, {useState, useEffect} from "react";
import Note from "./Note";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';



function CreateNotes(note){
    return(
        <Grid xs={12} sx={{flexShrink: 1}}>
            <Note key={note.id} title={note?.title} text={note?.text} color={note?.color} noteId={note?.id} />
        </Grid>
    )
}

function ArrayToGrids(gridAmount, items) {
    const grids = [];
    for (let i = 0; i < gridAmount; i++)
        grids.push([]);

    let counter = 0;

    for (let i = 0; i < items.length; i++){
        grids[counter].push(items[i]) 
        counter = (counter == gridAmount - 1) ? 0 : counter + 1;
    }
    return grids;
}

function NoteContainer(props){
    const [gridProperties, setGridProperties] = useState({gridAmount: 3, xs: 4})
    const grids = ArrayToGrids(gridProperties.gridAmount, props.usernotes);

    useEffect(() => {

        const handleResize = () => {
            if ( window.innerWidth < 600 )
            (gridProperties.gridAmount !== 1) && setGridProperties({gridAmount: 1, xs: 12});
            else if (window.innerWidth < 1000)
            (gridProperties.gridAmount !== 2) && setGridProperties({gridAmount: 2, xs: 6});
            else if (window.innerWidth < 1300 )
            (gridProperties.gridAmount !== 3) && setGridProperties({gridAmount: 3, xs: 4});
        }

        window.addEventListener("resize", handleResize);
        
        handleResize(); 

        return () => {
            window.removeEventListener('resize', handleResize);
        };


    }, [gridProperties]);

    return(

        <Grid container spacing={3} sx={{flexGrow:1, padding: "20px"}}>
            {
                Array.from({length: grids.length}, (_, index) =>{
                    return(<Grid container spacing={2} xs={gridProperties.xs} sx={{display:"block"}}>
                        {grids[index].map(CreateNotes)}
                    </Grid>)
                })
            }
        </Grid>
    );
}



export default NoteContainer;