import React, { Component } from 'react';
import Macros from './Macros';

import style from './FoodAmount.css';
import TextInput from '../TextInput';

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
      <div className={style.container}>
        <div className={style.food}>
          <h2>{food.name}</h2>
          <Macros {...food}></Macros>
          <TextInput value={this.state.amount} onChange={this.handleChange} name='amount' label='Amount' units={this.state.units} />
          <Macros {...this.total}></Macros>
        </div>
        <div className={style.buttons}>
          <button onClick={onCancel}>Cancel</button><button onClick={onAdd}>Add</button>
        </div>
      </div>);
  }

  handleChange = (event) => { this.setState({ [event.target.name]: event.target.value }); }
}

export default FoodAmount;