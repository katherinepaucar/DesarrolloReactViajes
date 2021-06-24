import React,{Component} from 'react';
import firebaseConf from '../config/Firebase';
import '../styles/Logado.css';

export default class Logado extends Component{
    logout(){
        firebaseConf.auth().signOut().then(
            alert('Has cerrado sesión')
        )
    }

    render(){
        console.log()
        return(
            <div className="container text-center" style={{minHeight:'450px'}}>

                <div className="contenidoLogin">
    
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <p className="verde">Bienvenid@</p> 
                    </div>
                    <div className="col-md-4 letra">
                    <p>{this.props.dato.email} </p> 
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="verde">Se ha iniciado sesión correctamente</p>   
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="rojo">Puedes cerrar sesión haciendo clic en el siguiente botón:</p>
                   
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                <div className="col-md-2"></div>
                    <div className="col-md-8">
                     
                    <button type="submit" className="btn btn-dark" onClick={this.logout}>Cerrar Sesión</button>  
                    </div>
                    <div className="col-md-2"></div>
                </div>
                </div>
                

                 

                     
               
            </div>
        )
    }
}


