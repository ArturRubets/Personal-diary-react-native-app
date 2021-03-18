import React, { Component } from 'react';
import AppScreen from './src/components/AppScreen'


export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentScreen: 'home',
      previousScreen: 'home'
    }

    this.goTo = this.goTo.bind(this);
    this.getMethods = this.getMethods.bind(this); 
  }

  goTo(name, callback = () => console.log('Screen changed')) {
    this.setState((state) => {
      const { currentScreen } = state;

      return {
        currentScreen: name,
        previousScreen: currentScreen
      }
    }, callback)
  }

  getMethods(){
    const{
      goTo
    } = this;

    return {
      goTo
    };
  }

  render() {
    return (
      <AppScreen 
      state={this.state} 
      methods={this.getMethods()}/>
    )

  }
}

