import {HtmlElementUtil} from "../util/HtmlElementUtil.js";

class GuessHistoryView {

  ROOT_ELEMENT_CLASS = 'history-container';
  ELEMENT_CLASS = 'history-letter';

  rootElement;
  guessHistory;

  constructor(DomRoot, guessHistory) {
    this.rootElement = HtmlElementUtil.createDiv("", this.ROOT_ELEMENT_CLASS);
    HtmlElementUtil.appendElement(DomRoot, this.rootElement);

    this.guessHistory = guessHistory;
  }

  renderNewHistoryElement(letter) {
    this.guessHistory.add(letter);

    const newElement = this.createHistoryElement(letter);
    this.rootElement.appendChild(newElement);
  }

  createHistoryElement(letter) {
    return HtmlElementUtil.createDiv(letter, this.ELEMENT_CLASS);
  }
}

export {GuessHistoryView}