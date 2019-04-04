import React, { Component } from 'react';
import GameCard from "./Components/GameCard/GameCard";
import Header from "./Components/Header/Header";
import './App.css';

class App extends Component {

  state = {
    cards: [
      {
        "id": 1,
        "name": "SpongeBob",
        "image": "https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",
      },
      {
        "id": 2,
        "name": "Mr. Krabs",
        "image": "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",
      },
      {
        "id": 3,
        "name": "Squidward",
        "image": "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",
      },
      {
        "id": 4,
        "name": "Squidward",
        "image": "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",
      },
      {
        "id": 5,
        "name": "Squidward",
        "image": "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",
      },
      {
        "id": 6,
        "name": "Squidward",
        "image": "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.cards.map(card => (
          <GameCard
            id={card.id}
            image={card.image}
            name={card.image}
          />
        ))}
      </div>
    );
  }
}

export default App;
