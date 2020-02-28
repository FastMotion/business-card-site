import React from 'react'
import App from './Components/App'
import store from './store/index'
import {Provider} from 'react-redux'
export default function Root() {
      return (
        <Provider store ={store}>
           <App/>
        </Provider>
      )
}