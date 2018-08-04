 import {css} from 'styled-components'


 const sizes  = {
  
    phone:376,
    phone2:667,
    tablet:768,
    Desktop:1024,
    Giant:1170

 };




 const media  = Object.keys(sizes).reduce((finalMedia,size)=>{
 
   return {
    
     ...finalMedia,
     [size]: function(...args){

      return css`
    @media(max-width:${sizes[size]}px){

    	${css(...args)}
    }
  
 	`

     }  

   };

 },{});

/* function phone(...args){

 	return css`
    @media(max-width:${sizes.phone}px){

    	${css(...args)}
    }
  
 	`
 }
function tablet(...args){

 	return css`
    @media(max-width:${sizes.tablet}px){

    	${css(...args)}
    }
  
 	`
 }

function Desktop(...args){

 	return css`
    @media(max-width:${sizes.Desktop}px){

    	${css(...args)}
    }
  
 	`
 }

function Giant(...args){

 	return css`
    @media(max-width:${sizes.Giant}px){

    	${css(...args)}
    }
  
 	`
 }

 const media = {

 	phone,
 	tablet,
 	Desktop,
 	Giant
 };
*/


 export default media;