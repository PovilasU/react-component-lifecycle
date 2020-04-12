import React from 'react';
import Counter from './Counter';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>React component lifecycle methods</h1>
        <Counter />
      </div>
    );
  }
}
