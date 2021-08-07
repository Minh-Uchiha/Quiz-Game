import { ans_check } from "./question_board.js";

const scoreDisplay = document.querySelector('h3.score')
const score_panel = document.querySelector('section.score_display')

let score = 0;

export function displayScore() {
    score = 0;
    ans_check.forEach( ans => {
        if ( ans === true ) score += 10;
    })
    scoreDisplay.innerHTML = score;
    score_panel.style.display = 'flex';
}