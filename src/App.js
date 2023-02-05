import { useEffect, useState } from "react";

import CardList from "./components/card-list/card-list.component";
import SeachBox from "./components/search-box/search-box.component";
import Header from "./components/header/header.component";

import "./style.css";

const App = () => {
  
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchFiedl] = useState("");

  const filteredMonsters = monsters.filter((monsters) => {
    return monsters.name.toLocaleLowerCase().includes(searchField);
  });

  const onSeachChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchFiedl(searchField);
  };

  const initMonsters = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  };

  useEffect(() => {
    initMonsters();
  });

  return (
    <>
      <Header />
      <div className="App">
        <SeachBox placeholder="Seach your monsterse" onChange={onSeachChange} />
        <CardList data={filteredMonsters} />
      </div>
    </>
  );
};

export default App;
