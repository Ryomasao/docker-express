import React, { Component } from 'react';

import SearchForm from './SearchForm';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Hello App</h1>
        {/* 検索フォーム */} 
        <SearchForm />
        {/* 結果 */} 
      </div>
    );
  }
}

export default App;;