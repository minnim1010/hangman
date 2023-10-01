import {AnswerCandidate} from "../component/AnswerCandidate.js";
import {Constants} from "../constant/Constants.js";

window.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
  renderAnswerCandidate();
}

function renderAnswerCandidate() {
  const answerCandidateContainer
    = document.getElementsByClassName('answer-candidate-container').item(0);

  for (let i = 0; i < Constants.ANSWER_CANDIDATE_SIZE; ++i) {
    const answerCandidate = new AnswerCandidate();
    answerCandidate.render(answerCandidateContainer)
  }
}