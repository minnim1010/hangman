import {HtmlElementUtil} from "../util/HtmlElementUtil.js";
import {Constants} from "../constant/Constants.js";
import {AnswerCandidate} from "../component/AnswerCandidate.js";

class AnswerCandidateListView {
  ROOT_ELEMENT_CLASS = 'answer-candidate-container';

  rootElement;

  constructor(DomRoot) {
    this.rootElement = HtmlElementUtil.createDiv("", this.ROOT_ELEMENT_CLASS);
    HtmlElementUtil.appendElement(DomRoot, this.rootElement);

    this.render();
  }

  render() {
    for (let i = 0; i < Constants.ANSWER_CANDIDATE_SIZE; ++i) {
      const answerCandidate = new AnswerCandidate();
      answerCandidate.render(this.rootElement)
    }
  }
}

export {AnswerCandidateListView}