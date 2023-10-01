import {Constants} from "../constant/Constants.js";

class Life {
  constructor() {
    this.remain = Constants.TOTAL_LIFE;
  }

  decreaseLife(){
    this.remain -= 1;
  }

  isDead(){
    return this.remain < 0;
  }
}

export {Life}