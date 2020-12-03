import React, { Component } from 'react'
import axios from 'axios'
const Concepto ="Primera entrada"
const Monto =1
const Fecha ="2020-10-10"
const Tipo = "in"
export default class Sign extends Component {

    constructor(args) {
        super(args)

        this.state = {

            Username: "",
            Mail: "",
            Password: "",
            Password2: "",
            acept: false,
            
    

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
    
    onSubmit = e => {
        
        e.preventDefault();
        

        
        if (this.state.acept===true){
        const urlUser = `http://localhost:3050/create/${this.state.Username}`
        const urlUser2 =`http://localhost:3050/first/ad${this.state.Username}`
        if (this.state.acept === true && this.state.Password===this.state.Password2){
            setTimeout(   axios.post(urlUser),2000)
            // Tabla usuarios 
            setTimeout(axios.post(urlUser2,{
                Concepto: Concepto,
                Monto: Monto,
                Fecha: Fecha,
                Tipo: Tipo
                
                }),2000)
              
        
                setTimeout( axios.post(`http://localhost:3050/newUser/`,{
            Username:this.state.Username,
            Mail:this.state.Mail,
            Password:this.state.Password}),2000)
       
      

      
       alert(`El usuario ${this.state.Username} fue creado correctamente `)
         
        
    }else{alert("Las contraseñas no son iguales, intente otra vez")}
    }else{alert("Acepte los terminos")}
    }
    onClick = ()=> {
        if (this.state.acept){
            this.setState({acept:false})
        }else{this.setState({acept:true})}

    }





    render() {
        return (
            <div>
                <form hidden={this.props.hidden} onSubmit={this.onSubmit}>

                    <div id="Lista" className="container-sm ">
                        <div className="row">
                            <h2 className="col-sm-12 align-self-center text-center ">Ingrese su nuevo Usuario</h2>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 align-self-center text-center ">
                                {" "}
                                <label htmlFor="Username">Nombre de usuario: .</label>
                                <input name="Username" id="Username"
                                    type="text" value={this.state.Username}
                                    onChange={this.handleInputChange.bind(this)}
                                    required="required" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 align-self-center text-center">
                                {" "}
                                <label htmlFor="Mail" >Mail: . </label>
                                <input id="Mail" placeholder="example@gmail.com"
                                    type="Mail"
                                    onChange={this.handleInputChange.bind(this)}
                                    value={this.state.Mail}
                                    name="Mail" required="required" />
                                <br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 align-self-center text-center">
                                {" "}
                                <label > Cree una Contraseña: .</label>
                                <input htmlFor="Password" id="Password"
                                    type="Password" required="required" name="Password" onChange={this.handleInputChange.bind(this)}
                                    value={this.state.Password} />
                                <br />
                                <div className="col-sm-12 align-self-center text-center">
                                {" "}
                                <label > Repita la Contraseña: .</label>
                                <input htmlFor="Password2" id="Password2"
                                    type="Password" required="required" name="Password2" onChange={this.handleInputChange.bind(this)}
                                    value={this.state.Password2} />
                                <br />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-12 align-self-center text-center">
                        <input type="checkbox" name="acept" onClick={this.onClick} ></input>Acepte los terminos</div>
                        </div>
                        <div className="col-sm-12 align-self-center text-center">
                        <button className="btn btn-info" type="submit"  name="submit">Guardar Usuario</button> 
                        </div>
                 
                       
                        
                    </div>
                </form>
            </div>
        )
    }
}
