const input_display = document.querySelector('.result');
const button_all = document.querySelectorAll('.numpad > .number');
const clear = document.querySelector('.ac');
const button_op = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
let first_num = '';
let second_num = '';
let btn_target = null;
let operators = {
    '+': function (a, b) { return a + b },
    '-': function (a, b) { return a - b },
    '/': function (a, b) { return a / b },
    '*': function (a, b) { return a * b }
};
let btn_press = null;
let saved_op = '';
let result = null;

/* const input = function (e, click_target, input_num, new_display_value) {
    click_target = e.target.value;
    input_num += click_target;
    new_display_value.setAttribute('value', input_num);
}; */

for (btn_press of button_all) {
    btn_press.addEventListener('click', (e) => {
        if (saved_op !== '') {
            btn_target = e.target.value;
            second_num += btn_target;
            input_display.setAttribute('value', second_num);
        } else {
            btn_target = e.target.value;
            first_num += btn_target;
            input_display.setAttribute('value', first_num);
        };
    });
};

//Numpad controll 
const valid_num = '0123546789';
const valid_op = '+-/*';
window.addEventListener('keyup', e => {
    console.log(e)
    if (valid_num.indexOf(e.key) !== -1) {
        if (saved_op !== '') {
            btn_target = e.key;
            second_num += btn_target;
            input_display.setAttribute('value', second_num);
        } else {
            btn_target = e.key;
            first_num += btn_target;
            input_display.setAttribute('value', first_num);
        };
    };
    if (first_num !== '') {
        if (valid_op.indexOf(e.key) !== -1) {
            const op_target = e.key;
            saved_op = op_target;
            if (first_num !== '' && second_num !== '') {
                console.log('You are in')
                first_num = operators[saved_op](parseFloat(first_num), parseFloat(second_num));
                second_num = '';
                input_display.setAttribute('value', first_num);
            };
        };
    };
    if (e.key === 'Enter') {
        if (first_num === '' || second_num === '') {
            input_display.setAttribute('value', 'Error');
        } else {
            result = operators[saved_op](parseFloat(first_num), parseFloat(second_num));
            console.log(result);
            input_display.setAttribute('value', result);
            first_num = '';
            second_num = '';
            saved_op = '';
        };
    };

    if (e.key === 'Delete') {
        first_num = '';
        second_num = '';
        saved_op = '';
        input_display.setAttribute('value', first_num);

    };
});

for (const op_press of button_op) {
    op_press.addEventListener('click', (e) => {
        const op_target = e.target.value;
        saved_op = op_target;
        if (first_num !== '' && second_num !== '') {
            console.log('You are in')
            first_num = operators[saved_op](parseFloat(first_num), parseFloat(second_num));
            second_num = '';
            input_display.setAttribute('value', first_num);
        };
    });
};


clear.addEventListener('click', () => {
    first_num = '';
    second_num = '';
    saved_op = '';
    input_display.setAttribute('value', first_num);
})

equal.addEventListener('click', () => {
    if (first_num === '' || second_num === '') {
        input_display.setAttribute('value', 'Error');
    } else {
        result = operators[saved_op](parseFloat(first_num), parseFloat(second_num));
        console.log(result);
        input_display.setAttribute('value', result);
        first_num = '';
        second_num = '';
        saved_op = '';
    }
});



//Notes: 
//Let the numbers be strings so they concatenate. When equal button pressed use parseFloat()