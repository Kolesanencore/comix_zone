import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

import GlobalStyles from './styles/GlobalStyles';

import 'modern-normalize/modern-normalize.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
