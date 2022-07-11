import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import { StateContextProvider } from './contexts/StateContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
