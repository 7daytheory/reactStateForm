import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Form from './components/Form/Form';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <Form />
  </div>
);
