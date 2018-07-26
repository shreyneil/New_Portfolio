import styled from 'styled-components';
import {red} from '../../Themes/variables';
import {Relative} from '../../Themes/grid';

export const Title = styled.h1`
 
  margin-top:0;
  color:${red};

`; 

export const VideoContainer = styled(Relative)`
 
   width : 70%;
   flex-shrink:0;
   flex-grow:0;

`;