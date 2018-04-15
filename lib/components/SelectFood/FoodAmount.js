import React, { Component } from 'react';
import Macros from './Macros';
import PropTypes from 'prop-types';

import style from './FoodAmount.css';
import TextInput from '../Shared/TextInput';
import SubmitButtonRow from '../Shared/SubmitButtonRow';

class FoodAmount extends Component {
  state = {
    amount: '',
    units: 'grams'
  };

  get total() {
    const [total, food] = [{}, this.props.food];
    this.state.amount && Object.keys(food).forEach(key => total[key] = food[key] * this.state.amount);
    return total;
  }

  render() {
    const { food, onAdd, onCancel } = this.props;
    return (
      <form className={style.container} onSubmit={(e) => e.preventDefault()}>
        <div className={style.food}>
          <h2>{food.name}</h2>
          <Macros {...food}></Macros>
          <TextInput value={this.state.amount} onChange={this.handleChange} name='amount' label='Amount' units={this.state.units} />
          <Macros {...this.total}></Macros>
        </div>
        <SubmitButtonRow onSubmit={() => onAdd(this.total)} onCancel={onCancel} submitText='Add' enabled={Object.keys(this.total).length} />
      </form>);
  }

  handleChange = (event) => { this.setState({ [event.target.name]: event.target.value }); }
}

FoodAmount.propTypes = {
  food: PropTypes.object,
  onAdd: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default FoodAmount;