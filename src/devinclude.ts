import JCGlossyCardList from "./jc-glossycards.js";
import JCGlossyCards from "./jc-glossycards.js";

const fetchGames = () => {
  return fetch("./fake.json");
};

const games = fetchGames()
        .then((res) => res.json())
        .then(res => 
            {                
                const g = res.body.games.map((game: { coverimage: any; }) => {                    
                    return {
                        img : game.coverimage,
                        href : '#'
                    }
                })

                document.querySelectorAll(`.jc-glossycards`).forEach(card => {
                    const cardList = new JCGlossyCardList(card as HTMLElement)
                    cardList.setData(g)                                        
                })

            })
                        
