import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import {Checkbox1, Checkbox2} from './Checkbox';
import TextItalic from './TextItalic';
import Buttons, {Button} from './Buttons';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Checkbox1 />
    <Checkbox2 />
    <TextItalic />
    <Buttons />
    <Button />
  </React.StrictMode>,
  document.getElementById('root')
);

