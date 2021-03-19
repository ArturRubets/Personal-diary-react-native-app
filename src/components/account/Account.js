import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {
    StyleSheet,
    View,
    ScrollView,
    Text
} from 'react-native';

import * as Colors from '../../Colors'
import Header from '../Header'
import AccountDetails from './AccountDetails'

const Account = (props) => {
    const {state} = props;
    const {style} = props;
    const [edit, setEdit] = useState(false)

    const Container = View;
    const Body = ScrollView; 
    const AccountForm = View;

    return(
        <Container style={[style, styles.container]}>
            <StatusBar />
            <View style={styles.header}>
                <Header 
                title={'ACCOUNT'}
                icon={'user'}
                />
            </View>

            <Body style={styles.body}>
                {
                    (edit)
                    ?
                    (<AccountForm>
                        <Text>Account form</Text>
                    </AccountForm>)
                    :<AccountDetails state={state}/>
                }
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