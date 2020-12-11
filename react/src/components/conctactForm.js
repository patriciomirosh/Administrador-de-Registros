import axios from "axios";
import React, { Component } from "react";
import {handleInputChangeNormal} from './NormalFunctions'
export default class ContactForm extends Component {
    constructor(args) {
        super(args);
    
        this.state = {
       name:"",
       email:"",
       subject:"",
       message:"",
       conctactME: this.props.conctactME
    
        };
    }
    onSubmit = (e) =>{
        e.preventeDefault()
       axios.post(`http://localhost:3050/email`,
       {
           name:this.state.name,
           email:this.state.email,
           subject:this.state.subject,
           message:this.state.message,
       })
       this.setState({name:"",
       email:"",
       subject:"",
       message:"",})

    }
    

  render() {
    return (
     
        <section className="mb-4" >

       
        <h2 className="h1-responsive font-weight-bold text-center my-4">Contactanos</h2>
        
        <p className="text-center w-responsive mx-auto mb-5">¿Tiene usted alguna pregunta? No dude en contactarnos directamente. Me pondre en contacto contigo en
            cuestión de horas para ayudarte.</p>
    
        <div className="row">
    
            <div className="col-md-9 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" onSubmit={this.onSubmit}>
    
                   
                    <div className="row">
    
                       
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="text" id="name" name="name" value={this.state.name}  className="form-control" onChange={handleInputChangeNormal.bind(this)} />
                                <label htmlFor="name"  >Tu nombre</label>
                            </div>
                        </div>
                       
    
                       
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="text" id="email" name="email"  value={this.state.email} className="form-control"  onChange={handleInputChangeNormal.bind(this)}/>
                                <label htmlFor="email" className="">Tu email</label>
                            </div>
                        </div>
                       
    
                    </div>
                   
    
                   
                    <div className="row">
                        <div className="col-md-12">
                            <div className="md-form mb-0">
                                <input type="text" id="subject" name="subject" value={this.state.subject} className="form-control" onChange={handleInputChangeNormal.bind(this)}/>
                                <label htmlFor="subject" className="">Asunto</label>
                            </div>
                        </div>
                    </div>
                   
    
                   
                    <div className="row">
    
                       
                        <div className="col-md-12">
    
                            <div className="md-form">
                                <textarea type="text" id="message" name="message" value={this.state.message} rows="2" className="form-control md-textarea" onChange={handleInputChangeNormal.bind(this)}></textarea>
                                <label htmlFor="message">Tu mensaje</label>
                            </div>
    
                        </div>
                    </div>
                   
                <div className="text-center text-md-left">
                <button className="btn btn-primary" type="submit" required="required" >Enviar</button>
                </div>
                </form>
    
               
                <div className="status"></div>
            </div>
           
    
           
            <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                    <li><i className="fas fa-map-marker-alt fa-2x"></i>
                        <p>Cippoletti Argentina Cp 8324</p>
                    </li>
    
                </ul>
            </div>
           
    
        </div>
    
    </section>
    
    );
  }
}
