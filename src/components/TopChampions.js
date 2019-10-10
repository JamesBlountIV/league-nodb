import React, {Component} from 'react';
import '../components/TopChampions.css';
import '../components/championImg.css';
import '../components/Navbar.css';

export default class Home extends Component{
    constructor() {
        super();
        this.state = {

        }
    }
    
    render() {
        return (
        <body className="Champion-container">
            <section className="ChampIconSection">
                <div className="ChampSquare"> 
                    <div className="Tryndamere"></div>
                    <p>Tryndamere</p>
                </div> 
                <div className="ChampSquare">    
                    <div className="Drmundo"></div>
                    <p>Dr. Mundo</p>
                </div>    
                <div className="ChampSquare">     
                    <div className="Volibear"></div>
                    <p>Volibear</p>
                </div>    
                <div className="ChampSquare">     
                    <div className="Graves"></div>
                    <p>Graves</p>
                </div>    
                <div className="ChampSquare">     
                    <div className="Ekko"></div>
                    <p>Ekko</p>
                </div>    
            </section>
            <section className="ChampIconSection"> 
                <div className="ChampSquare">     
                    <div className="Khazix"></div>
                    <p>Kha'Zix</p>
                </div>    
                <div className="ChampSquare">     
                    <div className="Nunu"></div>
                    <p>Nunu & Willump</p>
                </div>    
                <div className="ChampSquare">     
                    <div className="Hecarim"></div>
                    <p>Hecarim</p>
                </div>    
                <div className="ChampSquare">     
                    <div className="Udyr"></div>
                    <p>Udyr</p>
                </div>    
                <div className="ChampSquare">     
                    <div className="Vi"></div>
                    <p>Vi</p>
                </div>    
            </section>
                
        </body>
        )
    }
}