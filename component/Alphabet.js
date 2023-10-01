class Alphabet {
  constructor(letter, hangman) {
    this.letter = letter;
    this.element = document.createElement('div');
    this.element.textContent = letter;
    this.element.classList.add('keyboard-button');
    this.element.addEventListener('click', this.handleClick.bind(this, hangman));
  }

  handleClick(hangman) {
    let alphabet = this.letter.toLowerCase();
    console.log(alphabet);
    let indexes = hangman.answer.findIndexes(alphabet);
    if (indexes.length === 0) {
      hangman.life.decreaseLife();
      console.log(hangman.life.remain);
      if(hangman.life.isDead()){
        console.log("Dead!");
      }
    } else {
      hangman.guessWord.setAlphabet(indexes, alphabet);
      if(hangman.guessWord.isDone()){
        console.log("Success!");
      }
    }
    hangman.guessHistory.add(alphabet);
  }

  render(parentElement) {
    parentElement.appendChild(this.element);
  }
}

export {Alphabet}