import React from 'react';
import ReactDOM from 'react-dom';
import Body from './components/body';
import Navbar from './components/navbar';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Body/>
  </React.StrictMode>,
  document.getElementById('root')
);
