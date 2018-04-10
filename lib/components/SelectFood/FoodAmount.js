import React, { Component } from 'react';
import Macros from './Macros';

import style from './FoodAmount.css';

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
    return (<div className={style.container}>
      <div className={style.food}>
        <h2>{food.name}</h2>
        {/* <label>Per 100g</label><input type='radio'/><label>Per serving</label><input type='radio'/> */}
        <Macros {...food}></Macros>
        <div className={style.inputRow}>
          <label htmlFor='amount'>Amount</label>
          <input id='amount' autoComplete="off" type='text' name='amount' value={this.state.amount} onChange={this.handleChange} />
          <span>{this.state.units}</span>
        </div>
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