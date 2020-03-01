import React, {Component} from 'react'
import * as THREE from "three/src/Three";
import Globe from "vanta/dist/vanta.globe.min";
import {connect} from "react-redux";
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
    console.log ('4',article)
    return (
      <div className="containerPage" ref={this.vantaRef}>
        <div className="MainPage_text">
          <h1 className="title">{article[0].user}</h1>
          <section className="section_text">{article[0].text}</section>
        </div>
      </div>
    )
  }
}

export default connect((state)=>({
    article:state.mainpage
}))(MainPage)