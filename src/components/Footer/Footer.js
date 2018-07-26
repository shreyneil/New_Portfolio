import React, { Component } from 'react';
import {FooterContainer, FootItem, A} from './Footer.style'

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <FootItem><A
          target="_blank"
          href="https://www.facebook.com/sonchu1996">
          </A><i className="fa fa-facebook"></i>Facebook</FootItem>
        <FootItem><A href="">Instagram</A></FootItem>
        <FootItem><A href="">Github</A></FootItem>
        <FootItem><A href="">StackOverflow</A></FootItem>
      </FooterContainer>
    );
  }
}

export default Footer;
