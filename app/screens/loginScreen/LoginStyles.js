import { StyleSheet } from 'react-native';
import colors from '../../shared/colors'

const styles = StyleSheet.create({
    scrollView: {
        display: "flex"
    },  
    imageBackground: {
        flex: 1
    },
    loginContainer: {
        flex: 1
    },
    scrollViewContainer: {
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    iconLogo: {
        height: 70,
        width: 70,
        top: 20,
        marginBottom: 40
    },
    textField: {
        width: '70%',
        flex: 1
    },
    requiredIcon: {
        width: 40,
        color: colors.whiteColor,
        backgroundColor: colors.redColor,
        textAlign: "center",
        borderRadius: 6,
        marginLeft:5
    },  
    textInput: {
        width: '100%',
        height: 40,
        lineHeight: 40,
        backgroundColor: colors.whiteColor,
        borderColor: colors.blackColor,
        borderWidth: 0.5,
        borderRadius: 3,
        padding: 4
    },
    textInputErr: {
        width: '100%',
        height: 40,
        lineHeight: 40,
        backgroundColor: colors.whiteColor,
        borderWidth: 0.5,
        borderRadius: 3,
        borderColor: colors.redColor,
        padding: 4
    },
    textErr: {
        fontStyle: "italic",
        color: colors.purpleColor
    },
    loginButton: {
        width: '70%',
        flex: 3,
        marginTop: 50
    },
    linkContainer: {
        display: "flex",
        flexDirection: "row",
        marginTop: 15,
        justifyContent: "space-between"
    },
    linkImage: {
        color: colors.activeColor
    }
});

export default styles;