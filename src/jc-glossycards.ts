import { JCGlossyCardItem, JCGlossyCardsConfigObject } from "./jc-glossycards.d";

export default class JCGlossyCards {
  items: JCGlossyCardItem[];

  constructor(config?: JCGlossyCardsConfigObject) {}

  /**
   * 
   * @param items Items to render
   */
  setItems(items: JCGlossyCardItem[]) {
    this.items = items;
  }
}
