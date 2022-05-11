import {
  JCGlossyCardItem,
  JCGlossyCardsConfigObject,
} from "./jc-glossycards.d";

const config = {
  selectors: {
    attachElements: ".jc-glossycards",
  },
  classNames : {
    cards: {
      root : 'jc-glossycard',
      img: 'jc-gc__img',
      bgElement : `jc-gc__bg`
    }
  }
};

export default class JCGlossyCards {
  items: JCGlossyCardItem[];

  constructor(config?: JCGlossyCardsConfigObject) {
    this.items = [];
  }

  /**
   *
   * @param items Items to render
   */
  setItems(items: JCGlossyCardItem[]) {
    this.items = items;
  }

  initialize() {
    this.attach(document);
  }

  attach(document: Document) {
    document
      .querySelectorAll(config.selectors.attachElements)
      .forEach((element: Element) => {
        this.items.forEach((item) => {
          this.generateCard(document, item, element);
        });
      });
  }

  private generateCard(
    document: Document,
    item: JCGlossyCardItem,
    element: Element
  ) {
    const rootElement = document.createElement("div");
    rootElement.classList.add(config.classNames.cards.root)    

    const bgElement = document.createElement("div");
    bgElement.classList.add(config.classNames.cards.bgElement)        
    bgElement.style.backgroundImage = `url(${item.img})`

    const imageElement = document.createElement("img");  
    imageElement.classList.add(config.classNames.cards.img)
    imageElement.src = item.img  
    
    rootElement.appendChild(bgElement);
    rootElement.appendChild(imageElement);
    element.appendChild(rootElement);
  }
}
