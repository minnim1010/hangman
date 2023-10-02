class Answer {

  letterList;

  constructor(word) {
    this.letterList = word.split("");
  }

  findIndexes(matchLetter){
    return this.letterList.reduce((indexList, letter, i) => {
      if(letter === matchLetter){
        indexList.push(i);
      }
      return indexList;
    }, [])
  }
}

export {Answer}