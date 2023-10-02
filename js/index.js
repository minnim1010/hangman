import {AnswerCandidateListView} from "../view/AnswerCandidateListView.js";

window.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
  const root = getRootElement();
  new AnswerCandidateListView(root);
}

function getRootElement() {
  return document.getElementById("root");
}