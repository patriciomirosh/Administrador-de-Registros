import React, { Component } from 'react'
import consultas from "../sample/iconsFooter/consultas.png"
import whatsapp from "../sample/iconsFooter/whatsapp.png"
import email from "../sample/iconsFooter/email.png"
import facebook from "../sample/iconsFooter/facebook.png"
import instagram from "../sample/iconsFooter/instagram.png"
import ContactForm from './conctactForm'
export default class Footer extends Component {
    constructor(args) {
        super(args);
        this.state={

        contactMe:true
        };
    }
    onClick =()=>{
        if(this.state.contactMe===true ){this.setState({contactMe:false})}
        else{this.setState({contactMe:true})}
    } 
    
    render() {
        
        return (
           <div>
           
            <footer style={{marginTop:"25%",}}>
            <div class="padre">
                <ul>
                    <li>
                        <img src={consultas} alt="consultas" class="icono1"/>
                        <buttom  className="btn btn-info" onClick ={this.onClick} >Consultas </buttom>
                    </li>
                    <li>
                        <img src={whatsapp} alt="celular" class="icono1"/>
                        <label>+54 9 3756 532653</label>
                    </li>
                    <li>
                        <img src={email} alt="mail" class="icono1"/>
                        <label>mirospatricio@gmail.com</label>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h4>Nuestras redes sociales</h4>
                    </li>
                    <div class="redes">
                        <li>
                            <img src={facebook} alt="facebook" class="icono2"/>
                            <a href="https://www.facebook.com/patricio.pereyra.50/" className="oculto consultas">Facebook
                            </a>
                        </li>
                        <li>
                            <img src={instagram} alt="instagram" class="icono2"/>
                            <a href="https://www.instagram.com/pato_16_2/"
                                class="oculto consultas">Instagram</a>
                        </li>
                    </div>
                </ul>
            
            </div>
        </footer>
        <div hidden={this.state.contactMe}>
        <ContactForm  />
        </div>
        </div>

        )
    }
}
