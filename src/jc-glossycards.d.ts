export default class JCGlossyCards {
    loadContent(url: string): Promise<Response>;
}

export interface JCGlossyCardItem {
    image: string;
    href: string;
  }
  export interface JCGlossyCardsConfigObject { }
  