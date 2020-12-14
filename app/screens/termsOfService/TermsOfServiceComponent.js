import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './TermsOfServiceStyle';
import colors from '../../shared/colors';

function TermsOfServiceComponent({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.textField}>
                <Text>利用規約表示</Text>
                <FontAwesomeIcon icon={faArrowAltCircleRight} style={styles.linkImage}/>
            </View>
            <View style={styles.registerButton}>
                <Button
                    title="規約確認しました"
                    onPress={() => navigation.navigate('New User Registration')}
                    color={colors.activeColor}
                ></Button>
            </View>
            <View style={styles.textField}>
                <Text>ログイン画面へ</Text>
                <FontAwesomeIcon icon={faArrowAltCircleRight} style={styles.linkImage}/>
            </View>
        </View>
    );
}

export default TermsOfServiceComponent;