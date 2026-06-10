import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        margin: 4,
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.inputbackground,
    },
    buttonText: {
        color: colors.text,
        fontWeight: '500',
        fontSize: 16,
    },
    buttonPrymary: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
    },
    buttonSecondary: {
        backgroundColor: colors.secondary,
        borderColor: colors.secondary,
    },
});

export default styles;