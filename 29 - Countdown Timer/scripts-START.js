// function timer(seconds){
//     setInterval(function(){
//         if(seconds >= 0){
//             console.log(seconds);
//             seconds--;
//         }
//     },1000);
// }

let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval( () => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if(secondsLeft < 0){
            clearInterval(secondsLeft);
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000)
    // console.log({now, then});
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const remainerSeconds = seconds % 60;
    const display = `${minutes}:${remainerSeconds < 10 ? '0' + remainerSeconds : remainerSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;
    // console.log(display);
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const min = end.getMinutes();
    const sec = end.getSeconds();
    endTimeDisplay.textContent = `Be back @ ${hour > 12 ? hour - 12 : hour}:${min < 10 ? '0' + min : min}`
    // console.log({end,hour, min, sec})
}

function startTimer(){
    console.log(this.dataset)
}

buttons.forEach( button => button.addEventListener('click', startTimer))

// timer(2000)
// displayEndTime(Date.now())

