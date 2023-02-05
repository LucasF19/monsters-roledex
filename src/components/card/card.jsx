import { Component } from "react";

import { Card } from "antd";
const { Meta } = Card;

class Cards extends Component {
  render() {
    const { name, id, email } = this.props.data;

    return (
      <Card
        key={id}
        hoverable
        className="cards"
        cover={
          <img
            alt="exemple"
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
          />
        }
      >
        <Meta title={name} description={email} />
      </Card>
    );
  }
}

export default Cards;
