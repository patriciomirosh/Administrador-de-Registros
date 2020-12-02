// import React, { Component } from 'react'
// import axios from 'axios'
// export default class Sign extends Component {

//     constructor(args) {
//         super(args)

//         this.state = {

//             Username: "",
//             Mail: "",
//             Password: "",
//             Password2: "",
//             acept: "",
//             TableName:"",
//             NewLog: false,
//             NewLogTextButton: "Quiere Ingresar un nuevo Registro",


//         }
//     }
//     handleInputChange(event) {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;

//         this.setState({
//             [name]: value
//         });
//     }
    
//     onSubmit = e => {
//         e.preventDefault();
//         const urlUser = `http://localhost:3050/create/${this.state.Username}`
//         if (this.state.acept === true && this.state.Password===this.state.Password2){
//             axios.post(urlUser)
//             // Tabla usuarios 
//             axios.post()
        
//         const urlUser
//         axios.post(`http://localhost:3050/User/`,{
//             Username:this.state.Username,
//             Mail:this.state.Mail,
//             Password:this.state.Password,


//         })

//     }
    
//     }





//     render() {
//         return (
//             <div>
//                 <form hidden={this.state.NewLog} onSubmit={this.onSubmit}>

//                     <div id="Lista" class="container-sm ">
//                         <div class="row">
//                             <h2 class="col-sm-12 align-self-center text-center ">Ingrese su nuevo Usuario</h2>
//                         </div>
//                         <div class="row">
//                             <div class="col-sm-12 align-self-center text-center ">
//                                 {" "}
//                                 <label htmlFor="Username">Nombre de usuario: .</label>
//                                 <input name="Username" id="Username"
//                                     type="text" value={this.state.Username}
//                                     onChange={this.handleInputChange.bind(this)}
//                                     required="required" />
//                             </div>
//                         </div>
//                         <div class="row">
//                             <div class="col-sm-12 align-self-center text-center">
//                                 {" "}
//                                 <label htmlFor="Mail" >Mail: . </label>
//                                 <input id="Mail"
//                                     type="Mail"
//                                     onChange={this.handleInputChange.bind(this)}
//                                     value={this.state.Mail}
//                                     name="Mail" required="required" />
//                                 <br />
//                             </div>
//                         </div>
//                         <div class="row">
//                             <div class="col-sm-12 align-self-center text-center">
//                                 {" "}
//                                 <label > Repita la Contraseña: .</label>
//                                 <input htmlFor="Password" id="Password"
//                                     type="Password" required="required" name="Password" onChange={this.handleInputChange.bind(this)}
//                                     value={this.state.Password} />
//                                 <br />
//                                 <div class="col-sm-12 align-self-center text-center">
//                                 {" "}
//                                 <label > Repita la Contraseña: .</label>
//                                 <input htmlFor="Password2" id="Password2"
//                                     type="Password2" required="required2" name="Password2" onChange={this.handleInputChange.bind(this)}
//                                     value={this.state.Password} />
//                                 <br />
//                                 <button type="checkbox" name="acept" ></button>
//                             </div>
//                         </div>
                 
                       
                        
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }
