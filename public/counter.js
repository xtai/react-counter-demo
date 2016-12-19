class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      <div className="row text-center">
        <button className="btn btn-default" onClick={() => this.setState({value: this.state.value + 1})}>+</button>
        <span>{this.state.value}</span>
        <button className="btn btn-default" onClick={() => this.setState({value: this.state.value - 1})}>-</button>
      </div>
    );
  }
}
ReactDOM.render(
  <Counter />,
  document.getElementById('react-app')
);
