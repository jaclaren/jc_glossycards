import { JCGlossyCardItem, JCGlossyCardsConfigObject } from "./jc-glossycards.d";
export default class JCGlossyCards {
    items: JCGlossyCardItem[];
    page: number;
    constructor(config?: JCGlossyCardsConfigObject);
    /**
     *
     * @param items Items to render
     */
    setItems(items: JCGlossyCardItem[]): void;
    initialize(): void;
    attach(document: Document): void;
    /**
     *
     * @param element Root element
     * @param itemsPerRow
     * @param padding
     * @returns
     */
    private calculateCardWidth;
    nextPage(rowElement: HTMLElement | null, rootElement: HTMLElement): void;
    private generateNavButton;
    private generateCard;
}
