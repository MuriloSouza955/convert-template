const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');

//Manipilando o input amount para receber apenas números
amount.addEventListener('input', ()=> {
    amount.value = amount.value.replace(/[^0-9]/g, '');    
})

form.onsubmit = (event) => {
    event.preventDefault();
    
    console.log(currency.value)
}