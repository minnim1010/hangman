class HtmlElementUtil {
  static createDiv(textContent, classList) {
    const element = document.createElement('div');
    element.textContent = textContent;
    element.classList.add(classList);
    return element;
  }

  static createImg(classList, alt, src) {
    const element = document.createElement('img');
    element.classList.add(classList);
    element.alt = alt;
    element.src = src;
    return element;
  }

  static appendElement(parentElement, childElement) {
    parentElement.appendChild(childElement);
  }

  static removeContent(element) {
    element.innerText = "";
  }
}

export {HtmlElementUtil}