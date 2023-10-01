class GuessHistory {
  history = []

  add(c){
    this.history.push(c)
  }

  getHistory(){
    const copy = [...this.history];
    Object.freeze(copy);
    return copy;
  }
}

export {GuessHistory}