import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import * as Colors from '../../Colors'
import * as Font from '../../Font'
import  DetailField from './DetailField'

const AccountDetails = (props)=> {
    const {state, setEdit} = props;
    const {user} = state;
    const {first_name, last_name, gender, birthDate, email} = user;
    const data = [
        {label : 'First name:',     value: first_name},
        {label : 'Last name:',      value: last_name},
        {label : 'Gender:',         value: gender},
        {label : 'BirthDate:',      value: birthDate},
        {label : 'Email:',          value: email}
    ]
    const Container = View;
 
    return(
        <Container style={styles.container}>
            {
                data.map(item =>(
                    <DetailField label={item.label} value={item.value}/>
                ))
            }
        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        borderWidth: 0.25,
        backgroundColor:Colors.WHITE,
        padding:15,
        borderRadius:5
    }
})

export default AccountDetails;