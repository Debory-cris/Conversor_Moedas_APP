import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { colors } from '../../styles/colors';

export function Button({ variant = 'primary', title = 'Clique aqui', onPress, currency, isSelected }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                isSelected && (variant === 'primary' ? styles.buttonPrymary : styles.buttonSecondary)
            ]}>
            <Text style={[styles.buttonText, isSelected && styles.buttonTextSelected]}>
                {currency.code}
            </Text>
        </TouchableOpacity>
    );
}

export default Button;