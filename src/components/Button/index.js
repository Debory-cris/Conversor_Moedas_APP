import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export function Button({
    variant = 'primary',
    title = 'Clique aqui',
    onPress,
    currency,
    isSelected,
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                isSelected &&
                (variant === 'primary'
                    ? styles.buttonPrimary
                    : styles.buttonSecondary),
            ]}
        >
            <Text
                style={[
                    styles.buttonText,
                    isSelected && styles.buttonTextSelected,
                ]}
            >
                {currency?.code || title}
            </Text>
        </TouchableOpacity>
    );
}

export default Button;