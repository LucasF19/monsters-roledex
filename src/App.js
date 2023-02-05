import { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import SeachBox from "./components/search-box/search-box.component";
import "./style.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSeachChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSeachChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="container">
        <div className="header">
          <h1 className="title">Teste</h1>
          <ul>
            <a href="#" className="link">Home</a>
            <a href="#" className="link">Library</a>
            <a href="#" className="link">About</a>
          </ul>
        </div>
        <div className="App">
          <SeachBox
            placeholder="Seach your monsterse"
            onChange={onSeachChange}
          />
          <CardList data={filteredMonsters} />
        </div>
      </div>
    );
  }
}

export default App;
