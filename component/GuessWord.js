class GuessWord {
  constructor(word, parentElement) {
    this.word = Array.from(word, () => "");
    this.parentElement = parentElement;
  }

  setAlphabet(indexList, c){
    indexList.forEach(index => {
      if (index >= 0 && index < this.word.length){
        this.word[index] = c;
      }
    })
    this.render();
  }

  isDone(){
    return !this.word.some(elem => elem === "");
  }

  render(){
    while (this.parentElement.firstChild) {
      this.parentElement.removeChild(this.parentElement.firstChild);
    }
    this.word.forEach(ch => {
      const element = this.createElement(ch);
      this.parentElement.appendChild(element);
    })
  }

  createElement(c){
    const element = document.createElement('div');
    element.textContent = (c === "") ? "_" : c;
    element.classList.add('word-letter');
    return element;
  }
}

export {GuessWord}