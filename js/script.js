// Recupero gli elementi del DOM che mi servono:
const form = document.querySelector('form');
const age = document.getElementById('age-field');
const distance = document.getElementById('km-field');


// Corpo del programma:

form.addEventListener('click', function () {
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
    console.log(`${finalPrice} €`)
})
