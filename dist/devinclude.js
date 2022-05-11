import JCGlossyCards from "./jc-glossycards.js";
const fetchGames = () => {
    return fetch("./fake.json");
};
const games = fetchGames()
    .then((res) => res.json())
    .then(res => {
    const g = res.body.games.map((game) => {        
        return {
            title: game.title,
            img: game.coverimage,
            href: '#'
        };
    });
    const cards = new JCGlossyCards();
    cards.setItems(g);
    cards.initialize();
});