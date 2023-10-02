import {HtmlElementUtil} from "../util/HtmlElementUtil.js";
import {Url} from "../constant/Url.js";

class AlphabetView {

  ELEMENT_CLASS = 'alphabet-button';

  alphabet;
  hangman;
  element;

  constructor(alphabet, hangman) {
    this.alphabet = alphabet;
    this.hangman = hangman;
    this.element = HtmlElementUtil.createDiv(alphabet.letter, this.ELEMENT_CLASS);
    this.addClickEvent();
  }

  addClickEvent() {
    this.element.addEventListener('click', () => this.handleClick());
  }

  handleClick() {
    let letter = this.alphabet.letter.toLowerCase();
    let indexes = this.hangman.answer.findIndexes(letter);

    if (indexes.length === 0) {
      this.handleWrongAlphabet();
    } else {
      this.element.remove();
      this.handleCorrectAlphabet(letter, indexes);
    }

    this.hangman.guessHistoryView.renderNewHistoryElement(letter);
  }

  handleWrongAlphabet() {
    this.element.style.backgroundColor = "#ff7e6e";

    this.hangman.lifeView.life.decreaseLife();
    if (this.hangman.lifeView.life.isDead()) {
      location.href = Url.GUESS_FAIL;
    }
    this.hangman.lifeView.render();
  }

  handleCorrectAlphabet(alphabet, indexes) {
    this.hangman.guessWordView.guessWord.setAlphabet(indexes, alphabet);
    if (this.hangman.guessWordView.guessWord.isCompleted()) {
      location.href = Url.GUESS_SUCCESS;
    }
    this.hangman.guessWordView.render();
  }

  render(parentElement) {
    HtmlElementUtil.appendElement(parentElement, this.element);
  }
}

export {AlphabetView}