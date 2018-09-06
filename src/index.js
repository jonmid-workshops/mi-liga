// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// *************************************************************


import React from 'react'; // Libreria de React
import { render } from 'react-dom'; // Libreria para mostrar todos los contenidos en pantalla
import registerServiceWorker from './registerServiceWorker'; // Gestiona los tiempos de carga y desempeño de la aplicacion

// ***** IMPORTAR COMPONENTES *****
import HolaMundo from './Components/HolaMundo/HolaMundo';

// ***** RENDERIZAR COMPONENTES *****
render(<HolaMundo nombre="Jonathan Mideros" edad="31" tipo="descripcion" />, document.getElementById('root'));



// Esta linea va al final de todo
registerServiceWorker();