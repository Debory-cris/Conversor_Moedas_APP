# 💱 Conversor de Moedas

Aplicativo mobile de conversão de moedas em tempo real, desenvolvido com React Native e Expo.

## 📱 Demonstração

- 🔗 [Ver no Expo Snack](https://snack.expo.dev/@deboracrism/conversor_app?platform=android)

## ✨ Funcionalidades

- Conversão entre múltiplas moedas
- Taxa de câmbio em tempo real via API
- Seleção de moeda de origem e destino
- Interface simples e intuitiva

## 🚀 Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Exchange Rate API](https://www.exchangerate-api.com/)

## ▶️ Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/deboracrism/conversor-app.git

# Entre na pasta
cd conversor-app
git g
# Instale as dependências
npm install

# Inicie o projeto
npx expo start
```

Escaneie o QR code com o app **Expo Go** no celular.
Testes

O projeto possui testes automatizados com Jest e @testing-library/react-native, cobrindo:

Lógica de conversão (src/utils/convertCurrency.js): valores inteiros, decimais, arredondamento e comportamento com entradas inválidas.
Componente Button (src/components/Button): renderização, interação de toque (onPress), e variação de estilo conforme variant e isSelected.
Rodando os testes
bash
npm test
Stack de testes
Ferramenta	Função
jest	Test runner
jest-expo	Preset do Jest configurado pro ambiente Expo/React Native
@testing-library/react-native	Renderiza componentes e simula interação do usuário

Nota de compatibilidade: as versões de jest-expo, @testing-library/react-native e react-test-renderer estão fixadas para acompanhar a versão do Expo SDK e do React usados no projeto (Expo SDK 54 / React 19.1.0). Atualizar essas dependências sem checar a compatibilidade entre elas costuma causar conflitos de peer dependency.

## 👩‍💻 Autora

Feito por **Debora** 🚀