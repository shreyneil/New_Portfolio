import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './containers/Home/Home';
import App from './containers/App/App';
import AboutMe from './containers/AboutMe/AboutMe';
import Projects from './containers/Projects/Projects';
export default (
   <BrowserRouter>
    <div>
    <Route exact path="/" component = {Home} />
    <Route component = {App}/>
    <Route path="/Projects" component = {Projects}/>
    <Route path="/AboutMe" component = {AboutMe}/>
    </div>    
   </BrowserRouter>

);