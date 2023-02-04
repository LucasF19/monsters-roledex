import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: [
        {name: 'Macarrão'},
        {name: 'Feijão'},
        {name: 'Salada'},
      ]
    }    
  }

  render() {
    return (
      <div className="App">
        {
          this.state.foods.map((food) => {
            return <h1 key={food}>{food.name}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
