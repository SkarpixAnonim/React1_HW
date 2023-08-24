import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ExampleComponent from './App';
import PokemonName from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PokemonName />
  </React.StrictMode>
);

