import React, { Component } from 'react';
import {FooterContainer, FootItem, A,I} from './Footer.style'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 




class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <FootItem><A href="https://stackoverflow.com/users/8095759/shreyash-sharma" target="_blank"><I className="fa fa-stack-overflow" aria-hidden="true"></I></A></FootItem>
        <FootItem><A href="https://github.com/shreyneil" target="_blank"><I className="fa fa-github" aria-hidden="true"></I></A></FootItem>
        <FootItem><A href="https://www.facebook.com/shreyneil?ref=bookmarks" target="_blank"><I className="fa fa-facebook-official" aria-hidden="true"></I></A></FootItem>
        <FootItem><A href="https://www.instagram.com/shreyneil/?hl=en" target="_blank"><I className="fa fa-instagram" aria-hidden="true"></I></A></FootItem>
      </FooterContainer>
    );
  }
}

export default Footer;
