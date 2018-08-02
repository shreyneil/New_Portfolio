import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './containers/Home/Home';
import App from './containers/App/App';
import AboutMe from './containers/AboutMe/AboutMe';
import Projects from './containers/Projects/Projects';
export default (
   <BrowserRouter>
    <div>
    <Route exact path="/Home/" component = {Home} />
    <Route component = {App}/>
    <Route exact path="/Home/Projects" component = {Projects}/>
    <Route exact path="/Home/AboutMe" component = {AboutMe}/>
    </div>    
   </BrowserRouter>

);