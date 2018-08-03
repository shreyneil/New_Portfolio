import styled from 'styled-components';
import {red} from '../../Themes/variables';
import media from '../../Themes/media';

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
${media.tablet `
     
     left:0;
     top:-30px;   
`}

`;

export const ImageContainer = styled.div`
 
 

 position:relative;
 width:800px;
 margin-left:0px;
 cursor:pointer;
${media.tablet`
    
    width:60%;
    position:relative;
    margin-left:30px;
    margin-right:0px;
    display:grid;
    
 `}
 

`;

export const Title = styled.h1`

 color: ${red};
 font-weight:bold;
 margin-top:0;
`;