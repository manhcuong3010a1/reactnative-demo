import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useReducer } from 'react';
import { Alert, Button, Image, ImageBackground, Text, TextInput, View, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../../shared/colors';
import { loginFormState, loginReducer } from "./LoginReducer";
import styles from './LoginStyles';

function LoginComponent({ navigation }) {

    const [loginForm, handleLoginFormState] = useReducer(loginReducer, loginFormState, () => {return loginFormState;});
    const {userFormValue, userFormValidate} = loginForm;

    const confirmationButtons = [
        {
            text: "Cancel",
            onPress: () => {},
            style: "cancel"
        },
        { 
            text: "OK", 
            onPress: () => goToProfile()
        }
    ];

    const goToProfile = () => {
        navigation.navigate('Register User')
    }
    

    const performLogin = () => {
        const notValidUserId = !userFormValue.userId || userFormValue.userId.trim() === "";
        const notValidUserPassword = !userFormValue.userPassword || userFormValue.userPassword.trim() === "";
        if (notValidUserId || notValidUserPassword) {
            if (notValidUserId) {
                handleLoginFormState({type: 'formErrorUserId'});
            }
            if (notValidUserPassword) {
                handleLoginFormState({type: 'formErrorUserPassword'});
            }
        } else {
            showAlert({alertTitle: "Confirmation!", alertMessage: "Are you sure to do this?"})
        }
        
    }

    const showAlert = ({alertTitle, alertMessage}) => {
        Alert.alert(
            alertTitle,
            alertMessage,
            confirmationButtons,
            { cancelable: false }
        );
    }

    const getTextInputStyle = isError => {
        if (isError === true) {
            return styles.textInputErr;
        } else if (isError === false) {
            return styles.textInput;
        } else return styles.textInput;
    }

    return (
        <>
            <SafeAreaView style={styles.loginContainer}>
                <ImageBackground 
                    resizeMode="cover"
                    style={styles.imageBackground}
                    source={require("../../../app/assets/img_bear_large_blur.jpg")}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.scrollViewContainer}>
                            <Image 
                                resizeMode="contain" 
                                source={require("../../../app/assets/logo.png")}
                                style={styles.iconLogo}
                            >
                            </Image>
                                
                            <View style={styles.textField}>
                                <View style={{display: "flex", flexDirection: "row", marginBottom: 5}}>
                                    <Text>ログインID</Text>
                                    <Text style={styles.requiredIcon}>必須</Text>
                                </View>
                                <TextInput 
                                    style={getTextInputStyle(userFormValidate.userIdErr)}
                                    placeholder="User ID"
                                    value={userFormValue.userId}
                                    onChangeText={userId => handleLoginFormState({type: 'userId', payload: {userId: userId}})}
                                />
                                <View>
                                    <Text style={styles.textErr}>{userFormValidate.userIdErrorMessage}</Text>
                                </View>
                            </View>
                                
                            <View style={styles.textField}>
                                <View style={{display: "flex", flexDirection: "row", marginBottom: 5}}>
                                    <Text>パスワード</Text>
                                    <Text style={styles.requiredIcon}>必須</Text>
                                </View>
                                
                                <TextInput 
                                    style={getTextInputStyle(userFormValidate.userPasswordErr)}
                                    placeholder="Password"
                                    value={userFormValue.userPassword}
                                    onChangeText={userPassword => handleLoginFormState({type: 'userPassword', payload: {userPassword: userPassword}})}
                                />
                                <View>
                                    <Text style={styles.textErr}>{userFormValidate.userPasswordErrorMessage}</Text>
                                </View>
                            </View>

                            <View style={styles.loginButton}>
                                <Button
                                    title="ログイン"
                                    onPress={() => performLogin()}
                                    color={colors.activeColor}
                                ></Button>
                                <View style={styles.linkContainer}>
                                    <Text>はじめて利用される方はこちら</Text>
                                    <FontAwesomeIcon icon={faArrowAltCircleRight} style={styles.linkImage}/>
                                </View>
                                <View style={styles.linkContainer}>
                                    <Text>ID・パスワードを忘れた方はこちら</Text>
                                    <FontAwesomeIcon icon={faArrowAltCircleRight} style={styles.linkImage}/>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground> 
            </SafeAreaView>
        </>
    );
}

export default LoginComponent;