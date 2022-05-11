export default class JCGlossyCards {
  loadContent(url: string): Promise<Response>;
}

export interface JCGlossyCardItem {
  img: string;
  href: string;
  title: string;
}
export interface JCGlossyCardsConfigObject {}
