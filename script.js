const timeRunImg = document.querySelector('img');
timeRunImg.style.display = "none";

let hours = '0' + 0;
let minutes = '0' + 0;
let seconds = '0' + 0;
let mSec = 0;
let timer;
let milSec;
let isRunning = false;

function updateTime() {
    if (seconds === 59) {
        seconds = '0' + 0;
        if (minutes === 59) {
            minutes = '0' + 0;
            hours = '0' + 1;
        } else if (minutes < 9) {
            minutes++;
            minutes = '0' + minutes;
        } else {
            minutes++;
        }
    } else if (seconds < 9) {
        seconds++;
        seconds = '0' + seconds;
    } else {
        seconds++;

    }
    document.querySelector('#time p').innerHTML = `${hours} : ${minutes}: ${seconds}`;

}

function showMiliSec() {
    if (mSec === 10) {
        mSec = 0;
        mSec++;
    } else {
        mSec++;
    }
    document.querySelector('#ms').innerHTML = mSec;
}

function start() {
    if (isRunning === false) {
        timer = setInterval(updateTime, 1000)
        milSec = setInterval(showMiliSec, 100)
        isRunning = true;
    }
    timeRunImg.style.display = "block";
    document.querySelector('#start').style.display = "none";

}

function stop() {
    clearInterval(timer);
    clearInterval(milSec);
    isRunning = false;
    timeRunImg.style.display = "none";
    document.querySelector('#start').style.display = "block";


}

function reset() {
    hours = '0' + 0;
    minutes = '0' + 0;
    seconds = '0' + 0;
    mSec = "";
    document.querySelector('#time p').innerHTML = `${hours} : ${minutes}: ${seconds}`;
    document.querySelector('#ms').innerHTML = mSec;

    stop();
    document.querySelector('#start').style.display = "block";
    document.querySelector('#stop').style.display = "block";
}