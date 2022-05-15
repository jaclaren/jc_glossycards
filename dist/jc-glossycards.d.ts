import { JCGlossyCardItem } from "./jc-glossycards.d";
export default class JCGlossyCardList {
    rootElement: HTMLElement;
    contentElement: HTMLElement;
    rowElement: HTMLElement;
    navButtonLeft: HTMLElement;
    navButtonRight: HTMLElement;
    currentPage: number;
    cardWidth: number;
    lastElementX: number;
    isAtLastPage: boolean;
    /**
     *
     * @param element Root element of the card list
     */
    constructor(element: HTMLElement);
    refresh(): void;
    hideElement(element: HTMLElement): void;
    showElement(element: HTMLElement): void;
    /**
     * Returns the px offset of the last card in the scroller
     */
    getLastCardX(): number;
    hasMorePages(): boolean;
    isFirstPage(): boolean;
    /**
     * Sets the internal page index
     * @param index
     */
    setPage(index: number): void;
    /**
     * Sets scoller to the next page
     */
    nextPage(): void;
    /**
     * Sets scoller to the previous page
     */
    previousPage(): void;
    /**
     * Sets the data, generates the DOM elements and attaches them to the list
     * @param items
     */
    setData(items: JCGlossyCardItem[]): void;
}
