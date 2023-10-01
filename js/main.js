import {Answer} from "../component/Answer.js";
import {GuessWord} from "../component/GuessWord.js";
import {GuessHistory} from "../component/GuessHistory.js";
import {Life} from "../component/Life.js";
import {Alphabet} from "../component/Alphabet.js";
import {Constants} from "../constant/Constants.js";

const hangman = {
  answer: undefined,
  guessWord: undefined,
  guessHistory: undefined,
  life: undefined
};

window.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
  const answerString = getAnswerString();
  hangman.answer = new Answer(answerString);
  hangman.guessWord = new GuessWord(answerString, getWordContainerElement());
  hangman.guessHistory = new GuessHistory(getHistoryContainerElement());
  hangman.life = new Life();

  render();
}

function getAnswerString() {
  let item = sessionStorage.getItem(Constants.ANSWER_STRING_KEY);
  sessionStorage.removeItem(Constants.ANSWER_STRING_KEY);
  return item;
}

function getHistoryContainerElement() {
  return document.getElementsByClassName('history-container').item(0);
}

function getWordContainerElement() {
  return document.getElementsByClassName('word-container').item(0);
}

function render() {
  renderAlphabetsView();
}

function renderAlphabetsView() {
  const alphabetContainer
    = document.getElementsByClassName('alphabet-container').item(0);
  const alphabetLetters
    = Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i));
  alphabetLetters.forEach(letter => {
    const alphabet = new Alphabet(letter, hangman);
    alphabet.render(alphabetContainer);
  })
}
