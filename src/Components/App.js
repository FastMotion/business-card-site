import React, { Component } from 'react'
import Header from "./header"
import Contacts from "./sitePage/Contacts/index";
import MyGallery from "./sitePage/images/index"
import MainPage from "./sitePage/MainPage/index";
import AboutMe from "./sitePage/AboutMe/index";
import Video from "./Video/slider"
import Commentlist from './comments/commentList/index'
import NotFound from "./routers/NotFound"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { contents} from '../content'
import './styles.css'


class App extends Component {
  render() {

    return (
      <Router >
        <div className='container'>
          <Header />
          <div className='main-content'>
            <Switch>
                <Route exact path="/" render={() => <MainPage />} />
                <Route path="/aboutMe" render={() => <AboutMe/>}/>
                <Route path="/gallery/videos" render={() => <Video/>}/>
                {/*<Route path="/gallery/images" render={() => <MyGallery/>}/>*/}
                <Route path="/contacts" render={() => <Contacts/>}/>
              <Route path="/CommentList" render={() => <Commentlist />}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
