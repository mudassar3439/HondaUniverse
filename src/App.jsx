import React from "react";
import "./index.css"
import Home from './Home';
import Ap from './Subsite/Honda-BRV/Ap';
import About from './About';
import AboutBRV from "./Subsite/Honda-BRV/AboutBRV";
import Login from "./Login";
import Video from "./Subsite/Honda-BRV/Video";
import Images from "./Subsite/Honda-BRV/Images";
import { Routes,Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const App = () => {
  return(
    <>
      
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/HondaUniverse' exact element={<Home/>}/>
      <Route path='/Ap/*' exact element={<Ap/>}/>
      <Route path='/About' exact element={<About/>}/>
      <Route path='/Login' exact element={<Login/>}/>
      <Route path='/Images' exact element={<Images/>}/>
      <Route path='/Video' exact element={<Video/>}/>
      <Route path='/Honda BRV About' exact element={<AboutBRV/>}/>
    </Routes>
    </>
  )
}

export default App;