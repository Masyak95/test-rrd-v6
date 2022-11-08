import React from 'react';

import './App.css';
import {NavLink, Outlet, Route, Routes} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>main</NavLink>---
            <NavLink to={'/login'}>login</NavLink>---
            <NavLink to={'/profile'}>profile</NavLink>---
            <NavLink to={'/profile/setting'}>setting</NavLink>---

            <Routes>
                <Route path={'/*'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile/setting'} element={
                    <div>
                        profile
                        <Outlet/>
                    </div>
                }/>
                <Route path={'*'} element={<div>profile page not found</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
            </Routes>
        </div>
    );
}

export default App;
