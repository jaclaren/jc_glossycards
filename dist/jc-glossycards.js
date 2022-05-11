const config = {
    selectors: {
        attachElements: ".jc-glossycards",
    },
    classNames: {
        cards: {
            root: 'jc-glossycard',
            img: 'jc-gc__img',
            bgElement: `jc-gc__bg`,
            titleElement: `jc-gc__title`
        }
    }
};
export default class JCGlossyCards {
    constructor(config) {
        this.items = [];
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
            this.items.forEach((item) => {
                this.generateCard(document, item, element);
            });
        });
    }
    generateCard(document, item, element) {
        const rootElement = document.createElement("div");
        rootElement.classList.add(config.classNames.cards.root);
        const bgElement = document.createElement("div");
        bgElement.classList.add(config.classNames.cards.bgElement);
        bgElement.style.backgroundImage = `url(${item.img})`;
        const imageElement = document.createElement("img");
        imageElement.classList.add(config.classNames.cards.img);
        imageElement.src = item.img;
        const titleElement = document.createElement("div");
        titleElement.classList.add(config.classNames.cards.titleElement);
        titleElement.innerHTML = item.title;
        rootElement.appendChild(bgElement);
        rootElement.appendChild(imageElement);
        rootElement.appendChild(titleElement);
        element.appendChild(rootElement);
    }
}
