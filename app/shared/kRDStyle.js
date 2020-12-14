import { StyleSheet } from 'react-native';
import colors from './colors'

const kRDStyles = StyleSheet.create({
    textInput: {
        width: '100%',
        height: 50,
        lineHeight: 50,
        backgroundColor: colors.whiteColor,
        borderColor: colors.blackColor,
        borderWidth: 0.5,
        borderRadius: 3,
        padding: 4
    },
});

export default kRDStyles;