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

  navButtonLeft: HTMLElement;
  navButtonRight: HTMLElement;

  currentPage: number;
  cardWidth: number = -1; 
  lastElementX : number = -1    // We need to set this early, because the css transition affects it's value
  isAtLastPage: boolean = false;

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
    
    this.navButtonRight = generateNavButton([config.classNames.navButtons.root, `${config.classNames.navButtons.abbreviation}-right`], () => {
      this.nextPage()
    }, `>`)

    this.navButtonLeft = generateNavButton([config.classNames.navButtons.root, `${config.classNames.navButtons.abbreviation}-left`], () => {
      this.previousPage()
    }, `<`)

    this.rootElement.appendChild(this.navButtonLeft)
    this.rootElement.appendChild(this.navButtonRight)

    this.refresh()
  }

  refresh() {
    if(this.isFirstPage())
      this.hideElement(this.navButtonLeft)
        else
      this.showElement(this.navButtonLeft)

    if(this.isAtLastPage)
      this.hideElement(this.navButtonRight)
        else
      this.showElement(this.navButtonRight)
  }
  
  hideElement(element: HTMLElement) {
    element.classList.add('hidden')
  }
  
  showElement(element: HTMLElement) {
    // element.style.display = `inherit`
    element.classList.remove('hidden')
  }

  /**
   * Returns the px offset of the last card in the scroller
   */
   getLastCardX():number {
    const lastCard = this.rowElement.children.item(this.rowElement.children.length - 1) as HTMLElement; 
    return lastCard.getBoundingClientRect().x        
  }

  hasMorePages() {
    return true
  }

  isFirstPage() {
    return this.currentPage == 0;
  }

  /**
   * Sets the internal page index
   * @param index 
   */
  setPage(index:number) {
    const newX = this.rootElement.offsetWidth*index        
    this.isAtLastPage = newX + this.rootElement.clientWidth > this.lastElementX
    
    const newValue = this.isAtLastPage ? (this.lastElementX-this.rootElement.clientWidth) : newX;
    const buffer = this.cardWidth 

    this.rowElement.style.transform = `translate3d(-${newValue >= 0 ? newValue : 0}px, 0, 0)`;    
    this.currentPage = index;
    this.refresh()
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
      const card = generateCard(document, item, this.rowElement, {}, config)
      this.rowElement.appendChild(card)
      this.cardWidth = card.offsetWidth
    })    

    this.lastElementX = this.getLastCardX()
  }
}