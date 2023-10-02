import {HtmlElementUtil} from "../util/HtmlElementUtil.js";
import {Constants} from "../constant/Constants.js";
import {AnswerCandidate} from "../component/AnswerCandidate.js";
import {AnswerCandidateView} from "./AnswerCandidateView.js";

class AnswerCandidateListView {

  ELEMENT_CLASS = 'answer-candidate-container';

  element;

  constructor(DomRoot) {
    this.element = HtmlElementUtil.createDiv("", this.ELEMENT_CLASS);
    HtmlElementUtil.appendElement(DomRoot, this.element);

    this.render();
  }

  render() {
    for (let i = 0; i < Constants.ANSWER_CANDIDATE_SIZE; ++i) {
      const answerCandidate = new AnswerCandidate();
      const answerCandidateView = new AnswerCandidateView(answerCandidate);
      answerCandidateView.render(this.element)
    }
  }
}

export {AnswerCandidateListView}