import React, { Component } from 'react'
import axios from 'axios'
const api= axios.create({ baseURL:`http://localhost:3050` });
const messageVisibilty="Mostrar Balance actual"
const messageHidden="Ocultar Balance Actual"

export default class Balance extends Component {
    
    constructor(args){
        super(args)
    
        this.state ={
            BalanceIng: "",
            BalanceEg:"",
            hidden:true,
            message:"Mostrar Balance actual",
            colorButton:"btn btn-info"

        }
    
       
    }
    onClick= () =>{
        
        this.getBalanceIng()
        this.getBalanceEg()
        if (this.state.hidden){
        this.setState({hidden:false})
        this.setState({message:messageHidden})
        this.setState({ colorButton:"btn btn-danger"})
    }
        else{ this.setState({hidden:true})
        this.setState({message:messageVisibilty}) 
        this.setState({ colorButton:"btn btn-info"})
    }
        

    }

    getBalanceIng = _ =>{
        api.get('/balance').then(res1 => this.setState({BalanceIng:res1.data[0]["suma"]})
        )
        .catch(err => console.error(err))
   
    }
    getBalanceEg = _ =>{
        api.get('/balanceEg').then(res1 => this.setState({BalanceEg:res1.data[0]["suma"]})
        )
        .catch(err => console.error(err))
   
    }
     
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value,
        });}
    render() {
        return (<div>
            
           <div class="col-sm-12 align-self-center text-center " ><button value={this.state.ListadoIngresooEgreso}
          onClick={this.onClick} name="balanceButon" className={this.state.colorButton} > {this.state.message}</button></div> 
            <div class="container sm"  id="ActualBalance" hidden={this.state.hidden}>
                
                <h1  class="col-sm-12 align-self-center text-center " > Tu Balance Actual es: </h1>
         <h2 class="col-sm-12 align-self-center text-center "> <b>{this.state.BalanceIng-this.state.BalanceEg+" $"}  </b>  </h2>
            </div></div>
        )
    }
}
