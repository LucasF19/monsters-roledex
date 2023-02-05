import { Component } from "react";

import Cards from "../card/card";
import "./card-list.style.css"

class CardList extends Component {
  render() {

    const { data } = this.props;

    return (
      <div className="cardsBox">
        {data.map((event) => {
          return <Cards key={event.id} data={event}/>
        })}
      </div>
    );
  }
}

export default CardList;
