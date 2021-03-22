import React, { useRef } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import * as Colors from '../../Colors'
import * as Font from '../../Font'

import Header from '../Header'

const Diary = (props) => {
    const {style, state} = props
    const {diary} = state;
    const Container = View;
    const Body = View;

    return (
        <Container style={[styles.container, style]}>
            <View style={styles.header}>
                <Header
                    icon={'arrow-left'}
                    title={'Diary'}
                />
            </View>
            <Body style={styles.body}>
                <Text style={{ textAlign: 'center' }}>
                    {JSON.stringify(diary)}
                </Text>
            </Body>
        </Container>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.DEFAULT
    },
    header: {
        flex: 0.15,
    },
    body: {
        flex: 0.85,
        flexDirection: 'column',
        padding: 20
    }
})

export default Diary;