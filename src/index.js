import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../../h4-state/src/App';
import Checkbox from './Checkbox';
import TextItalic from './TextItalic';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Checkbox />
    <TextItalic />
  </React.StrictMode>,
  document.getElementById('root')
);

