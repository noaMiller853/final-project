import '../App.css';
import React from "react";
import { useNavigate } from 'react-router-dom'
import { Box, Button } from '@mui/material';



function EntryEveryone() {
    const navigate = useNavigate()
    function navManager() {
        navigate('/Manager')
    }
    function navTeacher() {
        navigate('/Login')
    }
    return (<div>
        <pre dir='rtl' className='welcome'>ברוכים הבאים :)</pre>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1} sx={{color:"white"}}>

            <Box gridColumn="span 4" ></Box>
            <Box gridColumn="span 8" >
                <Button className='entryButton specialButtonReverse' variant="contained" onClick={navManager}>כניסת מנהל</Button>
            </Box>
            <Box gridColumn="span 4" ></Box>


            <Box gridColumn="span 8" >
                <Button  className='entryButton' onClick={navTeacher} variant="contained">כניסת מורה</Button>
            </Box>
        </Box>



    </div>)
}
export default EntryEveryone