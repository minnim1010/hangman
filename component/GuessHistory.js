class GuessHistory {

  constructor(parentElement) {
    this.history = [];
    this.parentElement = parentElement;
  }

  add(letter){
    this.history.push(letter)

    const element = this.createElement(letter);
    this.renderNewElement(element);
  }

  createElement(letter){
    const element = document.createElement('div');
    element.textContent = letter;
    element.classList.add('history-letter');
    return element;
  }

  renderNewElement(element){
    this.parentElement.appendChild(element);
  }
}

export {GuessHistory}