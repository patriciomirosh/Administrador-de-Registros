import React, { Component } from 'react'
import axios from 'axios'
export default class First extends Component {
    constructor(args){
        super(args)
        
        this.state ={
         
         Concepto: "Ultimo Balance",
         Monto: 10000,
         Fecha:"06/04/2020",
         Tipo:"In",
         }
        }
    first= ()=> { axios.post("http://localhost:3050/add",{
         
        Concepto: this.state.Concepto,
        Monto:this.state.Monto,
        Fecha:this.state.Fecha,
        Tipo: this.state.Tipo
        
    }) }

    render() {
        return (
            <div>
                {this.first}
            </div>
        )
    }
}
