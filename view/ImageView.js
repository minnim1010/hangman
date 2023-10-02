import {HtmlElementUtil} from "../util/HtmlElementUtil.js";

class ImageView {
  ROOT_ELEMENT_CLASS = 'image-container';
  ELEMENT_CLASS = 'image';

  rootElement;
  imgElement;

  constructor(domRoot, status) {
    this.rootElement = HtmlElementUtil.createDiv("", this.ROOT_ELEMENT_CLASS);
    HtmlElementUtil.appendElement(domRoot, this.rootElement);
    this.imgElement = this.createImgElement(status);
  }

  createImgElement(status) {
    const imgElement = HtmlElementUtil.createImg(
      this.ELEMENT_CLASS, "hangman", this.getImageSrcByStatus(status));
    HtmlElementUtil.appendElement(this.rootElement, imgElement);
    return imgElement;
  }

  getImageSrcByStatus(status) {
    if (status === "success") {
      return this.getSuccessImageSrc();
    } else {
      return this.getFailImageSrc();
    }
  }

  getSuccessImageSrc() {
    return "img/alive.png";
  }

  getFailImageSrc() {
    return "img/dead.png";
  }
}

export {ImageView}