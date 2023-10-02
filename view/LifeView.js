import {HtmlElementUtil} from "../util/HtmlElementUtil.js";

class LifeView {

  ROOT_ELEMENT_CLASS = 'image-container';
  ELEMENT_CLASS = 'image';

  rootElement;
  life;
  imgElement;

  constructor(DomRoot, life) {
    this.rootElement = HtmlElementUtil.createDiv("", this.ROOT_ELEMENT_CLASS);
    HtmlElementUtil.appendElement(DomRoot, this.rootElement);
    this.life = life;
    this.imgElement = this.createImgElement();
  }

  createImgElement() {
    const imgElement = HtmlElementUtil.createImg(
      this.ELEMENT_CLASS, "hangman", this.getImageSrcByRemainLife());
    HtmlElementUtil.appendElement(this.rootElement, imgElement);
    return imgElement;
  }

  render() {
    this.imgElement.src = this.getImageSrcByRemainLife();
  }

  getImageSrcByRemainLife() {
    let imgNum = this.life.remain <= 0 ? 0 : this.life.remain;
    return `img/life_${imgNum}.png`;
  }
}

export {LifeView}