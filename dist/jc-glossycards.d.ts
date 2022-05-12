import { JCGlossyCardItem, JCGlossyCardsConfigObject } from "./jc-glossycards.d";
export default class JCGlossyCards {
    items: JCGlossyCardItem[];
    constructor(config?: JCGlossyCardsConfigObject);
    /**
     *
     * @param items Items to render
     */
    setItems(items: JCGlossyCardItem[]): void;
    initialize(): void;
    attach(document: Document): void;
    private generateNavButton;
    private generateCard;
}
