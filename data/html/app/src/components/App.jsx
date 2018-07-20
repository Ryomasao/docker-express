import React, { Component } from 'react';
import axios from 'axios';

import CreateForm from './CreateForm';
import MemberList from './MemberList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      members: [],
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Hello App</h1>
        {/* 登録フォーム  
        プロパティとして関数を渡すときに、this.handleSubmitみたいに
        直接渡すと、渡した関数のthisが実行されるコンテキストが、渡したさきのコンポーネントになるかも
        Vue.jsだと大丈夫そうなんだけれども。
        */} 
        <CreateForm onSubmit={(data) => this.handleSubmit(data)}/>
        {/* メンバーリスト */} 
        <MemberList members={this.state.members} />
      </div>
    );
  }

  handleSubmit(data) {
    const URL_BASE = '//localhost:8000/api';
    const ENTORY_POINT = `${URL_BASE}/member`;

    axios.post(ENTORY_POINT, {
      name: data.name,
      color: data.color,
    })
    .then((res) => {
      let members = res.data;
      this.setState({members})
    })
    .catch((error) => console.log(error));
  }

}

export default App;;