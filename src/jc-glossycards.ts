import {
  JCGlossyCardItem,
  JCGlossyCardsConfigObject,
} from "./jc-glossycards.d";

const config = {
  cardWidth: 185,
  selectors: {
    attachElements: ".jc-glossycards",
  },
  classNames : {
    cards: {
      root : 'jc-glossycard',
      img: 'jc-gc__img',
      bgElement : `jc-gc__bg`,
      titleElement: `jc-gc__title`,
      glossElement: `jc-gc__gloss`,
      wrapper: `jc-gc__wrapper`
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
      .forEach((element: any) => {
        this.items.forEach((item) => {  
          const padding = 6
          this.generateCard(document, item, element, {
            width: (element.offsetWidth / 6)-(padding*2),
            padding
          });
        });
      });
  }

  private generateCard(
    document: Document,
    item: JCGlossyCardItem,
    element: Element,
    attrs: {
      width?: number,
      padding?:number
    }
  ) {

    const rootElement = document.createElement("div");
    rootElement.classList.add(config.classNames.cards.root)    
    rootElement.style.flexBasis = `${attrs.width}px`    
    rootElement.style.padding = `${attrs.padding}px`    

    const wrapperElement = document.createElement("div");
    wrapperElement.classList.add(config.classNames.cards.wrapper)        

    const glossElement = document.createElement("div");
    glossElement.classList.add(config.classNames.cards.glossElement)            

    const bgElement = document.createElement("div");
    bgElement.classList.add(config.classNames.cards.bgElement)        
    bgElement.style.backgroundImage = `url(${item.img})`

    const imageElement = document.createElement("img");  
    imageElement.classList.add(config.classNames.cards.img)
    imageElement.src = item.img  
    
    const titleElement = document.createElement("div");  
    titleElement.classList.add(config.classNames.cards.titleElement)
    titleElement.innerHTML = item.title
    
    rootElement.appendChild(wrapperElement);
    wrapperElement.appendChild(bgElement);
    wrapperElement.appendChild(glossElement);
    wrapperElement.appendChild(imageElement);
    wrapperElement.appendChild(titleElement);

    element.appendChild(rootElement);
  }
}
