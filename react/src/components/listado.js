import React, { Component } from "react";
import axios from "axios";
import { ConvertJSONToCsv } from "./JsonToCsv";
import { handleInputChangeNormal } from "./NormalFunctions";

const api = axios.create({ baseURL: `http://localhost:3050` });
var index = -1;

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
      hidden: true,
      message: "Ver Todos los Registros",
      colorButton: "btn btn-info",
      Username: this.props.Username,
    };
  }
  onClickButton = () => {
    this.getRegister();
    if (this.state.hidden) {
      this.setState({
        hidden: false,
        message: "Ocultar y Actualizar los Registros",
        colorButton: "btn btn-danger",
      });
    } else {
      this.setState({
        hidden: true,
        message: "Ver Todos los Registros",
        colorButton: "btn btn-info",
      });
    }
  };

  downloadRegister = (_) => {
    api
      .get(`/get/${this.props.Username1}`)
      .then((res) =>
        ConvertJSONToCsv(
          res.data,
          `Tabla de registros de ${this.props.Username1}`
        )
      );
    alert("Los registros seran Descargados en su equipo");
  };

  getRegister = (_) => {
    api
      .get(`/get/${this.props.Username1}`)
      .then((res) => {
        this.setState({ register10: res.data });
      })

      .catch((err) => console.error(err));
  };
  onSubmit = (index, e) => {
    e.preventDefault();
    var a = [];
    let conceptos = "Concepto" + index;
    let Monto = "Monto" + index;
    let Fecha = "Fecha" + index;
    let ID = "ID" + index;
    alert(
      "Registro nro: " + document.getElementById(ID).value + " Actualizado "
    );
    a.push(document.getElementById(conceptos).value);
    a.push(document.getElementById(Monto).value);
    a.push(document.getElementById(Fecha).value);
    a.push(document.getElementById(ID).value);

    const urlUpdate = `http://localhost:3050/update/${this.props.Username1}/${a[3]}`;

    axios.put(urlUpdate, {
      Concepto: a[0],
      Monto: a[1],
      Fecha: a[2],
    });
  };
  onClick = (index, e) => {
    e.preventDefault();

    let ID = "ID" + index;
    let Delete = document.getElementById(ID).value;
    const urlDelete = `http://localhost:3050/delete/${this.props.Username1}/${Delete}`;
    axios.delete(urlDelete);
    alert(
      "El registro " +
        Delete +
        " ha sido eliminado, Actualize para ver los registros"
    );
  };

  renderRegister = ({ ID, Concepto, Monto, Fecha, Tipo }) => {
    if (Tipo === "in") {
      Tipo = "Ingreso";
    } else {
      Tipo = "Egreso";
    }

    index = index + 1;

    return (
      <section>
        <form
          hidden={this.state.hidden}
          name="Form"
          id={index}
          onSubmit={this.onSubmit.bind(this, index)}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm">
                {" "}
                <input
                  type="text"
                  onChange={handleInputChangeNormal.bind(this)}
                  name={"Concepto0" + index}
                  value={this.state.Concepto0}
                  id={"Concepto" + index}
                  required="required"
                  placeholder={"Concepto: " + Concepto}
                />
              </div>
              <div className="col-sm">
                {" "}
                <input
                  name={"Monto0" + index}
                  placeholder={"Monto: " + Monto}
                  id={"Monto" + index}
                  required="required"
                  value={this.state.Monto0}
                  onChange={handleInputChangeNormal.bind(this)}
                  type="number"
                />
              </div>
              <div className="col-sm">
                {" "}
                <input
                  placeholder={"Fecha: " + Fecha}
                  id={"Fecha" + index}
                  name={"Fecha0" + index}
                  required="required"
                  value={this.state.Fecha0}
                  onChange={handleInputChangeNormal.bind(this)}
                />
              </div>

              <div className="col- ">
                {" "}
                <label> {" " + Tipo + " ID "} </label>
              </div>

              <div className="col-sm ">
                {" "}
                <input name="ID" value={ID} id={"ID" + index} />
              </div>
              <div className="col-sm-1">
                {" "}
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
              </div>
              <div className="col-sm-1">
                {" "}
                <button
                  onClick={this.onClick.bind(this, index)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  };

  render() {
    return (
      <div>
        <div className="col-sm-12 align-self-center text-center">
          <button
            onClick={this.onClickButton}
            className={this.state.colorButton}
          >
            {this.state.message}
          </button>
        </div>
        {this.state.register10.map(this.renderRegister)}
        <p className="container sm" hidden={this.state.hidden}>
          *Fecha tiene el formato dd/mm/yyyy, si no sigue este formato resultara
          como 00/00/0000 a la Fecha. Al eliminar o guardar Cambios para poder
          verlos se tiene que actualizar con el boton rojo
        </p>
        <div className="col-sm-12 align-self-center text-left">
          <button
            className="btn btn-success"
            onClick={this.downloadRegister}
            hidden={this.state.hidden}
          >
            Descargar Registros
          </button>{" "}
        </div>
      </div>
    );
  }
}
