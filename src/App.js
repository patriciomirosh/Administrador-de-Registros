
import './App.css';
import Formapp from './components/Formapp';
import React, { Component } from "react";
import Last10  from './components/last10';
import Balance from './components/balance';
import Listado from './components/listado';
import Nav from './components/navegador'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import'./sample/style.js'

class App extends Component {

  render() {
    return (
     
     <div>
      <h1 class="col-sm-12 align-self-center text-center " id="HeaderHome">Inicio</h1>
      <Nav/>
      <Balance/>
      <div><Last10/></div>
      
      
     
      
      <Formapp/>
     
      <br/>

      <Listado/>
    
     
      </div>
      
    );
  }
}

export default App;
