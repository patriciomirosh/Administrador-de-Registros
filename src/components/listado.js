import React, { Component } from "react";
import axios from "axios";

const api = axios.create({ baseURL: `http://localhost:3050` });
var arreglos = -1;

export default class Listado extends Component {
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

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name[target.name.length - 1];

    this.setState({
      [name]: value,
    });
  }
  componentDidMount() {
    this.getRegister();
  }

  getRegister = (_) => {
    api
      .get("/get")
      .then((res) => this.setState({ register10: res.data }))

      .catch((err) => console.error(err));
  };
  onSubmit = (arreglos, e) => {
    e.preventDefault();
    var a = [];
    let conceptos = "Concepto" + arreglos;
    let Monto = "Monto" + arreglos;
    let Fecha = "Fecha" + arreglos;
    let ID = "ID" + arreglos;
    alert("Registro nro: "+document.getElementById(ID).value + " Actualizado ");
    a.push(document.getElementById(conceptos).value);
    a.push(document.getElementById(Monto).value);
    a.push(document.getElementById(Fecha).value);
    a.push(document.getElementById(ID).value);

    const urlUpdate = `http://localhost:3050/update/${a[3]}`;

    axios.put(urlUpdate, {
      Concepto: a[0],
      Monto: a[1],
      Fecha: a[2],
    });
  };
  onClick = (arreglos, e) => {
    e.preventDefault();

    let ID = "ID" + arreglos;
    let Delete = document.getElementById(ID).value;
    const urlDelete = `http://localhost:3050/delete/${Delete}`;
    axios.delete(urlDelete);
    alert("El registro " + Delete+" ha sido eliminado, Actualize para ver los registros")
  };

  renderRegister = ({ ID, Concepto, Monto, Fecha, Tipo }) => {
    if (Tipo === "in") {
      Tipo = "Ingreso";
    } else {
      Tipo = "Egreso";
    }

    arreglos = arreglos + 1;

    return (
      <form
        name="Form"
        id={arreglos}
        onSubmit={this.onSubmit.bind(this, arreglos)}
      >
        <div class="container">
          <div class="row">
            <div class="col-sm">
              {" "}
              <input
                type="text"
                onChange={this.handleInputChange.bind(this)}
                name={"Concepto0" + arreglos}
                value={this.state.Concepto0}
                id={"Concepto" + arreglos}
                required="required"
                placeholder={"Concepto: " + Concepto}
              />
            </div>
            <div class="col-sm">
              {" "}
              <input
                name={"Monto0" + arreglos}
                placeholder={"Monto: " + Monto}
                id={"Monto" + arreglos}
                required="required"
                value={this.state.Monto0}
                onChange={this.handleInputChange.bind(this)}
                type="number"
              />
            </div>
            <div class="col-sm">
              {" "}
              <input
                placeholder={"Fecha: " + Fecha}
                id={"Fecha" + arreglos}
                name={"Fecha0" + arreglos}
                required="required"
                value={this.state.Fecha0}
                onChange={this.handleInputChange.bind(this)}
              />
            </div>

            <div class="col- ">
              {" "}
              <label> {" " + Tipo + " ID "} </label>
            </div>

            <div class="col-sm ">
              {" "}
             
              <input name="ID" value={ID} id={"ID" + arreglos} />
            </div>
            <div class="col-sm-1">
              {" "}
              <button type="submit" className="btn btn-primary">Guardar</button>
            </div>
            <div class="col-sm-1">
              {" "}
              <button
                onClick={this.onClick.bind(this, arreglos)}
                className="btn btn-danger" >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  };

  render() {
    return (<div>{this.state.register10.map(this.renderRegister)}
        <p class="container sm">*Fecha tiene el formato dd/mm/yyyy, repitalo para actualizar el registro, sino dara como 00/00/0000 a la Fecha. Al eliminar o guardar Cambios para poder verlos se tiene que actualizar el navegador </p>  
        </div> );
  }
}