import React from 'react';
import { View, StyleSheet } from 'react-native';
import FooterTab from './FooterTab'

const AppScreen = (props) => {
    const Container = View;
    const Screen = View;
    const Footer = View;
    return (
        <Container style={styles.container}>
            <Screen style={styles.screen}>

            </Screen>
            <Footer style={styles.footer}>
                <FooterTab />
            </Footer>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#ddd"
    },
    screen: {
        flex: 0.9,
        backgroundColor: "skyblue"
    },
    footer: {
        flex: 0.1,
        backgroundColor: "green"
    }
})

export default AppScreen;