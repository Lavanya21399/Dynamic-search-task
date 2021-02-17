import React, { Component } from 'react'
import Search from './components/Search'
import Title from './components/Title'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <div>
        
         <Search/>
      <Title/>
      
      </div>
    )
  }
}

export default App
