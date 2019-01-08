import React, { Component } from 'react';
import Header from './components/Header'
import AgregarCita from './components/AgregarCita';

class App extends Component {

    state = {
        citas: []
    }

    crearCita = (nuevaCita) => {
        // console.log(cita)
        const citas = [...this.state.citas, nuevaCita]

        this.setState({
            citas
        })

    }

    render() {
        return (
        <div className="container">
            <Header titulo={'Administrador de pacientes de veterinaria'} />
            <div className ="row">
                <div className="col-md-6">
                    <AgregarCita 
                        crearCita ={this.crearCita}
                    />
                </div>
            </div>

        </div>
        );
    }
}

export default App;
