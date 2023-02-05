import { Component } from "react";

import { Input } from 'antd';

import './search-box.style.css'

class SeachBox extends Component {
  render(){

    const { onChange, placeholder, className } = this.props

    return(
      <div className="searchBox">
        <Input
          style={{width: 160}}
          type='search'
          className={className}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    )
  }
}

export default SeachBox