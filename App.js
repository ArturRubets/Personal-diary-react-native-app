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
      user: {}
    }

    this.goTo = this.goTo.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.getMethods = this.getMethods.bind(this);

  }

  async componentDidMount() {
    try {

      await db.initialize();

      const user = await db.fetchUser(1);

      console.log("Setting user")

      this.setState({ user })
    } catch (error) {
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

  async updateUser(user, callback){
    try{
      const rowsAffected = await db.updateUser(user)

      this.setState({user}, () => callback(rowsAffected))
    }catch(error){
      console.log(error.message)
    }
  }

  getMethods() {
    const {
      goTo,
      updateUser
    } = this;

    return {
      goTo,
      updateUser
    };
  }

  render() {
    return (
      <AppScreen
        state={this.state}
        methods={this.getMethods()} />
    )

  }
}

