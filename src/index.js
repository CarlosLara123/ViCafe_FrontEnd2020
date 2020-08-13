import React from 'react';
import ReactDOM from 'react-dom';
import App from './Routes/App.routes';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';


const container = document.getElementById('app');

ReactDOM.render(<App />, container);
