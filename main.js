const input_display = document.querySelector('.result');
const button_all = document.querySelectorAll('.numpad > .number');
const clear = document.querySelector('.ac');
const button_op = document.querySelectorAll('.operator');
console.log(button_op);

let first_num = '';
let second_num = '';
let operators = {
    '+': function (a, b, c) { return a + b + c }
};
let btn_press = null;
let saved_op = '';



for (btn_press of button_all) {
    btn_press.addEventListener('click', (e) => {
        if (saved_op !== '') {
            console.log('Now second number')
        } else {
            let btn_target = e.target.value;
            first_num += btn_target;
            input_display.setAttribute('value', first_num);
        }
    });
};

for (const op_press of button_op) {
    op_press.addEventListener('click', (e) => {
        const op_target = e.target.value;
        saved_op = op_target;

    })
};


clear.addEventListener('click', () => {
    first_num = '';
    saved_op = '';
    input_display.setAttribute('value', first_num);
})



//Notes: 
//Let the numbers be strings so they concatenate. When equal button pressed use parseInt()