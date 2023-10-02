import {Constants} from "../constant/Constants.js";
import {SessionStorageUtil} from "../util/SessionStorageUtil.js";
import {Url} from "../constant/Url.js";
import {HtmlElementUtil} from "../util/HtmlElementUtil.js";

class AnswerCandidateView {
  ELEMENT_CLASS = 'answer-candidate';

  answerCandidate;
  element;

  constructor(answerCandidate) {
    this.answerCandidate = answerCandidate;
    this.element = HtmlElementUtil.createDiv(answerCandidate.word, this.ELEMENT_CLASS);
    this.addClickEvent();
  }

  addClickEvent() {
    this.element.addEventListener('click', event => this.handleClick(event));
  }

  handleClick() {
    SessionStorageUtil.set(Constants.ANSWER_STRING_KEY, this.answerCandidate.word);
    location.href = Url.GUESS_WORD;
  }

  render(parentElement) {
    HtmlElementUtil.appendElement(parentElement, this.element);
  }
}

export {AnswerCandidateView}