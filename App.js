import React, { Component } from 'react';
import AppScreen from './src/components/AppScreen'


export default class App extends Component {

  constructor(props){
    super(props)

    this.state={
      currentScreen:'home',
      previousScreen:'home'
    }
  }

  render() {
    return(
      <AppScreen/>
    )

  }
}

