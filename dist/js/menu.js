import { displayScore } from "./calculate_score.js"

const btn_submit = document.querySelector('.btns .give_up')
const btn_restart = document.querySelector('.btns .restart')
const time = document.querySelector('.time p')

let minute = 15, second = 0
let minuteText, secondText

export function setTimer() {

    let startCountDown = setInterval( () => {

        second = ( second == 0 ) ? 59 : second - 1;
        if ( second == 59 ) minute --;

        minuteText = ''
        secondText = ''
        if ( minute < 10 ) minuteText = '0'
        if ( second < 10 ) secondText = '0'
        minuteText += minute
        secondText += second
        updateTime()

        if ( minute == 0 && second == 0 ) {
            displayScore();
            clearInterval(startCountDown);
        }

    }, 1000)
}

function updateTime() {
    time.innerText = minuteText + ':' + secondText;
}

export function submitScore() {

    btn_submit.addEventListener('click', () => {
        displayScore();
    })

}

export function startOver() {
    btn_restart.addEventListener('click', () => {
        location.reload();
    })
}

