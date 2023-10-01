import {Constants} from "../constant/Constants.js";

class Life {
  constructor(imgElement) {
    this.remain = Constants.TOTAL_LIFE;
    this.imgElement = imgElement;
  }

  decreaseLife(){
    this.remain -= 1;
  }

  isDead(){
    return this.remain < 0;
  }

  renderImageByRemain() {
    let imgNum = this.remain < 0 ? 0 : this.remain;
    this.imgElement.src = `img/life_${imgNum}.png`;
  }
}

export {Life}