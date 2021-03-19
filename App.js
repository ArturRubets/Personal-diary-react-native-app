import React, { Component } from 'react';
import AppScreen from './src/components/AppScreen'
import DiaryDatabase from './src/DiaryDatabase'

const db = new DiaryDatabase('my-diary');

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentScreen: 'home',
      previousScreen: 'home',
      user:{}
    }

    this.goTo = this.goTo.bind(this);
    this.getMethods = this.getMethods.bind(this); 
    
  }

  async componentDidMount(){
    try{
       
      await db.initialize();
      
      const user = await db.fetchUser(1);
    console.log("Setting user")

      this.setState({user})
    }catch(error){
      console.log(error.message)
    }
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

