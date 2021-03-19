import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';

import * as Colors from '../../Colors'
import Header from '../Header'

const Account = (props) => {
    const {style} = props;

    const Container = View;
    const Body = ScrollView; 

    return(
        <Container style={[style, styles.container]}>
            <StatusBar />
            <View style={styles.header}>
                <Header 
                title={'Account'}
                icon={'user'}
                />
            </View>

            <Body style={styles.body}>

            </Body>
        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.DEFAULT,
        flexDirection:'column'
    },
    header:{
        flex:0.15,
        backgroundColor:Colors.SUCCESS
    },
    body:{
        flex:0.85,
        flexDirection:'column',
        padding:20
    },
})


export default Account