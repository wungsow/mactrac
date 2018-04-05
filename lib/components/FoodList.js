import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FoodList extends Component {
  static defaultProps = {
    items: []
  }
  state = {}
  render() {
    return (
      <div>
        {this.props.items.map((item, index) => (<div key={index}>{item.name}</div>))}
      </div>
    );
  }
}

FoodList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
};

export default FoodList;