import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import * as Colors from '../../Colors'
import * as Font from '../../Font'
import  DetailField from './DetailField'
import  {truncateText} from '../../Utilities'
import  ProfilePicture from './ProfilePicture'


const AccountDetails = (props)=> {
    const {state, setEdit} = props;
    const {user} = state;
    const {first_name, last_name, gender, birthDate, email} = user;
    const data = [
        {label : 'First name:',     value: truncateText(first_name || 'Udefined', 16)},
        {label : 'Last name:',      value: truncateText(last_name || 'Udefined', 16)},
        {label : 'Gender:',         value: gender},
        {label : 'BirthDate:',      value: birthDate},
        {label : 'Email:',          value: truncateText(email || 'Udefined', 16)}
    ]
    const Container = View;
 
    return(
        <Container style={styles.container}>
            <View style={styles.profile}>
                <ProfilePicture gender={gender}/>
            </View>


            {
                data.map(item =>(
                    <DetailField 
                        label={item.label} 
                        value={item.value}
                    />
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
        borderRadius:5,
    },
    profile:{
        alignItems:'center',
        justifyContent:'center'
    }
})

export default AccountDetails;