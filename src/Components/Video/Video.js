import React, {Component} from 'react'
import Slider from './slider'
import './style.css'

class MyVideo extends Component {
  render() {
    return (
      <div className='video-main-container'>
        <Slider/>
      </div>
    )
  }
}

export default MyVideo