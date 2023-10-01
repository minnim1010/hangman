class Answer {

  constructor(word) {
    this.word = word;
  }

  findIndexes(c){
    const indexList = [];
    this.word.split("").forEach((elem, index) => {
      if(elem === c){
        indexList.push(index)
      }
    })
    return indexList;
  }
}

export {Answer}