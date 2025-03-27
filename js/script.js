// Recupero gli elementi del DOM che mi servono:
const form = document.querySelector('form');
const age = document.getElementById('age-field');
const distance = document.getElementById('km-field');
const priceSpace = document.getElementById('return-price');
const button = document.getElementById('Genera');
const userName = document.getElementById('user-name');
const enterName = document.getElementById('name-field');


// Corpo del programma:

button.addEventListener('click', function (event) {
    
    event.preventDefault();
    
    let price = distance.value * 0.21;
    let finalPrice;
    if (age.value <= 18) {
        finalPrice = price - (price * 20 / 100);
    }
    else if (age.value >= 65) {
        finalPrice = price - (price * 40 / 100);
    }
    else{
        finalPrice = price;
    }
    
    priceSpace.innerText = `${finalPrice.toFixed(2)} €`;
    userName.innerText = enterName.value;
    

})


