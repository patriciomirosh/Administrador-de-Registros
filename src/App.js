
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
import Sign from './components/sign';

class App extends Component {

  render() {
    const Username="adpatricio"
    return (
      
     
      <div>
        
      <Nav  />
      <h1 class="col-sm-12 align-self-center text-center " id="HeaderHome"><em>Inicio</em></h1>
      <Main />
      <hr/>
      <h2 style={{textAlign:"center"}} >Balance Actual</h2>
      <div id="Balance"> <Balance Username={Username} /></div>
      <hr/>
      <h2 style={{textAlign:"center"}} >Ver Ultimos Registros</h2>
      <div id="Last"><Last10 Username={Username}/></div>
      <hr/>
      <br/>
      
      <h1 style={{marginTop: "1%" , textAlign:"center"}}> ABR de Operaciones </h1>


      <h2 style={{marginTop: "2%", textAlign:"center"}} >Nuevo Registro</h2>
      <div id="Form"><Formapp Username={Username}/></div>
     
      <hr/>
      <h2 style={{textAlign:"center"}}>Ver Todos los Registros</h2>
      <div id="All"><Listado Username={Username}/></div>
      {/* <Sign/> */}
      </div>
      
    );
  }
}

export default App;
