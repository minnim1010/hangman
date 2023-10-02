import {Words} from "../constant/Words.js";
import {Constants} from "../constant/Constants.js";
import {SessionStorageUtil} from "../util/SessionStorageUtil.js";
import {Url} from "../constant/Url.js";

class AnswerCandidate {

  ROOT_ELEMENT_CLASS = 'answer-candidate-container';
  ELEMENT_CLASS = 'answer-candidate';

  word;

  constructor() {
    this.word = this.getAnswerCandidateString();

    this.createElement();
    this.addClickEvent();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.textContent = this.word;
    this.element.classList.add(this.ELEMENT_CLASS);
  }

  addClickEvent() {
    this.element.addEventListener('click', () => this.handleClick());
  }

  handleClick() {
    SessionStorageUtil.set(Constants.ANSWER_STRING_KEY, this.word);
    location.href = Url.GUESS_WORD;
  }

  getAnswerCandidateString() {
    const randomIndex = Math.floor(Math.random() * Words.length);
    return Words[randomIndex];
  }

  render(parentElement){
    parentElement.appendChild(this.element);
  }
}

export {AnswerCandidate}