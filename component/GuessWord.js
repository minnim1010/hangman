class GuessWord {
  constructor(word, parentElement) {
    this.word = Array.from(word, () => "");
    this.parentElement = parentElement;

    this.render();
  }

  // 알파벳을 설정하고 렌더링하는 메서드
  setAlphabet(indexList, c){
    indexList.forEach(index => {
      if (index >= 0 && index < this.word.length){
        this.word[index] = c;
      }
    })
    this.render();
  }

  // 단어 완성 여부를 확인하는 메서드
  isCompleted(){
    return !this.word.includes("");
  }

  // 현재 상태를 렌더링하는 메서드
  render(){
    this._removeAllChildren();

    this.word.forEach(letter => {
      const element = this.createElement(letter);
      this.parentElement.appendChild(element);
    })
  }

  // this.parentElement의 모든 자식 요소를 삭제하는 메서드
  _removeAllChildren(){
    while (this.parentElement.firstChild) {
      this.parentElement.removeChild(this.parentElement.firstChild);
    }
  }

  // 글자를 나타내는 HTML 요소를 생성하는 메서드
  createElement(letter){
    const element = document.createElement('div');
    element.textContent = (letter === "") ? "_" : letter;
    element.classList.add('word-letter');
    return element;
  }
}

export {GuessWord}