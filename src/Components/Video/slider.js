import React from 'react';
import {Zoom} from 'react-slideshow-image';
import photo from './imagesVideo/Снимок1.PNG';
import './style.css'


class SimpleSlider extends React.Component {

  state = {
    duration: 500000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: true,
    scale: 0.4
  };

  render() {
    return (
      <div className='slider'>
        <div className="slider-container">
          <Zoom {...this.state}>
            <div className='videoWrapper'>
              <video
                className='video-item'
                poster={photo}
                controls={true}
                playsInline={true}
                width={'840px'}
              >
                <source src="/videos/DSC_0020.MOV" type={'video/mp4'}/>
              </video>

            </div>
            <div className='videoWrapper'>
              <video
                className='video-item'
                poster={photo}
                controls={true}
                playsInline={true}
                width={'840px'}
              >
                <source src="/videos/DSC_0020.MOV" type={'video/mp4'}/>
              </video>
            </div>
          </Zoom>
        </div>
      </div>
    )
  }
}


export default SimpleSlider


