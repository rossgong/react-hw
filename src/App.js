import React, { Component } from 'react';
import ImageTile from './ImageTile';

const characters = [
  "Beat",
  "Boogie",
  "Combo",
  "Corn",
  "Cube",
  "Garam",
  "Immortals",
  "Jam",
  "Jazz",
  "Mayor",
  "Yoyo"
]

const gameStyle = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  width: "75%",
  margin: "auto"
}

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",

}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: [],
      score: 0,
      lost: false
    }

    for (let i = 0; i < characters.length; i++) {
      this.state.clicked.push(false);
    }
  }

  shuffle() {
    let order = [];

    let range = [...Array(characters.length).keys()]

    for (let i = characters.length; i > 0; i--) {
      order.push(range.splice(Math.floor(Math.random() * i), 1)[0]);
    }

    return order;
  }

  reset = () => {
    let clicked = [];

    for (let i = 0; i < characters.length; i++) {
      clicked.push(false);
    }

    this.setState({ score: 0, clicked, lost: false });
  }

  handleClick = (index) => {
    if (this.state.clicked[index]) {
      this.setState({ lost: true })
    } else {
      let clicked = this.state.clicked;
      clicked[index] = true;
      this.setState({ score: this.state.score + 1, clicked });
    }
  }

  render() {
    let order = this.shuffle();

    if (this.state.lost) {
      return (
        <div>
          <h1>You Lost!!!</h1>
          <h2>You achieved a score of {this.state.score}</h2>
          <button onClick={this.reset}>Try again</button>
        </div>
      )
    }

    return (
      <div className="clicky">
        <div id="header" style={headerStyle}>
          <h1>Jet Set Radio Clicky Game</h1>
          <h2>Score: {this.state.score}</h2>
        </div>
        <div id="directions" style={{ margin: "auto", textAlign: "center" }}>
          <p style={{ display: "inline" }}>Try and click on a different JSRF character everytime!</p>
        </div>
        <div id="game" style={gameStyle}>
          {order.map(index => (
            <ImageTile
              name={characters[index].name}
              image={`./images/jsrf-${characters[index].toLowerCase()}.png`}
              onClick={() => this.handleClick(index)} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
