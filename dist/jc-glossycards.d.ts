import { JCGlossyCardItem } from "./jc-glossycards.d";
export default class JCGlossyCardList {
    rootElement: HTMLElement;
    contentElement: HTMLElement;
    rowElement: HTMLElement;
    currentPage: number;
    /**
     *
     * @param element Root element of the card list
     */
    constructor(element: HTMLElement);
    /**
     * Sets the slider to the correct page
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
