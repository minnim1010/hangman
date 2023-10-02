import {HtmlElementUtil} from "../util/HtmlElementUtil.js";

class GuessWordView {
  ROOT_ELEMENT_CLASS = 'word-container';
  ELEMENT_CLASS = 'word-letter';

  rootElement;
  guessWord;

  constructor(DomRoot, guessWord) {
    this.rootElement = HtmlElementUtil.createDiv("", this.ROOT_ELEMENT_CLASS);
    HtmlElementUtil.appendElement(DomRoot, this.rootElement);
    this.guessWord = guessWord;

    this.render();
  }

  render() {
    HtmlElementUtil.removeContent(this.rootElement);

    this.guessWord.word.forEach(letter => {
      const element = this.createElement(letter);
      this.rootElement.appendChild(element);
    })
  }

  createElement(letter) {
    const textContent = (letter === "") ? "_" : letter;
    return HtmlElementUtil.createDiv(textContent, this.ELEMENT_CLASS);
  }
}

export {GuessWordView}