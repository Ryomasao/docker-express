import React, { Component } from 'react';
import axios from 'axios';

class SearchForm extends Component {
  render() {
    return (
      <form className="search-form" onSubmit={e => this.handleSubmit(e)}>
        <input type="text"/>
        <input type="submit" value="メンバーを取得する"/>
      </form>
    )
  }

  handleSubmit(e) {
    console.log('submit');
    e.preventDefault();

    axios.get('//localhost:8000/api')
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
  }
}

export default SearchForm;