import JCGlossyCardList from "./jc-glossycards.js";
const fetchGames = () => {
    return fetch("./fake.json");
};
const games = fetchGames()
    .then((res) => res.json())
    .then(res => {
    const g = res.body.games.map((game) => {
        return {
            img: game.coverimage,
            href: '#'
        };
    });
    document.querySelectorAll(`.jc-glossycards`).forEach(card => {
        const cardList = new JCGlossyCardList(card);
        cardList.setData(g);
    });
});
