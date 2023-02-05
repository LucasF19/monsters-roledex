import { Component } from "react";

class CardList extends Component {
  render(){

    const { data } = this.props;

    return(
      <div className="cards">
        {data.map((event) => {
          return <h1 key={event.id}>{event.name}</h1>;
        })}
      </div> 
    )
  }
}

export default CardList;