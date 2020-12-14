const { StyleSheet } = require("react-native");
import colors from '../../shared/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        width: '100%',
        flex: 1,
        display: "flex"
    },
    viewContainer: {
        alignItems: "center",
        flex: 1
    },
    textContainer: {
        display: "flex",
        width: '70%',
        marginTop: 10
    },
    textLabel: {
        display: "flex",
        flexDirection: "row"
    },
    labelRequired: {
        width: 40,
        color: colors.whiteColor,
        backgroundColor: colors.redColor,
        textAlign: "center",
        borderRadius: 6,
        marginLeft:5
    },
    labelOptional: {
        width: 40,
        color: colors.whiteColor,
        backgroundColor: colors.greenColor,
        textAlign: "center",
        borderRadius: 6,
        marginLeft:5
    },
    textInput: {
        width: '100%',
        backgroundColor: colors.whiteColor,
        borderColor: colors.blackColor,
        borderWidth: 0.7,
        borderRadius: 3,
        padding: 4,
        marginTop: 5,
        height: 40,
        flexShrink: 1
    },
    textDescription: {
        fontSize: 11,
        color: colors.lightGreyColor
    },
    dropdownContainer: {
        display: "flex",
        width: '70%',
        marginTop: 10,
        flexDirection: "row"
    },
    horizontalLabel: {
        lineHeight: 40,
        width: 60
    },
    dropdown: {
        flexGrow: 1
    },
    dropdownCustom: {
        borderColor: colors.blackColor,
        borderWidth: 0.7,
        borderRadius: 3,
        backgroundColor: colors.whiteColor
    },
    customBirthDate: {
        flexGrow: 1
    },
    customTextInput: {
        display: "flex",
        flexDirection: "row"
    }
});

export default styles;