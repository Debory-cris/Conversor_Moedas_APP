import { convertCurrency } from "./convertCurrency";

describe("convertCurrency", () => {

    it("converte um valor inteiro corretamente", () => {
        const resultado = convertCurrency("10", 5);
        expect(resultado).toBe("50.00");
    });

    it("converte um valor decimal corretamente", () => {
        const resultado = convertCurrency("10.5", 2);
        expect(resultado).toBe("21.00");
    });

    it("sempre retorna uma string, por causa do toFixed", () => {
        const resultado = convertCurrency("10", 5);
        expect(typeof resultado).toBe("string");
    });

    it("retorna '0.00' quando o valor é 0", () => {
        const resultado = convertCurrency("0", 5);
        expect(resultado).toBe("0.00");
    });

    it("retorna a string 'NaN' se o valor não for numérico", () => {
        const resultado = convertCurrency("abc", 5);
        expect(resultado).toBe("NaN");
    });

    it("não impede valores negativos (comportamento atual)", () => {
        const resultado = convertCurrency("-10", 5);
        expect(resultado).toBe("-50.00");
    });

});