import React, {Component} from 'react'
import { NavLink} from 'react-router-dom'
import './styles.css'
import Icon from "./512x512.png"

class Header extends Component {
  render() {

    return (
      <div className="header-container">
        <div className="header-logo-container">
          <img className="header-logo" src="images/2.jpg"/>
          <div className="header-logo-label">My Pro Style</div>
        </div>
        <div className="header-navigation">
          <div className="link-container">
            <NavLink exact to="/mainPage" className="link">MainPage</NavLink>
          </div>
          <div className="link-container">
            <NavLink exact to="/aboutMe" className="link">AboutMe</NavLink>
          </div>
          <div className="link-container">
            <NavLink exact to="/video" className="link">Video</NavLink>
          </div>
          <div className="link-container">
            <NavLink exact to="/images" className="link">Images</NavLink>
          </div>
          <div className="link-container">
            <NavLink exact to="/contacts" className="link">Contacts</NavLink>
          </div>
        </div>
      </div>
    )
  }
}
export default Header
