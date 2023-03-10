const button1 = document.querySelector('.btn--c1');
const button2 = document.querySelector('.btn--c2');
const button3 = document.querySelector('.btn--c3');
const button4 = document.querySelector('.btn--c4');
const button5 = document.querySelector('.btn--c5');
const button6 = document.querySelector('.btn--c6');
const button7 = document.querySelector('.btn--c7');
const body = document.querySelector('body');
const box1 = document.querySelector('.box1');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');

// Button 1
button1.addEventListener('click', () => {
    box1.classList.remove('box--all-color');
    box1.classList.add('box--yellow');
});

// Button 2
button2.addEventListener('click', () => {
    const success = document.getElementsByClassName('fail--text');
    success[0].innerHTML = 'SUCCESS';
});

// Button 3
button3.addEventListener('click', () => {
    box3.classList.add('box--hide');
});

// Button 4
button4.addEventListener('click', () => {
    function toggleClass() {
        // toggle class
        box4.classList.toggle('box--hide');
    }
    toggleClass();
});

// Batton 5
button5.addEventListener('click', () => {
    function toggleClass() {
        const colors = ['red', 'green', 'blue', 'orange', 'yellow'];
        let krasa = Math.floor(Math.random() * colors.length);
        box5.classList.toggle(colors[krasa]);
    }

    toggleClass();
});

// Button 6
// https://www.w3schools.com/jsref/met_win_setinterval.asp

button6.addEventListener('click', () => {
    const b6 = document.getElementsByClassName('timer--text');
    function toTenSec() {
        let i = 1;
        setInterval(function () {
            if (i == 11) clearInterval(this);
            else b6[0].innerHTML = (i++).toString();
        }, 3000);
    }
    toTenSec();
});

// Button 7

button7.addEventListener('click', (krasa) => {
    const boxes = document.querySelectorAll('.box-style');

    box1.classList.remove('box--yellow');
    box3.classList.remove('box--hide');
    box4.classList.remove('box--hide');
    box5.classList.remove('red', 'green', 'orange', 'yellow', 'blue');

    for (const box of boxes) {
        box.classList.add('box--all-color');
    }

    const body = document.querySelector('body');
    body.classList.add('body--chagne-bg');
});

// Task 8
// https://bobbyhadz.com/blog/javascript-change-text-color-on-mouseover

document.getElementById('red-bg').addEventListener('mouseover', mouseOver);
document.getElementById('red-bg').addEventListener('mouseout', mouseOut);

function mouseOver() {
    document.getElementById('red-bg').style.backgroundColor = 'red';
}
function mouseOut() {
    document.getElementById('red-bg').style.backgroundColor = '';
}

// 9 Task - Timer to 10 on mouse enter

const box5enter = document.querySelector('.box5');

let counter: any;
box5enter.addEventListener('mouseenter', () => {
    let updateSeconds = () => {
        let countingValue;
        if (
            isNaN(
                parseInt(document.getElementsByClassName('box5')[0].innerHTML),
            )
        ) {
            countingValue = 0;
        } else {
            countingValue = parseInt(
                document.getElementsByClassName('box5')[0].innerHTML,
            );
        }
        if (countingValue > 9) {
            clearInterval(counter);
        } else {
            document.getElementsByClassName('box5')[0].innerHTML = `${
                countingValue + 1
            }`;
        }
    };
    counter = setInterval(updateSeconds, 600);
});

box5enter.addEventListener('mouseleave', () => {
    clearInterval(counter);
    document.getElementsByClassName('box5')[0].innerHTML = '0';
});

// 10 Task - Show text as you type

const inputForm = document.getElementById('inputForm');
const textAsType = document.getElementById('textAsType');

const inputHandler = function (a: any) {
    textAsType.innerHTML = a.target.value;
};

inputForm.addEventListener('input', inputHandler);
inputForm.addEventListener('propertychange', inputHandler);

// +++++++++ UZDEVUMS ++++++++
// ---------------------------

// Nospie??ot uz 1. pogas, 1. kvadr??ta kr??sa nomain??s uz
// dzeltenu kr??su.

// Nospie??ot uz 2. pogas, 2. kvadr??t?? teksts nomain??s
// uz SUCCESS
// Nospie??ot uz 3. pogas, 3. kvadr??ts k????st neredzams

// Nospie??ot uz 4. pogas, 4. kvadr??ts k????st neredzams, nospie??ot
// v??lreiz, tas atkal k????st redzams.

// Nospie??ot uz 5. pogas, 5. kvadr??ta kr??sa nomain??s uz vienu no 5
// iepriek?? izdom??t??m kr??s??m. Katru reizi uz citu, bet var atk??rtoties.

// Nospie??ot uz 6. pogas, 6.kvadr??t?? skaitlis s??k ik pa 3 sekund??m
// palielin??ties par 1. Kad tiek l??dz 10, apst??jas.

// Nospie??ot uz 7. pogas, visi kvadr??di nomaina kr??su uz #18D5E1
// un lapas background kr??sa nomainas uz #000000

// Uzliekot peli virs 1. kvadr??ta, tam kr??sa nomainas uz sarkanu

// Ekstra: Uzliekot peli virs 5. kvadr??ta, iesl??dzas taimeris un skaita l??dz 10,
// no??emot peli resetojas uz 0 un apst??jas.

// Ekstra: Rakstot tekstu input lauk??, tas par??d??s ar?? zem inputa
