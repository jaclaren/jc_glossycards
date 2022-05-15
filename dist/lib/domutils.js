/**
 * Generates the HTML elements for the card
 *
 * @param classNames
 * @param onClickEvent
 * @param text
 */
export const generateNavButton = (classNames, onClickEvent, text) => {
    const button = document.createElement(`div`);
    classNames.forEach((className) => button.classList.add(className));
    button.addEventListener("click", () => onClickEvent());
    button.innerHTML = ">";
    return button;
};
export const generateCard = (document, item, element, attrs, config) => {
    const rootElement = document.createElement("div");
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
