import styled from 'styled-components';
// eslint-disable-next-line
import {Flex, Div} from '../../Themes/grid';
import {blue, yellow} from '../../Themes/variables';
// eslint-disable-next-line
import { BrowserRouter, Route, Link } from 'react-router-dom'

export const FooterContainer = styled(Flex)`
  
   position: fixed;
   transform : rotate(-90deg);
   bottom:8.8em; 
   left:-2em;
`;

export const A = styled.a`
  color:black;
  text-decoration:none;
   &:hover{

    color:${blue};
  }
`;
export const I = styled.i`
  
   transform: rotate(90deg);
   padding-right:40px;
  }
`;

export const FootItem = styled(Div)`
  
   position:relative;
   margin-right:30px;
   font-size:0.7em;
   cursor:pointer;
   color:black;
    
   &:hover{

    color:${blue};
     
     &:after{

      content: ' ';
      position:absolute;
        bottom:0;
        left:0;
        width:100%;
        height:100%;
        z-index :-1;
        transform: scale(1.3,1.5);
     }
   }

`