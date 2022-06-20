import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesApp from "./NotesApp";
import Login from './Pages/Login';
import Home from './Pages/Home';
import Register from './Pages/Register';
import {AuthProvider} from './context/authContext';

function App(){

    return (
        <BrowserRouter>
        <AuthProvider>
             <Routes>
                 <Route path='/' element={ <Home/> } />
                 <Route path='/register' element={ <Register/> } />
                 <Route path='/login' element={ <Login/> } />
                 <Route path='/my-notes' element={ <NotesApp/> } />
             </Routes>
        </AuthProvider>
        </BrowserRouter>
    )
}

export default App;
