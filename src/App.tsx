import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import {UsersPage} from "./pages/UsersPage";
import {UserDetails} from "./pages/UserDetails";


function App() {
    return (
       <Routes>
           <Route path={'/'} element={<h1>hello</h1>}/>
           <Route path={'/users'} element={<UsersPage/>}/>
           <Route path={'/users/:id'} element={<UserDetails/>}/>
           <Route path={'/posts'} element={<h1>posts</h1>}/>
       </Routes>
    );
}

export default App;
