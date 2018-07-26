import styled from 'styled-components';
import {black,red} from './variables';

export const A = styled.a`
color : ${black};
text-decoration:none;
position: relative; 

&:after{

	content: " ";
	position : absolute;
	left:0;
	bottom:0;
	height:10%;
	width:100%;
	background-color: ${black};
    z-index: -1;
    transition: height .1s background-color .1s; 
}

&:hover:after{

	height:40%;
	background-color:${red};
}

`
export const H1 = styled.h1`
  
   ${({align}) => align && `text-align:${align};`}

`;

export const H2 = styled.h2`
  
   ${({align}) => align && `text-align:${align};`}

`;
export const P = styled.p`
  
   ${({align}) => align && `text-align:${align};`}

`;
