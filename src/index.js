import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AddForm from './components/Form/Form';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
    <App />
    <AddForm />
    </Provider>
);
