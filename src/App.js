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
      <div className="App">
        <SeachBox
          type="search"
          placeholder="Seach your monsterse"
          onChange={onSeachChange}
        />
        <CardList data={filteredMonsters} />
      </div>
    );
  }
}

export default App;
