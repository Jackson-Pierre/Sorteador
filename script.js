const minInput = document.querySelector('.min');
const maxInput = document.querySelector('.max');
const sortear = document.querySelector('.sortear');
const result = document.querySelector('.result');
function sortearNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function soma() {
    const min = Number(minInput.value);
    const max = Number(maxInput.value);

    if (min > max) {
    result.value = 'É do Menor para o Maior!';
    result.style.visibility = 'visible';
    return;
    }

    result.value = sortearNumero(min, max);
    result.style.visibility = 'visible';
}

sortear.addEventListener('click', soma);
