import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../../h4-state/src/App';
import {Checkbox1, Checkbox2} from './Checkbox';
import TextItalic from './TextItalic';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Checkbox1 />
    <Checkbox2 />
    <TextItalic />
  </React.StrictMode>,
  document.getElementById('root')
);

