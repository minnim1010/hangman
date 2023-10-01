class Alphabet {
  constructor(letter, hangman) {
    this.letter = letter;
    this.hangman = hangman;
    this.createElement();
    this.addClickEvent();
  }

  createElement(){
    this.element = document.createElement('div');
    this.element.textContent = this.letter;
    this.element.classList.add('keyboard-button');
  }

  addClickEvent(){
    this.element.addEventListener('click', () => this.handleClick());
  }

  handleClick() {
    let alphabet = this.letter.toLowerCase();
    let indexes = this.hangman.answer.findIndexes(alphabet);

    if (indexes.length === 0) {
      this.handleWrongAlphabet();
    } else {
      this.element.remove();
      this.handleCorrectAlphabet(alphabet, indexes);
    }

    this.hangman.guessHistory.add(alphabet);
  }

  handleWrongAlphabet() {
    this.hangman.life.decreaseLife();
    console.log(this.hangman.life.remain);
    if (this.hangman.life.isDead()) {
      location.href = "/hangman/fail.html";
    }
  }

  handleCorrectAlphabet(alphabet, indexes) {
    this.hangman.guessWord.setAlphabet(indexes, alphabet);
    if (this.hangman.guessWord.isCompleted()) {
      location.href = "/hangman/success.html";
    }
  }

  render(parentElement) {
    parentElement.appendChild(this.element);
  }
}

export {Alphabet}