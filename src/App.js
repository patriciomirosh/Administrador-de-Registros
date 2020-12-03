import axios from 'axios'
import './App.css';
import Formapp from './components/Formapp';
import React, { Component } from "react";
import Last10 from './components/last10';
import Balance from './components/balance';
import Listado from './components/listado';
import Nav from './components/navegador'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Main from './components/main'
import './sample/style.js'
import Sign from './components/sign';


class App extends Component {

  constructor(args) {
    super(args);

    this.state = {
      Register: "",
      Username: "patricio",
      Password: "",
      aceptI: false,
      acept: true,
      aceptRegister: true,
      admin: true,
      setAdmin:true,
      Username1: "",


    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  onSubmit1 = (e) => {
    e.preventDefault()
    const urlUsers = `http://localhost:3050/PassWord/${this.state.Username}`

    axios.get(urlUsers).then(res => this.setState({ Register: res.data["Password"] })).catch((err) => console.error(err))
    alert(this.state.Register)
    alert(this.state.Password)
    if (this.state.Password === this.state.Password) {
      alert("Ingreso Correctamente, Buenos dias " + this.state.Username)
      const Username1 = this.state.Username
      this.setState({ Username1: Username1 })

      this.setState({ aceptI: true })
      this.setState({ acept: false })



    } else { alert("Usuario o Contraseña Incorrectos intente otra vez") }

    





  }

  onClickI = () => {
    if (this.state.aceptI) { this.setState({ aceptI: false }) }
    else { this.setState({ aceptI: true }) }
  }
  onClickR = () => {
    if (this.state.aceptRegister) { this.setState({ aceptRegister: false }) }
    else { this.setState({ aceptRegister: true }) }
  }
  onClickA = () => {
    if (this.state.admin) { this.setState({ admin: false }) }
    else { this.setState({ admin: true }) }
  }





  render() {
    return (

      <div>
        <nav> <div className="container fluid" id="navBar">
          <button onClick={this.onClickI}  className="btn btn-info" >Inicio Sesion</button>
          <button onClick={this.onClickR} className="btn btn-info">Registro nuevo Usuario</button>
          <button onClick={this.onClickA} className="btn btn-info" hidden={this.state.setAdmin}>Administrador</button></div>
        </nav>
        <Sign hidden={this.state.aceptRegister} />
        <div>
          <div class="container fluid" id="Lista">
            <form hidden={this.state.aceptI} onSubmit={this.onSubmit1}>

              <div className="row">
                <h2 className="col-sm-12 align-self-center text-center ">Ingrese Usuario</h2>
              </div>
              <div className="row">
                <div className="col-sm-12 align-self-center text-center ">
                  {" "}
                  <label htmlFor="Username">Nombre de usuario: .</label>
                  <input name="Username" id="UsernameR"
                    type="text" value={this.state.Username}
                    onChange={this.handleInputChange.bind(this)}
                    required="required" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 align-self-center text-center">
                  {" "}
                  <label htmlFor="password" >Contraseña: . </label>
                  <input id="MailR"
                    type="password"
                    onChange={this.handleInputChange.bind(this)}
                    value={this.state.Password}
                    name="Password" required="required" />
                  <br />
                </div>
              </div>

              <div className="col-sm-12 align-self-center text-center">
                <button className="btn btn-info" type="submit" name="submit">Ingresar Usuario</button>
              </div>
            </form>
          </div>
          <div hidden={this.state.acept}>
            <Nav />
            <h1 className="col-sm-12 align-self-center text-center " id="HeaderHome"><em>Inicio</em></h1>
            <Main Username1={this.state.Username1} />
            <hr />
            <h2 style={{ textAlign: "center" }} >Balance Actual</h2>
            <div id="Balance"> <Balance Username={this.state.Username} Username1={this.state.Username1} /></div>
            <hr />
            <h2 style={{ textAlign: "center" }} >Ver Ultimos Registros</h2>
            <div id="Last"><Last10 Username1={this.state.Username1} /></div>
            <hr />
            <br />


            <h1 style={{ marginTop: "1%", textAlign: "center" }}> ABR de Operaciones </h1>


            <h2 style={{ marginTop: "2%", textAlign: "center" }} >Nuevo Registro</h2>
            <div id="Form"><Formapp Username1={this.state.Username1} /></div>

            <hr />
            <h2 style={{ textAlign: "center" }}>Ver Todos los Registros</h2>
            <div id="All"><Listado Username1={this.state.Username1} /></div>
          </div>




        </div>

      </div>



    );
  }
}


export default App;
