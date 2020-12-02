

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
                    <li><a href="#Balance" >BALANCE</a></li>
                    <li><a href="#Last" id="">ULTIMOS DIEZ REGISTROS</a></li>
                    <li><a href="#Form" id="">NUEVO REGISTROS</a></li>
                    <li><a href="#All" id="">TODOS LOS REGISTROS</a></li>
                </ul>
            </nav>
        </div>
        </div>
    </header> );
      }
    }