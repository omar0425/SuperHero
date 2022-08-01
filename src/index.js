import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Home from './pages/Home';
// import NotFound from './pages/NotFound';
import { BrowserRouter,Route,Switch  } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
    <App />

  </BrowserRouter>
  </React.StrictMode>
);


