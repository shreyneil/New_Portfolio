import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
 // eslint-disable-next-line
import PropTypes from 'prop-types';
import {Background} from './App.styles'
import NavigationBar from '../../components/NavigationBar/NavigationBar';	
import Footer from '../../components/Footer/Footer';	
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Background/>
        <NavigationBar/>
        <Footer/>
        {this.props.children}
      </div>
    );
  }
}

export default hot (module)(App);
