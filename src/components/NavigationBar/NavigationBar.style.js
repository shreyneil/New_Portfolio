import styled from 'styled-components';
// eslint-disable-next-line
import {Flex, Div} from '../../Themes/grid';
import media from '../../Themes/media';
import {blue, yellow} from '../../Themes/variables';
// eslint-disable-next-line
import { BrowserRouter, Route, Link } from 'react-router-dom'

export const NavigationContainer = styled(Flex)`
  
   position: fixed;
   right: 5em;
   top:1.8em;
   ${media.tablet `
     
     position:absolute;
     right:2.6em;
     top: 1.2em;
`}

`;

export const A = styled.a`
  color:black;
  text-decoration:none;
   &:hover{

   	color:${blue};
  }
`;
export const NavItem = styled(Div)`
  
   margin-right:30px;
   font-size:1.5em;
   cursor:pointer;
   position:relative;
   color:black;

    ${media.tablet `
     
     font-size: 1em;
     margin-right:15px;
     
`}
   
   &:hover{

   	color:${blue};
     
     &:after{

     	content: ' ';
     	position:absolute;
        bottom:0;
        left:0;
        width:100%;
        height:100%;
        background-color:${yellow};
        z-index :-1;
        transform: scale(1.3,1.5);
     }
   }

`