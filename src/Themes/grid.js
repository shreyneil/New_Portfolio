import styled,{css} from 'styled-components';
import media from '../Themes/media';

export const Div = styled.div`
 
${({marginBottom})=> marginBottom&&css`
   
    margin-bottom: ${marginBottom}; 
  `}
${({marginTop})=> marginTop&&css`
   
    margin-top: ${marginTop}; 
  `}
${({marginLeft})=> marginLeft&&css`
   
    margin-left: ${marginLeft}; 
  `}
${({marginRight})=> marginRight&&css`
   
    margin-right: ${marginRight}; 
  `}

`;


export const Container =  styled(Div)`

padding-left:120px; 
padding-right:120px;
padding-top: 30px;

${media.tablet `
  
  padding-left:30px;
  padding-right:30px;
  padding-top:15px;
`}

${media.phone `
  
  padding-left:15px;
  padding-right:15px;
  padding-top:10px;

`}
`;

export const Relative = styled(Div)`

 position:relative;

 ${media.phone`
    
    padding-left:5px;
  `} 


`;

export const Flex = styled(Div)`

  display : flex;
  ${({column})=> column&&css`
   
    flex-direction:column; 
  `}
  
  ${({justify})=> justify&&css`
   
    justify-content: ${justify}; 
  `}
  ${({align})=> align&&css`
   
    align-content: ${align}; 
  `}



`;

