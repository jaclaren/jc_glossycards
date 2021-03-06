import JCGlossyCardList from "./jc-glossycards.js";
import JCGlossyCards from "./jc-glossycards.js";

import {RJCGlossyCardList} from './index'

import React from 'react';
import ReactDOM from 'react-dom';

const fetchGames = () => {
  return fetch("./fake.json");
};

const games = fetchGames()
        .then((res) => res.json())
        .then(res => 
            {                
                const g = res.body.games.map((game: { coverimage: any; title:any; href:any; }) => {                    
                    return {
                        img : game.coverimage,
                        href : game.href,
                        title: game.title
                    }
                })

                document.querySelectorAll(`.jc-glossycards`).forEach(card => {
                    const cardList = new JCGlossyCardList(card as HTMLElement)
                    cardList.setData(g)                                        
                })
 
                const reactElement = document.querySelectorAll(`.jc-glossycards__react`)

                // @ts-ignore
                ReactDOM.render(RJCGlossyCardList, reactElement)
                
            })
                        
