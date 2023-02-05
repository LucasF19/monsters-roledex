import { Component } from "react";

import "./header.style.css"

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="title">Logo</h1>
        <ul>
          <a href="#" className="link">
            Home
          </a>
          <a href="#" className="link">
            Library
          </a>
          <a href="#" className="link">
            About
          </a>
        </ul>
      </div>
    );
  }
}

export default Header
