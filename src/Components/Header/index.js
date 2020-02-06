import React, {Component} from 'react'
import { NavLink} from 'react-router-dom'
import './styles.css'
import Icon from "./512x512.png"

class Header extends Component {
  render() {

    return (
      <div className="header-container">
        <div className="header-logo-container">
          <img className="header-logo" src="/images/page1.png"/>
          <div className="header-logo-label">My Pro Style</div>
        </div>
        <div className="header-navigation">
          <div className="link-container">
            <NavLink exact to="/" className="link">MainPage</NavLink>
          </div>
          <div className="link-container">
            <NavLink to="/aboutMe" className="link">AboutMe</NavLink>
          </div>
          <div className="link-container">
            <NavLink to="/gallery/videos" className="link">Video</NavLink>
          </div>
          {/*<div className="link-container">*/}
            {/*<NavLink to="/gallery/images" className="link">Images</NavLink>*/}
          {/*</div>*/}
          <div className="link-container">
            <NavLink to="/contacts" className="link">Contacts</NavLink>
          </div>
        </div>
      </div>
    )
  }
}
export default Header
