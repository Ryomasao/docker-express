import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateForm extends Component {
  constructor(props) {
    super(props);
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
    let data = {
      name:this.state.name,
      color:this.state.color,
    }

    this.props.onSubmit(data);
  }
}

CreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default CreateForm;