

import React, { Component } from 'react'
import icon from '../sample/icon1.png'
export default class Nav extends Component {
      

      render() {
        return(<header className="header">
        <div className="container logo-nav-containter">
            <div className="LOGO">
                <img src={icon} className="logo2" alt="Logo Go Adiestramiento"/>
            </div>
        <div className="navbar-menu">            
            <div>
                <span className="menudesplegable"></span>
            </div>
            <nav className="accesos">
                <ul>
                    <li><a href="#Balance" >BALANCE</a></li>
                    <li><a href="#Last" id="">ULTIMOS DIEZ REGISTROS</a></li>
                    <li><a href="#Form" id="">NUEVO REGISTROS</a></li>
                    <li><a href="#All" id="">TODOS LOS REGISTROS</a></li>
                </ul>
            </nav>
        </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="./NormalFunctions.js"></script>
    </header> );
      }
    }