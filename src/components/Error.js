import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Error.css";

class Error extends React.Component{

    render(){
        return(
            <div className="container border containerPrincipal">


                <div id="background"></div>
                <div className="top">
                <h1>404</h1>
                <h3>Página no encontrada</h3>
                </div>
                <div className="container1">
                <div className="ghost-copy">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                    <div className="four"></div>
                </div>
                <div className="ghost">
                    <div className="face">
                    <div className="eye"></div>
                    <div className="eye-right"></div>
                    <div className="mouth"></div>
                    </div>
                </div>
                <div className="shadow"></div>
                </div>
                <div className="bottom">
                <p>La URL introducida no es válida</p>
                <div className="link">
                    <Link to="/">Inicio</Link>
                    
                </div>
                
                </div>


                </div>
        );
    }
}

export default Error;