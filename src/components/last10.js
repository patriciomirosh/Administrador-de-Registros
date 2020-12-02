import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";
import axios from "axios";
const api = axios.create({ baseURL: `http://localhost:3050` });

export default class Last10 extends Component {
  constructor(args) {
    super(args);

    this.state = {
      register: [],
      ListadoIngresooEgreso: "",
      listas: "",
      
    };
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.getRegister();
    this.setState({
      [name]: value,
    });
  }
  
  getRegister = (_) => {
    api.get("/last10")
      .then((res) => this.setState({ register: res.data }))
      .catch((err) => console.error(err));
  };
  renderRegister = ({ ID, Concepto, Monto, Fecha, Tipo }) => {
    if (Tipo === "in" && this.state.ListadoIngresooEgreso === "0") {
      return (
        <span class="container-fluid ">
        <span class="row"  id="ContainerLogList">
        
          
        <span class="col-sm"  >
            <span >{"ID: " + ID}</span>
          </span>
          <span class="col-sm" >
            <span >{"Concepto: " + Concepto}</span>
          </span>
          <span class="col-sm" >
            <span >{"Monto: " + Monto}</span>
          </span>
          <span class="col-sm" >
            <span >{"Fecha: " + Fecha}</span>
          </span>
          <span class="col-sm" >
            <span >{"Tipo: " + Tipo}</span>{" "}
          </span>
        </span>
        </span>
      );
    } else if (Tipo === "eg" && this.state.ListadoIngresooEgreso === "1") {
      return (
        <span class="container-fluid ">
        <span class="row"  id="ContainerLogList">
        
          
        <span class="col-sm"  >
            <span >{"ID: " + ID}</span>
          </span>
          <span class="col-sm" >
            <span >{"Concepto: " + Concepto}</span>
          </span>
          <span class="col-sm" >
            <span >{"Monto: " + Monto}</span>
          </span>
          <span class="col-sm" >
            <span >{"Fecha: " + Fecha}</span>
          </span>
          <span class="col-sm" >
            <span >{"Tipo: " + Tipo}</span>{" "}
          </span>
        </span>
        </span>
      );
    }
  };

  ;

  render() {
    return (
      <form  >
      <div  className="col-sm-12 align-self-center text-center " id="Last10Selector">
      <label>Para ver ultimos 10 Nuevos registros (ingresos o Egresos) seleccione una opcion:  .</label>
        <select
          className="btn btn-info"
          id="ListadoIngresooEgreso"
          name="ListadoIngresooEgreso"
          value={this.state.ListadoIngresooEgreso}
          onChange={this.handleInputChange.bind(this)}
         
        >
          
          <option value="">Seleccione una opcion</option>
          <option value="0" >Ingresos</option>
          <option value="1" >Egresos</option>
        </select>
        </div>
        <div> {this.state.register.map(this.renderRegister)} </div>
      </form>
    );
  }
}
