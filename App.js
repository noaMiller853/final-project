import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EntryEveryone from "./components/EntryEveryone";
import Manager from "./components/Manager";
import DetailStudent from "./Student/DetailStudent";
import LoginStudent from "./Student/LoginStudent";
import Login from "./Teacher/LoginTeacher";
import RegisterTeacher from "./Teacher/RegisterTeacher";
import RegisterStudent from './Student/AddStudent';
import Home from "./components/Home";
import TryChart from "./components/Chart";

function TheRealApp() {

    return (<>
        <h1  id="txt">My - Behavior</h1>
        <div className="hr"></div>
        <BrowserRouter>
            <Routes>
                <Route path="" element={<EntryEveryone />} />
                {/* <Route path="EntryEveryone" element={<EntryEveryone />} ></Route> */}
                <Route path="DetailStudent" element={<DetailStudent />}></Route>
                <Route path="Manager" element={<Manager />}></Route>
                <Route path="LoginStudent" element={<LoginStudent />}></Route>
                <Route path="RegisterTeacher" element={<RegisterTeacher />}></Route>
                <Route path="RegisterStudent" element={<RegisterStudent />}></Route>
                <Route path="Login" element={<Login />}></Route>
                <Route path="Home" element={<Home />} />
                <Route path="Graph" element={<TryChart />} />
            </Routes>
        </BrowserRouter>
    </>
    )


}

export default TheRealApp;

