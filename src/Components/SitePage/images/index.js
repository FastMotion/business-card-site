import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css"

class MyGallery extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className={'images-gallery-wrapper'}>
        <h2> Single Item</h2>
        <Slider {...settings}>

          <div className={'images-item'}>
            <h3><img/></h3>
          </div>
          <div className={'images-item'} >
            <h3>2</h3>
          </div>
          <div className={'images-item'}>
            <h3>3</h3>
          </div >
          <div className={'images-item'}>
            <h3>4</h3>
          </div>
          <div className={'images-item'}>
            <h3>5</h3>
          </div>
          <div className={'images-item'}>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

// export default MyGallery