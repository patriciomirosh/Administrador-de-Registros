

import React, { Component } from 'react'
import icon from '../sample/icon1.png'

export default class Nav extends Component {
    constructor(args) {
        super(args);
    
        this.state = {
          register10: [],
          Concepto: "",
          Monto: "",
          Fecha: "",
          Tipo: "",
          ID: "",
        };
      }

      render() {
        return(<header class="header">
        <div class="container logo-nav-containter">
            <div class="LOGO">
                <a href=""><img src={icon} class="logo2" alt="Logo Go Adiestramiento"/></a>
            </div>
        <div class="navbar-menu">            
            <div>
                <span class="menudesplegable"></span>
            </div>
            <nav class="accesos">
                <ul>
                    <li><a href="#" id="">BALANCE</a></li>
                    <li><a href="#" id="">ULTIMOS DIEZ REGISTROS</a></li>
                    <li><a href="#" id="">TODOS LOS REGISTROS</a></li>
                </ul>
            </nav>
        </div>
        </div>
    </header> );
      }
    }