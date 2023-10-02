class GuessWord {

  word;

  constructor(word) {
    this.word = Array.from(word, () => "");
  }

  setAlphabet(indexList, letter) {
    indexList.forEach(index => {
      this.word[index] = letter;
    })
  }

  isCompleted(){
    return !this.word.includes("");
  }
}

export {GuessWord}