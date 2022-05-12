const config = {
    padding: 10,
    numItems: 7,
    selectors: {
        attachElements: ".jc-glossycards",
        contentElement: `.jc-gc__content`,
        rowElement: `.jc-gc__row`,
    },
    classNames: {
        navButtons: {
            root: `jc-gc__navbutton`,
            abbreviation: `jc-gc__nb`
        },
        cards: {
            root: "jc-glossycard",
            img: "jc-gc__img",
            bgElement: `jc-gc__bg`,
            titleElement: `jc-gc__title`,
            glossElement: `jc-gc__gloss`,
            wrapper: `jc-gc__wrapper`,
        },
    },
};
export default class JCGlossyCards {
    constructor(config) {
        this.items = [];
        this.page = 0;
    }
    /**
     *
     * @param items Items to render
     */
    setItems(items) {
        this.items = items;
    }
    initialize() {
        this.attach(document);
    }
    attach(document) {
        document
            .querySelectorAll(config.selectors.attachElements)
            .forEach((element) => {
            const rowElement = element.querySelector(config.selectors.rowElement);
            this.generateNavButtons(document, element);
            this.items.forEach((item) => {
                const padding = config.padding;
                this.generateCard(document, item, rowElement, {
                    width: this.calculateCardWidth(element, config.numItems, padding),
                    padding,
                });
            });
        });
    }
    /**
     * Generates nav buttons
     * @param document
     * @param element root glossycard element
     */
    generateNavButtons(document, element) {
        this.generateNavButton(`${config.classNames.navButtons.abbreviation}-left`, document, element, () => this.nextPage(element.querySelector(config.selectors.rowElement), element));
        this.generateNavButton(`${config.classNames.navButtons.abbreviation}-right`, document, element, () => this.previousPage(element.querySelector(config.selectors.rowElement), element));
    }
    /**
     * Calculates the width for an individual card
     *
     * @param element Root element
     * @param itemsPerRow
     * @param padding
     * @returns
     */
    calculateCardWidth(element, itemsPerRow, padding) {
        return element.offsetWidth / itemsPerRow - padding * 2;
    }
    previousPage(rowElement, rootElement) {
        this.page--;
        if (!!rowElement)
            this.renderElementTransition(rowElement, rootElement);
    }
    nextPage(rowElement, rootElement) {
        this.page++;
        if (!!rowElement)
            this.renderElementTransition(rowElement, rootElement);
    }
    renderElementTransition(element, rootElement) {
        element.style.transform = `translate3d(-${rootElement.offsetWidth * this.page}px, 0, 0)`;
    }
    generateNavButton(className, document, root, onClickEvent) {
        const button = document.createElement(`div`);
        button.classList.add(config.classNames.navButtons.root);
        button.classList.add(className);
        const transition = config.padding;
        button.addEventListener("click", () => onClickEvent());
        button.innerHTML = ">";
        root.appendChild(button);
    }
    /**
     * Generates a card
     *
     * @param document
     * @param item
     * @param element
     * @param attrs
     */
    generateCard(document, item, element, attrs) {
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
        element.appendChild(rootElement);
    }
}
