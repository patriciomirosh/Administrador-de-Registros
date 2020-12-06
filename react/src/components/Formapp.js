import React, { Component } from 'react'
import axios from 'axios'
import {handleInputChangeNormal}   from './NormalFunctions'

export default class Formapp extends Component {
      
   constructor(args){
       super(args)
       
       this.state ={
        
        Concepto: "",
        Monto: "",
        Fecha:"",
        Tipo:"",
        acept:  "",
        message:"",
        NewLog:true,
        NewLogTextButton:"Quiere Ingresar un nuevo Registro",
        NewLogColorButton:"btn btn-info",     
   }}

  onSubmit= e =>{
    if (this.state.acept===true){
    axios.post(`http://localhost:3050/add/${this.props.Username1}`,{
         
        Concepto: this.state.Concepto,
        Monto:this.state.Monto,
        Fecha:this.state.Fecha,
        Tipo: this.state.Tipo
        
    })
this.setState({Concepto: "",
Monto: "",
Fecha:"",
Tipo:"",
acept:  "",})}
      e.preventDefault();
  } 
   save(e){
       if(!this.validate()){
        return;
       }
       this.setState({
       message: "El Registro "+this.state.Concepto+ " fue creado correctamente"
    })
    
   }
   validate(){
       if(this.state.acept !== true){
           this.setState({
            
                   message:"Acepte los terminos"
               })
               return false
           }
           return true
       }
    
    onClickForm = () =>{
    if(this.state.NewLog===false){
        this.setState({NewLog:true,NewLogTextButton:"Quiere Ingresar un nuevo Registro?",
        NewLogColorButton: "btn btn-info"})
    }else{this.setState({NewLog:false,
   NewLogTextButton:"Ocultar Formulario",
    NewLogColorButton: "btn btn-danger"})}}
    
    
    render() {
        return (
            <div>
            <div className="col-sm-12 align-self-center text-center" onClick={this.onClickForm}><button className={this.state.NewLogColorButton}>{this.state.NewLogTextButton} </button></div>
           <form  hidden={this.state.NewLog} onSubmit={this.onSubmit}>

           <div id="Lista" className="container-sm ">
             <div className="row">
            <h2  className="col-sm-12 align-self-center text-center ">Ingrese Los valores para el Nuevo Registro</h2>
             </div>
             <div className="row">
            <div className="col-sm-12 align-self-center text-center ">
            {" "}
               <label htmlFor="Concepto">Nombre de Concepto: .</label>
               <input name="Concepto" id="Concepto"
                type="text" value={this.state.Concepto} 
                onChange={handleInputChangeNormal.bind(this)}
                required="required"/>
            </div>
            </div>
            <div className="row">
      <div className="col-sm-12 align-self-center text-center">
            {" "}
               <label htmlFor="Monto" >Monto: . </label>
               <input  id="Monto" 
               type="number"  
               onChange={handleInputChangeNormal.bind(this)}
               value={this.state.Monto}
               name="Monto" required="required"/>
               <br/>
               </div>
               </div>
            <div className="row">
               <div className="col-sm-12 align-self-center text-center">
            {" "}
               <label > Fecha: .</label>
               <input htmlFor="Fecha" id="Fecha" 
               type="date" required="required" name="Fecha" onChange={handleInputChangeNormal.bind(this)}
               value={this.state.Fecha}/>
               <br/>
               </div>
               </div>
            <div className="row">
               <div className="col-sm-12 align-self-center text-center">
            {" "}
               < label  htmlFor="Tipo" >Tipo: .</label>
               <select  required="required" id="Tipo"  name="Tipo" placeholder="Seleccione una opcion" value={this.state.Tipo} onChange={handleInputChangeNormal.bind(this)}>
                 <option value="">Seleccione una opcion </option>
                   <option value="in">Ingreso </option>
                   <option value="eg">Egreso </option>

               </select>
               </div>
               </div>
            <div className="row">
               <div className="col-sm-12 align-self-center text-center">
            {" "}
               <br/>
               <input type="checkbox" id="acept" name="acept" value={this.state.acept} onChange={handleInputChangeNormal.bind(this)}/>
                <label  htmlFor="acept">Acepta los terminos  .</label><br></br>
                </div>
                </div>
            <div className="row">
                <div className="col-sm-12 align-self-center text-center">
            {" "}
               <button required="required" type="submit" className="btn btn-primary" onClick={this.save.bind(this)}> Guardar Cambios</button>
               
        <span style={{color:"green"}}>{this.state.message}</span>
               <br/>
               </div>
               </div>
               </div>
          </form>
        
            </div>
        )
    }
}
