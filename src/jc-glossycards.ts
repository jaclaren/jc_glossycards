import {
  JCGlossyCardItem,
  JCGlossyCardsConfigObject,
} from "./jc-glossycards.d";
import { generateCard, generateNavButton } from "./lib/domutils.js";

const config = {
  padding: 10,
  numItems: 7,
  selectors: {
    attachElements: ".jc-glossycards",
    contentElement: `.jc-gc__content`,
    rowElement: `.jc-gc__row`,
  },
  classNames: {
    navButtons: {
      root: `jc-gc__navbutton`,
      abbreviation: `jc-gc__nb`,
    },
    cards: {
      root: "jc-glossycard",
      img: "jc-gc__img",
      bgElement: `jc-gc__bg`,
      titleElement: `jc-gc__title`,
      glossElement: `jc-gc__gloss`,
      wrapper: `jc-gc__wrapper`,
    },
  },
};

export default class JCGlossyCardList {
  rootElement: HTMLElement;  
  contentElement: HTMLElement;  
  rowElement: HTMLElement;  

  currentPage: number;

  /**
   * 
   * @param element Root element of the card list
   */
  constructor(element: HTMLElement) {
    if(!element) throw new Error("Invalid element")

    this.rootElement = element;            
    this.contentElement = element.querySelector(config.selectors.contentElement) as HTMLElement;        
    this.rowElement = element.querySelector(config.selectors.rowElement) as HTMLElement;        

    this.currentPage = 0;
    
    const rightButton = generateNavButton([config.classNames.navButtons.root, `${config.classNames.navButtons.abbreviation}-right`], () => {
      this.nextPage()
    }, ``)

    const leftButton = generateNavButton([config.classNames.navButtons.root, `${config.classNames.navButtons.abbreviation}-left`], () => {
      this.previousPage()
    }, ``)


    this.rootElement.appendChild(leftButton)
    this.rootElement.appendChild(rightButton)
  }

  /**
   * Sets the slider to the correct page
   * @param index 
   */
  setPage(index:number) {
    this.rowElement.style.transform = `translate3d(-${this.rootElement.offsetWidth*index}px, 0, 0)`;    
    this.currentPage = index;
  }

  /**
   * Sets scoller to the next page
   */
   nextPage() {    
    this.setPage(this.currentPage+1)
  }

  /**
   * Sets scoller to the previous page
   */
  previousPage() {    
    this.setPage(this.currentPage-1)
  }

  /**
   * Sets the data, generates the DOM elements and attaches them to the list
   * @param items 
   */
  setData(items: JCGlossyCardItem[]) {
    items.forEach(item => {
      generateCard(document, item, this.rowElement, {}, config)
    })
  }
}

// export default class JCGlossyCards {
//   items: JCGlossyCardItem[];
//   page: number;
//   visibility: {
//     leftNavButton: boolean,
//     rightNavButton: boolean,
//   };

//   constructor(config?: JCGlossyCardsConfigObject) {
//     this.items = [];
//     this.page = 0;

//     this.visibility = {
//       leftNavButton: false,
//       rightNavButton: false,
//     }
//   }

//   /**
//    *
//    * @param items Items to render
//    */
//   setItems(items: JCGlossyCardItem[]) {
//     this.items = items;
//   }

//   initialize() {
//     this.attach(document);
//     this.refresh()
//   }

//   attach(document: Document) {
//     document
//       .querySelectorAll(config.selectors.attachElements)
//       .forEach((element: any) => {
//         const rowElement = element.querySelector(config.selectors.rowElement);

//         this.generateNavButtons(document, element);

//         this.items.forEach((item) => {
//           const padding = config.padding;

//           this.generateCard(document, item, rowElement, {
//             width: this.calculateCardWidth(element, config.numItems, padding),
//             padding,
//           });
//         });
//       });
//   }

//   /**
//    * Generates nav buttons
//    * @param document
//    * @param element root glossycard element
//    */

//   private generateNavButtons(document: Document, element: any) {
//     this.generateNavButton(`${config.classNames.navButtons.abbreviation}-left`, document, element, () => this.previousPage(
//       element.querySelector(config.selectors.rowElement),
//       element
//     )
//     );

//     this.generateNavButton(`${config.classNames.navButtons.abbreviation}-right`, document, element, () => this.nextPage(
//       element.querySelector(config.selectors.rowElement),
//       element
//     )
//     );
//   }

//   /**
//    * Calculates the width for an individual card
//    *
//    * @param element Root element
//    * @param itemsPerRow
//    * @param padding
//    * @returns
//    */
//   private calculateCardWidth(
//     element: any,
//     itemsPerRow: number,
//     padding: number
//   ): number | undefined {
//     return element.offsetWidth / itemsPerRow - padding * 2;
//   }

//   getLastPageIndex() {
//     return Math.ceil(this.items.length / config.numItems)
//   }

//   previousPage(rowElement: HTMLElement | null, rootElement: HTMLElement): void {

//     if(this.page >= 1) {
//       this.page--;
//     } else {
//       this.visibility.leftNavButton = false
//     }

//     if (!!rowElement) this.renderElementTransition(rowElement, rootElement);

//     this.refresh()
//   }

//   refresh() {
//     const leftButton = document.querySelector(`.${config.classNames.navButtons.abbreviation}-left`) as HTMLElement;
//     const rightButton = document.querySelector(`.${config.classNames.navButtons.abbreviation}-right`) as HTMLElement;

//     leftButton.style.visibility = this.page >= 1 ? `inherit` : `hidden`;
//     rightButton.style.visibility = this.page <= this.getLastPageIndex()-2 ? `inherit` : `hidden`;
//   }

//   nextPage(rowElement: HTMLElement | null, rootElement: HTMLElement): void {
//     // if(this.page >= 1)
//     this.page++;
//     if (!!rowElement) this.renderElementTransition(rowElement, rootElement);
//     this.refresh()
//   }

//   renderElementTransition(
//     element: HTMLElement,
//     rootElement: HTMLElement
//   ): void {
//     element.style.transform = `translate3d(-${
//       rootElement.offsetWidth * this.page
//     }px, 0, 0)`;
//   }

//   /**
//    * Generates a card
//    *
//    * @param document
//    * @param item
//    * @param element
//    * @param attrs
//    */

//   private generateCard(
//     document: Document,
//     item: JCGlossyCardItem,
//     element: Element,
//     attrs: {
//       width?: number;
//       padding?: number;
//     }
//   ) {
//     const rootElement = document.createElement("div");
//     rootElement.classList.add(config.classNames.cards.root);
//     rootElement.style.flexBasis = `${attrs.width}px`;
//     rootElement.style.padding = `${attrs.padding}px`;

//     const wrapperElement = document.createElement("div");
//     wrapperElement.classList.add(config.classNames.cards.wrapper);

//     const glossElement = document.createElement("div");
//     glossElement.classList.add(config.classNames.cards.glossElement);

//     const bgElement = document.createElement("div");
//     bgElement.classList.add(config.classNames.cards.bgElement);
//     bgElement.style.backgroundImage = `url(${item.img})`;

//     const imageElement = document.createElement("img");
//     imageElement.classList.add(config.classNames.cards.img);
//     imageElement.src = item.img;

//     const titleElement = document.createElement("div");
//     titleElement.classList.add(config.classNames.cards.titleElement);
//     titleElement.innerHTML = item.title;

//     rootElement.appendChild(wrapperElement);
//     wrapperElement.appendChild(bgElement);
//     wrapperElement.appendChild(glossElement);
//     wrapperElement.appendChild(imageElement);
//     wrapperElement.appendChild(titleElement);

//     element.appendChild(rootElement);
//   }
// }
