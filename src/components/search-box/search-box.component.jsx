import { Component } from "react";

class SeachBox extends Component {
  render(){

    const { onChange, placeholder, type } = this.props

    return(
      <input
        type={type}
        className="seach-box"
        placeholder={placeholder}
        onChange={onChange}
      />
    )
  }
}

export default SeachBox