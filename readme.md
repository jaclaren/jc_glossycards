# JC glossycards

## Usage

```
document.querySelectorAll(".games").forEach((_) => {				
		axios.get(
			`/wp-json/public/game/get`, {
			  params : {
				itemCount : _.dataset.itemcount, 
				mode : _.dataset.mode
			  },
			  headers: {
				'X-WP-Nonce': localizedVars.nonce
			  }
			}
		  )
			.then(response => {
				const cardList = new JCGlossyCardList(_)				
				const items = response.data.body.games.map(g => {
					return {
						...g,
						img: g.coverimage
					}
				})

				cardList.setData(items) 
		  })
		  .catch(error => {
			debugger
		  })
		// ReactDOM.render(
		// 	<CardScroller
		// 		maxItems={7 * 4}
		// 		itemsToLoad={7 * 4}
		// 		itemsPerPage={7}
		// 		nonce={localizedVars.nonce}
		// 		mode={_.dataset.mode}
		// 	/>,
		// 	_
		// );
	});
```