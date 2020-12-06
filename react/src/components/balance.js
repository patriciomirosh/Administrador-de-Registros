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
            colorButton:"btn btn-info",
            pato:"",
            Username1:this.props.Username1
        }
    
    


    }
    
    
    
    onClick= () =>{
        
        
        if (this.state.hidden){
        
        
        this.setState({hidden:false,
        message:messageHidden,
        colorButton:"btn btn-danger"})
        this.getBalanceIng()
        this.getBalanceEg()
    }
        else{ this.setState({hidden:true})
        this.setState({message:messageVisibilty,
        colorButton:"btn btn-info"})
        
    }
        this.getBalanceIng()
        this.getBalanceEg()
        

    }

    getBalanceIng = _ =>{
        api.get(`/balance/${this.props.Username1}`).then(res1 => this.setState({BalanceIng:res1.data[0]["suma"]})
        )
        .catch(err => console.error(err))
   
    }
    getBalanceEg = _ =>{
        api.get(`/balanceEg/${this.props.Username1}`).then(res1 => this.setState({BalanceEg:res1.data[0]["suma"]})
        )
        .catch(err => console.error(err))
   
    }
     
    
    render() {
        return (<div>
            
           <div className="col-sm-12 align-self-center text-center " ><button value={this.state.ListadoIngresooEgreso}
          onClick={this.onClick} name="balanceButon" className={this.state.colorButton} > {this.state.message}</button></div> 
            <div className="container sm"  id="ActualBalance" style={{width:"60%"}} hidden={this.state.hidden}>
                
                <h1  className="col-sm-12 align-self-center text-center " > Tu Balance Actual es: </h1>
         <h2 className="col-sm-12 align-self-center text-center "> <b>{this.state.BalanceIng-this.state.BalanceEg+" $"}  </b>  </h2>
            </div></div>
        )
    }
}
