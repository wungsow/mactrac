import React, { Component } from 'react';
import PropTypes from 'prop-types';

const style = {
  container: {
    display: 'flex',
    padding: 10
  },
  input: {
    flex: 1,
    marginRight: 10
  }
};

class Search extends Component {
  state = {
    searchTerm: ''
  };
  render() {
    return (
      <form style={style.container} onSubmit={(e) => e.preventDefault()}>
        <input style={style.input} type="text" name="searchTerm" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.onSubmit}>Search</button>
      </form>
    );
  }

  onSubmit = () => {
    this.props.onSearchSubmit(this.state.searchTerm);
  }

  handleChange = (event) => { this.setState({ [event.target.name]: event.target.value }); }
}

Search.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired
};

export default Search;