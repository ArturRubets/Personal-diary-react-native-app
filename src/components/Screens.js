import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import Account from './account/Account'

const Container = View;
const Home = View;
const Create = View;
const Browse = View;

import * as Font from '../Font'
import * as Colors from '../Colors'


const show = {flex:1}
const hide ={flex:0, height:0, opacity:0}


const Screens = (props) => {
    const {state} = props;
    const {currentScreen, user} = state

    return(
        <Container style={styles.container}>
            <Home style={[
                    styles.screen,
                    {backgroundColor: Colors.PRIMARY},
                    (currentScreen =='home')? show : hide
                ]}>
                <Text style={{fontSize: Font.LARGE, textAlign:"center"}}>Home</Text>
                <Text style={{fontSize: Font.LARGE, textAlign:"center"}}>
                {JSON.stringify(user, null, '\t')}
                </Text>
            </Home>

             <Create style={[
                     styles.screen,
                     {backgroundColor: Colors.SUCCESS},
                     (currentScreen =='create')? show : hide
                     ]}>
                <Text style={{fontSize: Font.LARGE, textAlign:"center"}}>Create</Text>
            </Create>

             <Browse style={[
                  styles.screen,
                  {backgroundColor: Colors.WARNING},
                 (currentScreen =='browse')? show : hide]
                 }>
                <Text style={{fontSize: Font.LARGE, textAlign:"center"}}>Browse</Text>
            </Browse>

              <Account 
                style={(currentScreen =='account')? show : hide}
                state={state}  
              />
        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    screen:{
        justifyContent:"center",
        alignItems:"center"
    }
})

export default Screens;