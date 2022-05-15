/**
 * Generates the HTML elements for the card
 *
 * @param classNames
 * @param onClickEvent
 * @param text
 */

import { JCGlossyCardItem } from "../jc-glossycards.d";

export const generateNavButton = (
  classNames: string[],
  onClickEvent: Function,
  text: string = ``
): HTMLElement => {
  const button = document.createElement(`div`);

  classNames.forEach((className) => button.classList.add(className));
  button.addEventListener("click", () => onClickEvent());

  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS(null, "viewBox", "0 0 185.343 185.34");

  let newpath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  newpath.setAttributeNS(
    null,
    "d",
    `M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
  l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
  c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z`
  );

  // button.innerHTML = text;
  svg.append(newpath);
  button.append(svg);

  return button;
};

export const generateCard = (
  document: Document,
  item: JCGlossyCardItem,
  element: Element,
  attrs: {
    width?: number;
    padding?: number;
  },
  config: any
): HTMLElement => {
  const rootElement = document.createElement("a");
  rootElement.href = item.href;
  rootElement.classList.add(config.classNames.cards.root);
  rootElement.style.flexBasis = `${attrs.width}px`;
  rootElement.style.padding = `${attrs.padding}px`;

  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add(config.classNames.cards.wrapper);

  const glossElement = document.createElement("div");
  glossElement.classList.add(config.classNames.cards.glossElement);

  const bgElement = document.createElement("div");
  bgElement.classList.add(config.classNames.cards.bgElement);
  bgElement.style.backgroundImage = `url(${item.img})`;

  const imageElement = document.createElement("img");
  imageElement.classList.add(config.classNames.cards.img);
  imageElement.src = item.img;

  const titleElement = document.createElement("div");
  titleElement.classList.add(config.classNames.cards.titleElement);
  titleElement.innerHTML = item.title;

  rootElement.appendChild(wrapperElement);
  wrapperElement.appendChild(bgElement);
  wrapperElement.appendChild(glossElement);
  wrapperElement.appendChild(imageElement);
  wrapperElement.appendChild(titleElement);

  return rootElement;
};
