import React, { Component } from 'react';

import './index.css';

export default class ItemAddForm extends Component {

  state = {
    value: ''
  }

  onLabelChange = (event) => {
    this.setState({ value: event.target.value })
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.value);
    this.setState({ value: ''})
  }

  render() {
    return(
      <form 
      onSubmit={this.onFormSubmit}
      className="item-add-form d-flex">
        <input
          type="text"
          value={this.state.value}
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to do"
        />
        <div>
          <button
            className="btn btn-outline-info"
          >
            Add Item
          </button>
        </div>
      </form>
    );
  };
}