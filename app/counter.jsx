import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const counter = (state = 5, action) => {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'sub':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter);
// s = store;
// console.log(store);

const Counter = ({ value, onIncrease, onDecrease }) => (
  <div className="text-center">
    <button className="btn btn-default" onClick={ onIncrease }>+</button>
    <span>{ value }</span>
    <button className="btn btn-default" onClick={ onDecrease }>-</button>
  </div>
);

const render = () => ReactDOM.render(
  <Counter
    value = { store.getState() }
    onIncrease = { () => {store.dispatch({ type: 'add' }); render();} }
    onDecrease = { () => {store.dispatch({ type: 'sub' }); render();} }
  />,
  document.getElementById('react-app')
);

render();
