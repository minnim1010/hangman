class GuessHistory {
  history = []

  constructor(parentElement) {
    this.parentElement = parentElement;
  }

  add(c){
    this.history.push(c)

    const historyElement = this.createHistoryElement(c);
    this.render(historyElement);
  }

  createHistoryElement(c){
    const element = document.createElement('div');
    element.textContent = c;
    element.classList.add('history-letter');
    return element;
  }

  render(element){
    this.parentElement.appendChild(element);
  }
}

export {GuessHistory}