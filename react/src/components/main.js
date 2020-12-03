import React, { Component } from 'react'
import imp from '../sample/imp.jpg'
import imp2 from '../sample/imp2.png'
export default class Main extends Component {
    render() {
        return (
            <main>
               
        <div className="container">
            <div className="row">
                <div className="col-6" >
                    <img src={imp2 }  className="img-fluid" />
                </div>
                <div className="col-5" id="ResizeTextOur">
                  
        <h2>Bienvenido {this.props.Username1}</h2>
                    <p>Bienvenido al Administrador personal de Registros, Al seguir todos los pasos correctamente usted ya esta en posicion de poder manejar sus ingresos y egresos.
                        Este Administrador se puede acoplar a la nescesidad que usted desea, Tambien se puede adquirir el modulo de <b>logging</b>, que envia al mail los registros solicitados junto a los niveles de Registros y ademas el modulo de Autenticacion via Username/Password.
                        Para mas informacion contactese con su Provedor.
                    </p>
                      
                </div>
            </div>
<br/>
        </div>
    </main>
        )
    }
}
