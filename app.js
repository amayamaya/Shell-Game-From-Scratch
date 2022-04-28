// import functions and grab DOM elements
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
// console.log(button1)

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');

const ball1 = document.getElementById('ball-1');
const ball2 = document.getElementById('ball-2');
const ball3 = document.getElementById('ball-3');

let wins = 0;
let losses = 0;

button1.addEventListener('click', () => {
    ball1.classList.remove('reveal');
    ball2.classList.remove('reveal');
    ball3.classList.remove('reveal');
    shell1.classList.remove('reveal');
    // console.log ('clicking button 1');
    //deciding which shell the ball is under
    const randomShell = Math.ceil(Math.random() * 3);
    // console.log('the winning shell is', randomShell);

    // if randomShell is = 1 - increment the wins
    // else increment the losses
    if (randomShell === 1) {
        ball1.classList.add('reveal');
        shell1.classList.add('reveal');
        wins++;
    } else if (randomShell === 2) {
        ball2.classList.add('reveal');
        shell2.classList.add('reveal');
        losses++;
    } else {
        ball3.classList.add('reveal');
        shell3.classList.add('reveal');
        losses++;
    }
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});

button2.addEventListener('click', () => {
    ball1.classList.remove('reveal');
    ball2.classList.remove('reveal');
    ball3.classList.remove('reveal');
    shell2.classList.remove('reveal');

    // console.log ('clicking button 2');
    // deciding which shell the ball is under
    const randomShell = Math.ceil(Math.random() * 3);
    // console.log('the winning shell is', randomShell);

    // if randomShell is = 2 - increment the wins
    // else increment the losses
    if (randomShell === 1) {
        ball1.classList.add('reveal');
        losses++;
    } else if (randomShell === 2) {
        ball2.classList.add('reveal');
        wins++;
    } else {
        ball3.classList.add('reveal');
        losses++;
    }

    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});

button3.addEventListener('click', () => {  
    ball1.classList.remove('reveal');
    ball2.classList.remove('reveal');
    ball3.classList.remove('reveal');
    shell3.classList.remove('reveal');
    // console.log ('clicking button 3');
    //deciding which shell the ball is under
    const randomShell = Math.ceil(Math.random() * 3);
    // console.log('the winning shell is', randomShell);

    // if randomShell is = 3 - increment the wins
    // else increment the losses
    if (randomShell === 1) {
        shell1.classList.add('reveal');
        losses++;
    } else if (randomShell === 2) {
        ball2.classList.add('reveal');
        losses++;
    } else {
        ball3.classList.add('reveal');
        wins++;
    }

    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});

// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
