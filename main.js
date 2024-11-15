let resalt = document.querySelector('#res');
let clear = document.querySelector('#clear');
let equal = document.querySelector('#equal');
let buttons = document.querySelectorAll('span');

for (let button of buttons) {
    button.addEventListener('click' ,function() {
        if  (button.innerHTML === '=') {
            console.log(eval(resalt.innerHTML))
            resalt.innerHTML = eval(resalt.innerHTML)
        } else if (button.innerHTML === 'clear') {
            console.log('clik-clear')
            resalt.innerHTML = ''
        } else if (button.innerHTML === 'del') {
            console.log(resalt.innerHTML.slice(0 , resalt.innerHTML.length - 1))
            resalt.innerHTML = resalt.innerHTML.slice(0 , resalt.innerHTML.length - 1)

        } else {
            resalt.innerHTML += button.innerHTML

        }
    });
}