import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './RegisterScreenStyles';
import colors from '../../../app/shared/colors'


function RegisterComponent({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.textField}>
                <Text>利用者登録の流れを確認する</Text>
                <FontAwesomeIcon icon={faArrowAltCircleRight} style={styles.linkImage}/>
            </View>
            <View style={styles.registerButton}>
                <Button
                    title="登録に進む"
                    onPress={() => navigation.navigate('Terms Of Service')}
                    color={colors.activeColor}
                ></Button>
            </View>
            <View style={styles.textField}>
                <Text>利用者登録の流れを確認する</Text>
                <FontAwesomeIcon icon={faArrowAltCircleRight} style={styles.linkImage}/>
            </View>
        </View>
    );
}

export default RegisterComponent;