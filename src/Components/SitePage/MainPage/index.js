import React, {Component} from 'react'
import * as THREE from "three/src/Three";
import Globe from "vanta/dist/vanta.globe.min";
import './style.css'

class MainPage extends Component {

  constructor() {
    super();
    this.vantaRef = React.createRef()
  }

  componentDidMount() {
    this.vantaEffect = Globe({
      el: this.vantaRef.current,
      THREE: THREE
    })
  }

  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }

  }

  render() {
    const {article} = this.props;

    return (
      <div className="containerPage" ref={this.vantaRef}>

        <div className="MainPage_text">
          <h1 className="title">{article[0].title}</h1>
          <section className="section_text">{article[0].text}</section>
        </div>
      </div>
    )
  }
}

export default MainPage