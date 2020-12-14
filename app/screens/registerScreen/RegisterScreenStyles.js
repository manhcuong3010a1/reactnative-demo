import { StyleSheet } from 'react-native';
import colors from '../../shared/colors';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        flex: 0.5,
        justifyContent: "space-evenly"
    },
    textField: {
        width: '60%',
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        lineHeight: 18
    },
    registerButton: {
        width: '60%',
        borderRadius: 6
    },
    linkImage: {
        color: colors.activeColor,
        height: 18,
        width: 18   
    }
});

export default styles;