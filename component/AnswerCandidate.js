import {Words} from "../constant/Words.js";
import {Constants} from "../constant/Constants.js";

class AnswerCandidate {
  constructor() {
    this.word = this.getAnswerCandidateString();

    this.createElement();
    this.addClickEvent();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.textContent = this.word;
    this.element.classList.add('answer');
  }

  addClickEvent() {
    this.element.addEventListener('click', () => this.handleClick());
  }

  handleClick() {
    sessionStorage.setItem(Constants.ANSWER_STRING_KEY, this.word);
    location.href = "/hangman/main.html";
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