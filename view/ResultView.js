import {HtmlElementUtil} from "../util/HtmlElementUtil.js";

class ResultView {
  ROOT_ELEMENT_CLASS = 'image-container';
  ELEMENT_CLASS = 'image';

  rootElement;
  imgElement;
  byStatus = {
    statusValue: "실패",
    imgSrc: "img/dead.png"
  };

  constructor(domRoot, status, answer) {
    this.rootElement = HtmlElementUtil.createDiv("", this.ROOT_ELEMENT_CLASS);
    HtmlElementUtil.appendElement(domRoot, this.rootElement);

    this.setByStatus(status);

    this.render(answer);
  }

  setByStatus(status) {
    if (status === "success") {
      this.byStatus.statusValue = "성공";
      this.byStatus.imgSrc = "img/alive.png";
    }
  }

  render(answer) {
    this.createH1Element(this.byStatus.statusValue);
    this.imgElement = this.createImgElement();
    this.createH1Element(`정답은 ${answer}입니다.`);
  }

  createH1Element(text) {
    const element = HtmlElementUtil.createH1(text);
    HtmlElementUtil.appendElement(this.rootElement, element);
    return element;
  }

  createImgElement() {
    const imgElement = HtmlElementUtil.createImg(
      this.ELEMENT_CLASS, "hangman", this.byStatus.imgSrc);
    HtmlElementUtil.appendElement(this.rootElement, imgElement);
    return imgElement;
  }
}

export {ResultView}