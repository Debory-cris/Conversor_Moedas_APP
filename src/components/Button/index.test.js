import { render, fireEvent, screen } from '@testing-library/react-native';
import { Button } from './index';

const dolar = { code: 'USD', name: 'Dólar americano' };

function getEstiloDoBotao(textoNaTela) {
    return textoNaTela.parent.parent.props.style;
}

describe('Button', () => {
    it('muda a cor do texto quando o botão está selecionado', () => {
        render(<Button currency={dolar} isSelected={true} onPress={() => { }} />);
        const texto = screen.getByText('USD');
        expect(texto.props.style[1]).toEqual(
            expect.objectContaining({ color: '#ffffff' })
        );
    });

    it('mantém o texto no estilo padrão quando NÃO está selecionado', () => {
        render(<Button currency={dolar} isSelected={false} onPress={() => { }} />);
        const texto = screen.getByText('USD');
        expect(texto.props.style[1]).toBeFalsy();
    });
});