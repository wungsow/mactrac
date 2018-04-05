import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  state = {
    answer: 42
  };
  asyncFunc = () => {
    return Promise.resolve(33);
  }

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }

  render() {
    return  (<h2>Hello react -- {this.state.answer}</h2>);
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));