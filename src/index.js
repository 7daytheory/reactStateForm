import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AddForm from './components/Form/Form';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <AddForm />
  </div>
);
