import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AddForm from './components/Form/Form';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from './context';
import { Contacts } from './components/Contacts/Contacts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <Provider>
    <Contacts />
    <App />
    <AddForm />
    </Provider>
    </div>
);
