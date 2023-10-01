class GuessWord {
  constructor(string) {
    this.word = Array.from(string, () => "");
  }

  setAlphabet(indexList, c){
    indexList.forEach(index => {
      if (index >= 0 && index < this.word.length){
        this.word[index] = c;
      }
    })
  }

  isDone(){
    return !this.word.some(elem => elem === "");
  }
}

export {GuessWord}