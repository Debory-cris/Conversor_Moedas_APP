


export function convertCurrency(amount, exchangeRate) {
    return (parseFloat(amount) * exchangeRate).toFixed(2);
}