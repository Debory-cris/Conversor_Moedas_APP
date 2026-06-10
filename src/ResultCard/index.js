import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

function ResultCard({ exchangeRate, result, fromCurrency, toCurrency, currencies }) {

    if (!result || !exchangeRate) return null;

    const toSymbol = currencies.find(currency => currency.code === toCurrency)?.symbol || toCurrency;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Resultado:</Text>
            <Text style={styles.amount}>{toSymbol} {result}</Text>
            <Text style={styles.rate}>Taxa de câmbio: 1 {fromCurrency} = {exchangeRate} {toCurrency}</Text>
        </View>
    );

}

export default ResultCard;