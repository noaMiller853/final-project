import React from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {PersonAdd} from '@mui/icons-material';
import {SignalCellularAlt} from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import '../index.css';

function NavBar(props) {

  // useEffect(() => {
  //   axios.get("https: localhost:44351/api/Teachers").then(res => {
  //     console.log('result', res.data)

  //     alert("i am into useEffect")
  //   })
  // }, [])
  const navigate = useNavigate()

  return (
    <div dir="rtl">
      <Box sx={{
        '& .ListItemButton':{
          display: "grid", 
          gridAutoFlow: "column", 
          marginRight: '10px',
        },
        '& .ListItemButton:hover ': {
          bgcolor: 'rgb(245 218 255 / 4%)',
        },
        '& .css-h4y409-MuiList-root': {
          width: '330px',
        },
        direction: 'rtl',
        width: '100%',
        maxWidth: 360,
        color: "black",
        '& .icon': {
          color: "#ba7cd4 !important"
        },
        '& .ListItemIcon': {
          minWidth:"45px",
        }
      }}>
        <nav aria-label="main mailbox folders">
          <List>

            <ListItem disablePadding >
              <ListItemButton className="ListItemButton"  onClick={() => { navigate('/') }}>
                <ListItemIcon className="ListItemIcon">
                  <LoginIcon className="icon" />
                </ListItemIcon>
                <ListItemText className="listItemText" sx={{ color: '#ba7cd4' }} primary="כניסה למערכת" />
              </ListItemButton>

            </ListItem>
            <ListItem disablePadding className="ListItem">
              <ListItemButton className="ListItemButton" sx={{bgcolor: props.state == "Manager"? 'rgb(245 218 255 / 4%)':""}}  onClick={() => { props.changeState('Manager') }}>
                <ListItemIcon className="ListItemIcon">
                  <LockPersonIcon className="icon"/>
                </ListItemIcon>
                <ListItemText className="listItemText" primary="כניסת מנהל" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding className="ListItem">
              <ListItemButton className="ListItemButton" sx={{bgcolor: props.state == "Teacher"? 'rgb(245 218 255 / 4%)':""}}  onClick={() => { props.changeState('Teacher') }}>
                <ListItemIcon className="ListItemIcon">
                  <AccountCircleIcon className="icon"/>
                </ListItemIcon>
                <ListItemText className="listItemText" primary="כניסת מורה" />
              </ListItemButton>
            </ListItem>
            { props.isManager && <ListItem disablePadding className="ListItem">
              <ListItemButton className="ListItemButton" sx={{bgcolor: props.state == "RegisterTeacher"? 'rgb(245 218 255 / 4%)':""}}  onClick={() => { props.changeState('RegisterTeacher') }}>
                <ListItemIcon className="ListItemIcon">
                  <PersonAddAltIcon className="icon"/>
                </ListItemIcon>
                <ListItemText className="listItemText" primary="הרשמת מורה" />
              </ListItemButton>
            </ListItem>}
            { props.isManager && <ListItem disablePadding className="ListItem">
              <ListItemButton className="ListItemButton" sx={{bgcolor: props.state == "RemoveTeacher"? 'rgb(245 218 255 / 4%)':""}} onClick={() => { props.changeState('RemoveTeacher') }}>
                <ListItemIcon className="ListItemIcon">
                  <PersonRemoveOutlinedIcon className="icon"/>
                </ListItemIcon>
                <ListItemText className="listItemText" primary="הסרת מורה" />
              </ListItemButton>
            </ListItem>}
            
            { props.isManager && <ListItem disablePadding className="ListItem">
              <ListItemButton className="ListItemButton"sx={{bgcolor: props.state == "RegisterStudent"? 'rgb(245 218 255 / 4%)':""}} onClick={() => { props.changeState('RegisterStudent') }}>
                <ListItemIcon className="ListItemIcon">
                  <PersonAdd className="icon"/>
                </ListItemIcon>
                <ListItemText className="listItemText" primary="הרשמת תלמיד" />
              </ListItemButton>
            </ListItem>}
            { props.isManager && <ListItem disablePadding className="ListItem">
              <ListItemButton className="ListItemButton" sx={{bgcolor: props.state == "RemoveStudent"? 'rgb(245 218 255 / 4%)':""}} onClick={() => { props.changeState('RemoveStudent') }}>
                <ListItemIcon className="ListItemIcon">
                  <PersonAddDisabledIcon className="icon"/>
                </ListItemIcon>
                <ListItemText className="listItemText" primary="הסרת תלמיד" />
              </ListItemButton>
            </ListItem>}
            <ListItem disablePadding className="ListItem">
              <ListItemButton className="ListItemButton" sx={{bgcolor: props.state == "LoginStudent"? 'rgb(245 218 255 / 4%)':""}} onClick={() => { props.changeState('LoginStudent') }}>
                <ListItemIcon className="ListItemIcon">
                  <GroupsIcon className="icon"/>
                </ListItemIcon>
                <ListItemText className="listItemText" primary="צפייה בנתוני תלמיד" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding className="ListItem">
              <ListItemButton className="ListItemButton"  sx={{bgcolor: props.state == "DetailStudent"? 'rgb(245 218 255 / 4%)':""}} onClick={() => { props.changeState('DetailStudent') }}>
                <ListItemIcon className="ListItemIcon">
                  <AddReactionIcon className="icon"/>
                </ListItemIcon>
                <ListItemText className="listItemText" primary="הכנסת פרטים על תלמיד" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding className="ListItem">
              <ListItemButton className="ListItemButton" sx={{bgcolor: props.state == "Graph"? 'rgb(245 218 255 / 4%)':""}} onClick={() => { props.changeState('Graph') }}>
                <ListItemIcon className="ListItemIcon">
                  <SignalCellularAlt className="icon"/>
                </ListItemIcon>
                <ListItemText className="listItemText" primary="גרף על התנהגות התלמידים" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </div>
  )


}

export default NavBar;








