import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { Heroes } from '../src/Heroes';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Heroes />
    </BrowserRouter>
  </React.StrictMode>,
)
