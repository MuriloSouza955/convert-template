const amount = document.getElementById('amount');

//Manipilando o input amount para receber apenas números
amount.addEventListener('input', ()=> {
    amount.value = amount.value.replace(/[^0-9]/g, '');

    
})