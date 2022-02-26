import React from 'react';
import ReactDOM from 'react-dom';
import reactLogo from './assets/react.png'
import reactSvg from './assets/reactjs.svg'
import '../scss/index.scss'

ReactDOM.render(
  <>
    <h1>React</h1>
    <img src={reactSvg} />
    <img src={reactLogo} />
  </>,
  document.getElementById('root')
);