
import './App.css';
import Formapp from './components/Formapp';
import React, { Component } from "react";
import Last10  from './components/last10';
import Balance from './components/balance';
import Listado from './components/listado';
import Nav from './components/navegador'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Main from './components/main'
import'./sample/style.js'

class App extends Component {

  render() {
    return (
     
     
      <div>
      <Nav/>
      <h2 class="col-sm-12 align-self-center text-center " id="HeaderHome">Inicio</h2>
      <Main/>
      <hr/>
      <h2 style={{textAlign:"center"}} >Balance Actual</h2>
      <div id="Balance"> <Balance  /></div>
      <hr/>
      <h2 style={{textAlign:"center"}} >Ver Ultimos Registros</h2>
      <div id="Last"><Last10/></div>
      <hr/>
      <h2 style={{textAlign:"center"}} >Nuevo Registro</h2>
      <div id="Form"><Formapp/></div>
     
      <hr/>
      <h2 style={{textAlign:"center"}}>Ver Todos los Registros</h2>
      <div id="All"><Listado/></div>
      </div>
      
    );
  }
}

export default App;
