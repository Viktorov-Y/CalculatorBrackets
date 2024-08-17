// Функции за добавяне на цифри към текстовото поле на калкулатора
function btnOne() {
    calc.text.value += '1';
} function btnTwo() {
    calc.text.value += '2';
} function btnThree() {
    calc.text.value += '3';
} function btnFour() {
    calc.text.value += '4';
} function btnFive() {
    calc.text.value += '5';
} function btnSix() {
    calc.text.value += '6';
} function btnSeven() {
    calc.text.value += '7';
} function btnEight() {
    calc.text.value += '8';
} function btnNine() {
    calc.text.value += '9';
} function btnZero() {
    calc.text.value += '0';
}
// Функции за оператори (+, -, *, /)
function btnPlus() {
    calc.text.value += '+';
} function btnMinus() {
    calc.text.value += '-';
} function btnMultiply() {
    calc.text.value += '*';
} function btnDivide() {
    calc.text.value += '/';
}
// Функции за точка и скоби
function btnDot() {
    calc.text.value += '.';
}
function btnOpen() {
    calc.text.value += '(';
}
function btnClose() {
    calc.text.value += ')';
}
// Функция за изчисляване на резултата
function result() {
    calc.text.value = eval(calc.text.value);
}
// Функция за изчистване на текстовото поле на калкулатора
function btnClear() {
    calc.text.value = '';
}
//функция за показване / скриване на решенията 
function toggleText(that, id) {
    var e = document.getElementById(id);
    if (e.style.display !== 'block') {
        e.style.display = 'block';
        that.textContent = 'Скрий решението';
    } else {
        e.style.display = 'none';
        that.textContent = 'Виж решението';
    }
} 