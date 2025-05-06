//Cotação de moedas do dia
const currencyPrice = {
    'USD': 4.87,
    'EUR': 5.32,
    'GBP': 6.08
}

//Obtendo os elementos do formulário
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');

//Manipilando o input amount para receber apenas números
amount.addEventListener('input', ()=> {
    amount.value = amount.value.replace(/[^0-9]/g, '');    
})

//Captando o evento de submit do formulário
form.onsubmit = (event) => {
    event.preventDefault();
    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, currencyPrice.USD, 'US$');
            break;
        case 'EUR':
            convertCurrency(amount.value, currencyPrice.EUR, '€');
            break;
        case 'GBP':
            convertCurrency(amount.value, currencyPrice.GBP, '£');
            break;
        default:
            alert('Selecione uma moeda válida.');
    }
}

//Função para converter o valor em reais
function convertCurrency(amount, price, simbol) {
    try{

        description.textContent = `${simbol} 1 = ${formatCurrencyBRL(price)}`;

        footer.classList.add('show-result'); // aplica a classe para exibir o footer com o resultado.
    }catch (error) {

        footer.classList.remove('show-result'); // remove a classe para ocultar o footer.
        console.error('Erro ao exibir o resultado: ', error);

        alert('Erro ao converter a moeda: ' + error);
    }
}

//Função para formatar o valor em reais
// Exibe o valor em reais com o símbolo de moeda
// e com duas casas decimais
function formatCurrencyBRL (value) {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}