import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import CalculadoraReact from './CalculadoraReact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CalculadoraReact />
  </React.StrictMode>
);