import React, { useEffect, useState } from "react";

import CardList from "./components/card-list/card-list.component";
import SeachBox from "./components/search-box/search-box.component";
import Header from "./components/header/header.component";

import "./style.css";

const App = () => {

  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchFiedl] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monsters) => {
      return monsters.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSeachChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchFiedl(searchField);
  };

  return (
    <>
      <Header
        title="Logo"
        links={[
          {
            linkName: "teste",
            linkHref: "#1",
          },
          {
            linkName: "teste2",
            linkHref: "#2",
          },
        ]}
      />
      <div className="App">
        <SeachBox placeholder="Seach your monsterse" onChange={onSeachChange} />
        <CardList data={filteredMonsters} />
      </div>
    </>
  );
};

export default App;
