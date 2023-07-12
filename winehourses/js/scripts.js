const quantity = document.querySelector('.quantity');
const input = quantity.querySelector('input');
const span = document.createElement('span');
span.textContent = '1';
quantity.insertBefore(span, input);