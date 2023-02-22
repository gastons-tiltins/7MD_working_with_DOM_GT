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

// Nospiežot uz 1. pogas, 1. kvadrāta krāsa nomainās uz
// dzeltenu krāsu.

// Nospiežot uz 2. pogas, 2. kvadrātā teksts nomainās
// uz SUCCESS
// Nospiežot uz 3. pogas, 3. kvadrāts kļūst neredzams

// Nospiežot uz 4. pogas, 4. kvadrāts kļūst neredzams, nospiežot
// vēlreiz, tas atkal kļūst redzams.

// Nospiežot uz 5. pogas, 5. kvadrāta krāsa nomainās uz vienu no 5
// iepriekš izdomātām krāsām. Katru reizi uz citu, bet var atkārtoties.

// Nospiežot uz 6. pogas, 6.kvadrātā skaitlis sāk ik pa 3 sekundēm
// palielināties par 1. Kad tiek līdz 10, apstājas.

// Nospiežot uz 7. pogas, visi kvadrādi nomaina krāsu uz #18D5E1
// un lapas background krāsa nomainas uz #000000

// Uzliekot peli virs 1. kvadrāta, tam krāsa nomainas uz sarkanu

// Ekstra: Uzliekot peli virs 5. kvadrāta, ieslēdzas taimeris un skaita līdz 10,
// noņemot peli resetojas uz 0 un apstājas.

// Ekstra: Rakstot tekstu input laukā, tas parādās arī zem inputa
