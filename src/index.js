import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import ReseStyle from './style/ResetStyle.js';
import GlobalStyle from './style/GlobalStyle.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReseStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

