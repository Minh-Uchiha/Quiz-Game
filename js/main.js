import { setTimer, startOver, submitScore } from "./menu.js";
import { createQuestionList, displayQuestion, hightlightClickedAndCheckAnswer, nextQuiz, showHint, prevQuiz } from "./question_board.js";
import { restartScorePanel } from "./score_panel.js";

const title = document.querySelector('title').innerText;

// Create the list of questions
createQuestionList(title);

// Display the question
displayQuestion();

// Show hint when the hint button is clicked
showHint();

// Hightlight the chosen answer and check whether it is correct or not
hightlightClickedAndCheckAnswer();

// Add functionality to the right arrow button
nextQuiz();

// Add functionality to the left arrow button
prevQuiz();

// Set timer
setTimer();

// Handle event of submit button
submitScore();

// Handle event of start over button
startOver();

// Handle event of restart button inside the score panel
restartScorePanel();