import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import Account from './account/Account'
import Create from './create/Create'
import Diary from './diary/Diary'

const Container = View;
const Home = View;
const Browse = View;

import * as Font from '../Font'
import * as Colors from '../Colors'


const show = { flex: 1 }
const hide = { flex: 0, height: 0, opacity: 0 }


const Screens = (props) => {
    const { state, methods } = props;
    const { currentScreen, user, diaries } = state

    return (
        <Container style={styles.container}>
            <Home style={[
                (currentScreen == 'home') ? show : hide
            ]}>

                <Text style={{ fontSize: Font.LARGE, textAlign: "center" }}>
                    {JSON.stringify(diaries, null, '\t')}
                </Text>
            </Home>

            <Create
                style={[
                    (currentScreen == 'create') ? show : hide
                ]}
                state={state}
                methods={methods}
            />

            <Diary
                style={[
                    (currentScreen == 'diary') ? show : hide
                ]}
                state={state}
                methods={methods}
            />

            <Browse style={[
                (currentScreen == 'browse') ? show : hide]
            }>
                <Text style={{ fontSize: Font.LARGE, textAlign: "center" }}>Browse</Text>
            </Browse>

            <Account
                style={[
                    (currentScreen == 'account') ? show : hide
                ]}
                state={state}
                methods={methods}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'red'
    },
})

export default Screens;