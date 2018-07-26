import styled from 'styled-components';
import {red} from '../../Themes/variables';

export const ImageButton = styled.div`

cursor : pointer;
overflow : hidden;
display : inline-block;

& > img {

	transition :transform .3s;
}
&:hover{

	& > img{
		transform : scale(1.3);
	}
}

`

export const Index = styled.div `

  position : absolute;
  left: 0;
  bottom: 0;
  h1 {

  	font-size:4em;
  	margin:0;
  	font-weight:bold;
  	color:${red}
    transform: translateY(20);
    opacity:0.3;
  }
`;

export const ImageContainer = styled.div`
 
 width:800px;
 margin-left:auto;
 margin-right:auto;
 cursor:pointer;
`;

export const Title = styled.h1`

 color: ${red};
 font-weight:bold;
 margin-top:0;
`;