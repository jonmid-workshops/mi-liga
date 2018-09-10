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
// import Reboot from 'material-ui/Reboot';
import './index.css';

// ***** IMPORTAR COMPONENTES *****
// import HolaMundo from './Components/HolaMundo/HolaMundo';
import Header from './Components/common/header/Header';
import Router from "./Router";

const Root = () => {
    return (
        <div>
            <Header />
            <div className="contenedor">
                <Router />
            </div>
        </div>
    )
}

// ***** RENDERIZAR COMPONENTES *****
// render(<HolaMundo nombre="Jonathan Mideros" edad="31" tipo="descripcion" />, document.getElementById('root'));
render(<Root />, document.querySelector('#root'));



// Esta linea va al final de todo
registerServiceWorker();