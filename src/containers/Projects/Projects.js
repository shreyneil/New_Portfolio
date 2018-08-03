import React, { Component } from 'react';
// eslint-disable-next-line
import Zoomy from 'react-zoomy';
// eslint-disable-next-line
import PropTypes from 'prop-types'; 
import CssToMatrix from'css-to-matrix';
import {ImageButton,Index,ImageContainer,Title} from './Project.style';
import {Relative, Container, Flex} from '../../Themes/grid';
import {A} from '../../Themes/types';
import ParallaxImage from 'react-image-parallax';
import DistortedImage from 'react-distortion-image';
//import { hot } from 'react-hot-loader'
//import logo from './logo.svg';
//import './App.css';

class Projects extends Component {
  render() {
    return (
      <Container>
        <Title>Some of My works</Title>
        <Relative marginBottom="50px" marginTop="100px">
        <Index>
         <h1>01</h1>
        </Index>
        <h1><A href="https://github.com/shreyneil/Solar_System">Solar System</A> && npm install --save <A href="https://www.npmjs.com/package/react-zoomy">react-zoomy</A></h1>
        </Relative> 
        <Flex marginBottom = "5em">
        <Zoomy
  imageUrl={require('../../Assets/solar_system.png')}
  renderThumbnail={({ showImage }) => <ImageButton onClick={showImage}>
<img src={require('../../Assets/solar_system_Thumbnail.png')} alt="Solar System"/>
</ImageButton>
}
  scale={[1.1, 1.1]}
  imageProps={{
    style: {
      width: '100vw',
      height: 'auto'
    }
  }}
/>
</Flex>
<Relative marginBottom="50px">
        <Index>
         <h1>02</h1>
        </Index>
        <h1><A href="https://github.com/shreyneil/The-Matrix">Matrix Rain</A> && npm install --save <A href="https://www.npmjs.com/package/react-image-parallax"> react-image-parallax</A></h1>
        </Relative> 
        <ImageContainer>
        <ParallaxImage scale={1/3}>
         {({y}, onImageLoad) =>
      <img
        style={{
          transform: new CssToMatrix()
            .scale(1.5, 1.5)
            .translate(0, y)
            .getMatrixCSS()
            // I use "css-to-matrix" module to enhance animation performance.
            // You can use normal css inline-style as you like
        }}
        onLoad={onImageLoad}
        src = {require("../../Assets/matrix_rain.png")}
        alt="thumbnail"/>
    }
    </ParallaxImage>
    </ImageContainer>
    <Relative marginBottom="50px" marginTop="100px">
        <Index>
         <h1>03</h1>
        </Index>
        <h1><A href="https://github.com/shreyneil?tab=repositories">More from the lot</A> && npm install --save <A href="https://github.com/chuson1996/react-distortion-image">react-distortion-image</A></h1>
        </Relative>
        <ImageContainer>
          <DistortedImage
                        style={{ width: 600, height: 400, maxWidth: 'calc(100vw - 80px)',
                          maxHeight: 'calc(66vw - 80px)' }}
                        image1={require('../../Assets/osself.png')}
                        image2={require('../../Assets/bbg.png')}
                        displacementImage={require('../../Assets/App_back.png')}/>
    </ImageContainer>
    </Container>
    );
  }
}

export default Projects;


