import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../../App';
import { Caminhos } from '../../Caminhos';
import { Planta } from '../../plantas';
import reportWebVitals from '../../reportWebVitals';

const Teste = () => {
  return (
    <main>
      <div>
        <Caminhos />
        <Planta />
      </div>
     </main>             
  );
};


ReactDOM.render(
  <React.StrictMode>
    <Teste />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
