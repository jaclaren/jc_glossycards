"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jc_glossycards_js_1 = __importDefault(require("./jc-glossycards.js"));
const index_1 = require("./index");
const react_dom_1 = __importDefault(require("react-dom"));
const fetchGames = () => {
    return fetch("./fake.json");
};
const games = fetchGames()
    .then((res) => res.json())
    .then(res => {
    const g = res.body.games.map((game) => {
        return {
            img: game.coverimage,
            href: game.href,
            title: game.title
        };
    });
    document.querySelectorAll(`.jc-glossycards`).forEach(card => {
        const cardList = new jc_glossycards_js_1.default(card);
        cardList.setData(g);
    });
    const reactElement = document.querySelectorAll(`.jc-glossycards__react`);
    // @ts-ignore
    react_dom_1.default.render(index_1.RJCGlossyCardList, reactElement);
});
