import styled from 'styled-components';
import {yellow} from '../../Themes/variables';

export const Background  = styled.div`
 
 position :fixed;
 width: 100%;
 height :100%;
 background-image: url(${require('../../Assets/App_back.png')})
 background-color: ${yellow};
 z-index : -99;
 background-size :cover;
 background-repeat: no-repeat;
 background-position: center;
 opacity:0.2;	

`;