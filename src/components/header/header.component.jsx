import { Component } from "react";

import "./header.style.css"

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="title">Logo</h1>
        <ul>
          <a href="#1" className="link">
            Home
          </a>
          <a href="#1" className="link">
            Library
          </a>
          <a href="#1" className="link">
            About
          </a>
        </ul>
      </div>
    );
  }
}

export default Header
