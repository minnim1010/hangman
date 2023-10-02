import {Constants} from "../constant/Constants.js";
import {Url} from "../constant/Url.js";

import {SessionStorageUtil} from "../util/SessionStorageUtil.js";

import {Answer} from "../component/Answer.js";
import {GuessWord} from "../component/GuessWord.js";
import {GuessHistory} from "../component/GuessHistory.js";
import {Life} from "../component/Life.js";

import {AlphabetListView} from "../view/AlphabetListView.js";
import {LifeView} from "../view/LifeView.js";
import {GuessHistoryView} from "../view/GuessHistoryView.js";
import {GuessWordView} from "../view/GuessWordView.js";

const hangman = {
  answer: undefined,
  guessWordView: undefined,
  guessHistoryView: undefined,
  lifeView: undefined
};

window.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
  const answerString = getAnswerString();
  const root = getRootElement();

  hangman.answer = new Answer(answerString);
  hangman.lifeView = new LifeView(root, new Life());
  hangman.guessWordView = new GuessWordView(root, new GuessWord(answerString));
  hangman.guessHistoryView = new GuessHistoryView(root, new GuessHistory());
  new AlphabetListView(hangman, root);
}

function getAnswerString() {
  let item = SessionStorageUtil.getAndRemove(Constants.ANSWER_STRING_KEY);
  if (item === null) location.href = Url.SELECT_ANSWER_WORD;
  return item;
}

function getRootElement() {
  return document.getElementById("root");
}
