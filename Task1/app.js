
const input = document.getElementById('input'),
    clear = document.getElementById('clear'),
    equal = document.getElementById('equal'),
    allButton = document.querySelectorAll('button');

for (let button of allButton) {
    button.addEventListener('click', (e) => {
        let t = e.target.innerText;
        if (t == 'X') t = 'x'
        input.value += t
    })
}

equal.addEventListener('click', () => {
    inputs = input.value;
    if (inputs.includes('x')) inputs = inputs.replace('x', '*')
    input.value = eval(inputs);
})

clear.addEventListener('click', () => input.value = '')