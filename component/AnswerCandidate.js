import {Words} from "../constant/Words.js";

class AnswerCandidate {

  word;

  constructor() {
    this.word = this.getAnswerCandidateString();
  }

  getAnswerCandidateString() {
    const randomIndex = Math.floor(Math.random() * Words.length);
    return Words[randomIndex];
  }
}

export {AnswerCandidate}