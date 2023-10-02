import {HtmlElementUtil} from "../util/HtmlElementUtil.js";
import {Alphabet} from "../component/Alphabet.js";
import {AlphabetView} from "./AlphabetView.js";

class AlphabetListView {
  ELEMENT_CLASS = 'alphabet-container';

  element;
  hangman;

  constructor(hangman, domRoot) {
    this.hangman = hangman;

    this.element = HtmlElementUtil.createDiv("", this.ELEMENT_CLASS);
    HtmlElementUtil.appendElement(domRoot, this.element);

    this.render();
  }

  render() {
    const alphabetLetters = Array.from(
      {length: 26}, (_, i) => String.fromCharCode(65 + i));

    alphabetLetters.forEach(letter => {
      let alphabet = new Alphabet(letter);
      let alphabetView = new AlphabetView(alphabet, this.hangman);
      alphabetView.render(this.element);
    })
  }
}

export {AlphabetListView}