import React from "react";
import { Image, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import {useDispatch, useSelector} from 'react-redux';
import {logoutAttempt} from '../../actions';
import Logo from '../../images/logo.jpg';

function Logout(props) {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    function logoutAction() {

        dispatch(logoutAttempt(user.token));

        props.navigation.navigate('Login');
    }

    return (
        <View style = {styles.container}>
            <Image source ={Logo} style = {styles.img} />
            <Text style = {styles.text}>Are you sure you want to log out?</Text>
            <CustomButton 
            text = 'Log Out'
            type = 'PRIMARY'
            onPress = {() => logoutAction()}
            />
        </View>
        
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        // paddingVertical: 270,
        paddingHorizontal: 50,
        backgroundColor: 'aliceblue',
    },

    text: {
        fontSize: 20,
        marginVertical: 20,
    },

    img: {
        width: '100%',
        height: 70,
        marginBottom: 150
    }

    
}

export default Logout;