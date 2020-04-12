import React from 'react';
import Counter from './components/Counter';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React component lifecycle methods</h1>
        <p>from: https://www.youtube.com/watch?v=m_mtV4YaI8c</p>
        <Counter />
      </div>
    );
  }
}
