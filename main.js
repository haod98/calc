const input_display = document.querySelector('.result');
const button_all = document.querySelectorAll('.numpad > .number');
const clear = document.querySelector('.ac');
console.log(clear);

let first_num = '';

for (const btn_press of button_all) {
    btn_press.addEventListener('click', (e) => {
        let btn_target = e.target.value;
        console.log(e.target)
        first_num += btn_target;
        input_display.setAttribute('value', first_num);
    });
};

clear.addEventListener('click', () => {
    first_num = '';
    input_display.setAttribute('value', first_num);
    console.log(first_num);
})



//Notes: 
//Let the numbers be strings so they concatenate. When equal button pressed use parseInt()