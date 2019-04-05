import React, { Component } from 'react';
import GameCard from "./Components/GameCard/GameCard";
import Header from "./Components/Header/Header";
import './App.css';

class App extends Component {

  state = {
    cards: [
      {
        "id": 1,
        "name": "hammer",
        "image": "https://www.woodblocx.co.uk/media/catalog/product/cache/1/thumbnail/960x/05e17a266b0e9cc26fb81a2e0bed7e78/l/u/lump-hammer.jpg",
      },
      {
        "id": 2,
        "name": "hammer",
        "image": "https://images-na.ssl-images-amazon.com/images/I/61fnMMgkGIL._SX425_.jpg",
      },
      {
        "id": 3,
        "name": "hammer",
        "image": "https://i5.walmartimages.com/asr/5ec60309-22a2-454f-a632-35d7d0d55ffc_1.2a918275def7979179f7f3b85a4f1209.jpeg",
      },
      {
        "id": 4,
        "name": "hammer",
        "image": "https://d2kx81irxb72bi.cloudfront.net/cs/products/38/73/08/550x550.jpg",
      },
      {
        "id": 5,
        "name": "hammer",
        "image": "https://ae01.alicdn.com/kf/HTB1FjN5KFXXXXa6XFXXq6xXFXXXx/1-1-Scale-Full-Metal-Thor-Hammer-Mjolnir-1-1-Replica-Thor-Custom-Cosplay-Hammer-Collection.jpg_640x640.jpg",
      },
      {
        "id": 6,
        "name": "hammer",
        "image": "https://www.harborfreight.com/media/catalog/product/i/m/image_20800.jpg",
      },
      {
        "id": 7,
        "name": "hammer",
        "image": "https://www.wind-lock.com/product/image/medium/w-go05164_1.jpg",
      },
      {
        "id": 8,
        "name": "hammer",
        "image": "http://www2.fiskars.com/var/fiskars_amer/storage/images/frontpage2/products/home-improvement-tools/hammers/isocore-22-oz-milled-face-framing-hammer-16/942701-20-eng-US/IsoCore-22-oz-Milled-face-Framing-Hammer-16.jpg",
      },
      {
        "id": 9,
        "name": "hammer",
        "image": "https://cdn.shopify.com/s/files/1/0248/6216/products/hardcore-hammer-7.jpg?v=1537308705",
      }
    ]
  };

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  handleClick = () => {
    const cards = this.shuffle(this.state.cards);
    // Set this.state.friends equal to the new friends array
    this.setState({ cards });
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.cards.map(card => (
          <GameCard
            id={card.id}
            image={card.image}
            name={card.image}
            handleClick={this.handleClick}
          />
        ))}
      </div>
    );
  }
}

export default App;