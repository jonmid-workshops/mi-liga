import React from 'react'; // Libreria de React
import Button from '@material-ui/core/Button';

import './HolaMundo.css'; // Importar estilos CSS

class HolaMundo extends React.Component{
    render(){
        return (
            <div>
                {/* Comentarios en JSX */}
                <h2>Hola {this.props.nombre}</h2>
                <p> {this.props.edad}  </p>
                <p className={this.props.tipo} > Vestibulum lorem quam, facilisis a imperdiet nec, interdum venenatis tortor. Etiam condimentum ligula sit amet fringilla consequat. Praesent ultrices, augue non imperdiet pellentesque, purus nunc malesuada augue, aliquam commodo felis libero id arcu. Donec ex lorem, pellentesque ac maximus ut, ultricies vitae mi. Donec egestas odio vitae sapien facilisis feugiat. Suspendisse potenti. Sed volutpat congue lacinia. Donec quis rhoncus felis, id aliquam elit. Cras scelerisque, quam ut rhoncus bibendum, dolor ipsum sollicitudin ipsum, id luctus lorem neque a lacus. Aenean tristique erat et mauris cursus malesuada. </p>

                <Button variant="contained" color="primary">Primary</Button>
            </div>
        )
    }
}

export default HolaMundo;