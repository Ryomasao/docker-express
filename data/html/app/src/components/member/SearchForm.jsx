import React, { Component } from 'react';
import axios from 'axios';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      color: '',
    };
  }
  
  render() {
    return (
      <form className="search-form" onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor="name">なまえ</label>
        <input 
          id="name" 
          type="text" 
          onChange={e => this.handleNameChange(e.target.value)} 
          value={this.state.name} 
        />
        <label htmlFor="color">いろ</label>
        <input 
          id="color" 
          type="text" 
          onChange={e => this.handleColorChange(e.target.value)} 
          value={this.state.color} 
        />
        <input type="submit" value="登録する"/>
      </form>
    )
  }

  handleNameChange(name) {
    this.setState({ name: name});
  }

  handleColorChange(color) {
    this.setState({ color: color});
  }
  
  handleSubmit(e) {
    e.preventDefault();

    const URL_BASE = '//localhost:8000/api';
    const ENTORY_POINT = `${URL_BASE}/member`;

    /*
    axios.get('//localhost:8000/api/member')
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
    */

    const name = this.state.name;
    const color = this.state.color;

    axios.post(ENTORY_POINT, {
      name: name,
      color: color,
    })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
  }
}

export default SearchForm;