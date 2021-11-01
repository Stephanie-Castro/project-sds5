import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; //bootstrap
/*
  Não é necessário colocar ../src/ porque no arquivo tsconfig.json
  foi colocado "baseUrl": "./src"
*/
//import "../src/assets/css/styles.css"; //estilos criados
import "assets/css/styles.css"; //estilos criados
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
