import React, { Component } from 'react'
import Header from "./Header"
import Contacts from "./SitePage/Contacts/index";
import MyGallery from "./SitePage/images/index"
import MainPage from "./SitePage/MainPage/index";
import AboutMe from "./SitePage/AboutMe/index";
import Video from "./Video/Video"
import NotFound from "./routers/NotFound"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { contents } from '../contents'
import './styles.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Header />
          <div className='main-content'>
                <Route path="/mainPage" render={() => <MainPage article={contents.MainPage}/>}/>
                <Route path="/aboutMe" render={() => <AboutMe />}/>
                <Route path="/video" render={() => <Video />}/>
                <Route path="/images" render={() => <MyGallery />}/>
                <Route path="/contacts" render={() => <Contacts />}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
