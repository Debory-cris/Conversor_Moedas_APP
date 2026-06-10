import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { colors } from '../styles/colors';


export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.cardbackground,
        borderRadius: 16,
        padding: 24,
    },

    label: {
        color: colors.textSecondary,
        marginBottom: 8,
        fontSize: 18,
    },

    amount: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: colors.text,
    },

    rate: {
        color: colors.textSecondary,
        fontSize: 14,
    },

});    