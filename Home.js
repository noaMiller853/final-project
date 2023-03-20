import { Box } from '@mui/material'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar'
import DetailStudent from '../Student/DetailStudent';
import LoginStudent from '../Student/LoginStudent';
import RegisterTeacher from '../Teacher/RegisterTeacher';
import RegisterStudent from '../Student/AddStudent';
import Login from '../Teacher/LoginTeacher';
import Manager from './Manager';
import RemoveTeacher from '../Teacher/RemoveTeacher';
import RemoveStudent from '../Student/RemoveStudent';
import TryChart from './Chart';

export default function Home(props) {
    const location = useLocation();

    const [statePage, setStatePage] = useState("initial");
    function changeState(newState) {
        setStatePage(newState);
    }
    console.log(statePage)
    return (
        <>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}
            sx={{
                '& .page':{
                    height: "78vh", margin: "15px", padding:"20px"
                }
            }}
            >
                {statePage == "initial" && <Box className="page" gridColumn="span 10"></Box>}
                {statePage == "RegisterTeacher" && <Box className="page" gridColumn="span 10"><RegisterTeacher/></Box>}
                {statePage == "LoginStudent" && <Box className="page" gridColumn="span 10"><LoginStudent changeState={changeState}/></Box>}
                {statePage == "DetailStudent" && <Box className="page" gridColumn="span 10"><DetailStudent/></Box>}
                {statePage == "RegisterStudent" && <Box className="page" gridColumn="span 10"><RegisterStudent/></Box>}
                {statePage == "Teacher" && <Box className="page" gridColumn="span 10"><Login changeState={changeState} /></Box>}
                {statePage == "Manager" && <Box className="page" gridColumn="span 10"><Manager changeState={changeState} /></Box>}
                {statePage == "RemoveTeacher" && <Box className="page" gridColumn="span 10"><RemoveTeacher></RemoveTeacher></Box>}
                {statePage == "RemoveStudent" && <Box className="page" gridColumn="span 10"><RemoveStudent></RemoveStudent></Box>}
                {statePage == "Graph" && <Box className="page" gridColumn="span 10"><TryChart></TryChart></Box>}

                <Box gridColumn="span 2"><NavBar isManager={location.state.isManager} changeState={changeState} state = {statePage}></NavBar></Box>
            </Box>
        </>
    )
}
