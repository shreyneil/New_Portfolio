import React, { Component } from 'react';
import {NavigationContainer, NavItem, A} from './NavigationBar.style'

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavItem><A href="/Home/">Home</A></NavItem>
        <NavItem><A href="/Home/Projects">Projects</A></NavItem>
        <NavItem><A href="/Home/AboutMe">About Me</A></NavItem>
        <NavItem><A href="https://docs.google.com/document/d/e/2PACX-1vSX_EU1FayfwsjFRcVgMRohhEsWvxtZ99vfFqCANUndKNvc6GdVtmxlJ5DhNy0GFHjJF2YgAuZzbZsL/pub">Resume</A></NavItem>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;
