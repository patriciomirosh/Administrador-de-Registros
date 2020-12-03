import React, { Component } from 'react'
import axios from 'axios'

export default class Singup extends Component {
            
    constructor(args) {
        super(args);

        this.state = {
            Register:[],
            Username: "",
            Password: "",
            hiddenPage:false,
            ShowSignIn: true,
           
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
        onsubmit = () =>{
            const urlUsers = `http://localhost:3050/PassWord/${this.set.Username}`
            
            axios.get(urlUsers).then(res => this.setState({Register:res.data})).catch((err) => console.error(err))
            if (this.state.Password === this.state.Register[0]){
                alert("Ingreso Correctamente, Buenos dias "+ this.state.Username)
                this.setState({ShowSignIn:false})
                this.setState({hiddenPage:true})
                


            }else{alert("Usuario o Contraseña Incorrectos intente otra vez")
        
        }            
            
            
            
            
            


        }
    
    
    render()
    
    {
        
     return (
            <div>
                <div>
                <form hidden={this.state.hiddenPage} onSubmit={this.onSubmit}>

                    <div id="Lista" className="container-sm ">
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
                                <label htmlFor="Mail" >Contraseña: . </label>
                                <input id="MailR"
                                    type="password"
                                    onChange={this.handleInputChange.bind(this)}
                                    value={this.state.Mail}
                                    name="Mail" required="required" />
                                <br />
                            </div>
                        </div>
                       
                        
                        <div className="col-sm-12 align-self-center text-center">
                        <button className="btn btn-info" type="submit"  name="submit">Ingresar Usuario</button> 
                        </div>
                 
                       
                        
                    </div>
                </form>
            </div>
            </div>
        )
    }
}
