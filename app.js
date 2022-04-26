// import functions and grab DOM elements
const button1 = document.getElementById('button-1');
// console.log(button1)

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');

let wins = 0;
let losses = 0;

button1.addEventListener('click', () => {
    shell1.classList.add ('reveal');

    // console.log ('clicking button 1');
    //deciding which shell the ball is under
    const randomShell = Math.ceil(Math.random() * 3);
    // console.log('the winning shell is', randomShell);

    // if randomShell is = 1 - increment the wins
    // else increment the losses
    if (randomShell === 1) {
        shell1.classList.add('reveal');
        wins++;
    } else if (randomShell === 2) {
        shell2.classList.add('reveal');
        losses++;
    } else {
        shell3.classList.add('reveal');
        losses++;
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