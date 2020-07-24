import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {
  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ]
  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const classes = filter === name ? 'btn-info' : 'btn-outline-secondary'
      return (
        <button
          key={name}
          type="button"
          className={`btn ${classes}`}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    })
    return (
      <div className="btn-group">
       {buttons}
      </div>
    );
  };
}