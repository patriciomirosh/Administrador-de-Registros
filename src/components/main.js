import React, { Component } from 'react'
import imp from '../sample/imp.jpg'
import imp2 from '../sample/imp2.png'
export default class Main extends Component {
    render() {
        return (
            <main>
        <div class="container">
            <div class="row">
                <div class="col-6" >
                    <img src={imp2 }  class="img-fluid" />
                </div>
                <div class="col-5" id="ResizeTextOur">
                  
                    <h1>Nosotros</h1>
                    <p>Lorem ipsum dolor sit amet consec ratione deserunt, quisquam, voluptates beatae eligendi aliquid
                        laudantium?
                        Nostrum voluptatum suscipit eum voluptate inventore?
                        Corporis necessitatibus tempora officia possimus ullam eveniet amet adipisci laboriosam
                        officiis, beatae cupiditate exercitationem perspiciatis quidem voluptatum autem harum
                        debitis ipsam nisi aliquam. Id unde esse accusantium, quaerat dolorem sit.</p>
                      
                </div>
            </div>
<br/>
        </div>
    </main>
        )
    }
}
