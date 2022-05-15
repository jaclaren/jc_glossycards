/**
 * Generates the HTML elements for the card
 *
 * @param classNames
 * @param onClickEvent
 * @param text
 */
import { JCGlossyCardItem } from "../jc-glossycards.d";
export declare const generateNavButton: (classNames: string[], onClickEvent: Function, text: string) => HTMLElement;
export declare const generateCard: (document: Document, item: JCGlossyCardItem, element: Element, attrs: {
    width?: number;
    padding?: number;
}, config: any) => HTMLElement;
