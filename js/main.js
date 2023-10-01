import {Answer} from "../component/Answer.js";
import {GuessWord} from "../component/GuessWord.js";
import {GuessHistory} from "../component/GuessHistory.js";
import {Life} from "../component/Life.js";

let answer;
let guessWord;
let guessHistory;
let life;

function onLoad(){
  const answerString = getAnswerString();
  answer = new Answer(answerString);
  guessWord = new GuessWord(answerString);
  guessHistory = new GuessHistory();
  life = new Life();
}

function getAnswerString(){
  return "cccccc";
}

window.addEventListener('DOMContentLoaded', onLoad);