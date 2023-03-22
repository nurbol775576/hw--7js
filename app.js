const counterInput = document.querySelector('.counter');
const incrementButton = document.querySelector('.increment');
const decrementButton = document.querySelector('.decrement');

incrementButton.addEventListener('click', () => {
    counterInput.value = parseInt(counterInput.value) +1
});
decrementButton.addEventListener('click', () => {
    if(parseInt(counterInput.value) > 0 ){
        counterInput.value = parseInt(counterInput.value) - 1 
    }
});