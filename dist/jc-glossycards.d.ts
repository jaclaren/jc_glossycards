import { JCGlossyCardItem, JCGlossyCardsConfigObject } from "./jc-glossycards.d";
export default class JCGlossyCards {
    items: JCGlossyCardItem[];
    page: number;
    visibility: {
        leftNavButton: boolean;
        rightNavButton: boolean;
    };
    constructor(config?: JCGlossyCardsConfigObject);
    /**
     *
     * @param items Items to render
     */
    setItems(items: JCGlossyCardItem[]): void;
    initialize(): void;
    attach(document: Document): void;
    /**
     * Generates nav buttons
     * @param document
     * @param element root glossycard element
     */
    private generateNavButtons;
    /**
     * Calculates the width for an individual card
     *
     * @param element Root element
     * @param itemsPerRow
     * @param padding
     * @returns
     */
    private calculateCardWidth;
    getLastPageIndex(): number;
    previousPage(rowElement: HTMLElement | null, rootElement: HTMLElement): void;
    refresh(): void;
    nextPage(rowElement: HTMLElement | null, rootElement: HTMLElement): void;
    renderElementTransition(element: HTMLElement, rootElement: HTMLElement): void;
    private generateNavButton;
    /**
     * Generates a card
     *
     * @param document
     * @param item
     * @param element
     * @param attrs
     */
    private generateCard;
}
