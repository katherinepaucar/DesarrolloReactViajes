import React from 'react';
import firebaseConf from '../config/Firebase';
import '../styles/Login.css';


class Login extends React.Component{

    usuario=React.createRef();
    password=React.createRef();
    constructor(props){
            super(props);
            this.login = this.login.bind(this);
            this.signup=this.signup.bind(this);
        }
    login(e){
        e.preventDefault();
        var miusuario=this.usuario.current.value;
        var mipassword=this.password.current.value;
        
        firebaseConf
        .auth()
        .signInWithEmailAndPassword(miusuario,mipassword)
        .then(u=>{  alert('Usuario autenticado: ' + miusuario);})
        .catch(function(error){
            alert('Usuario No válido');
            console.log(error)

        });
    }
        signup(e){
            e.preventDefault();
            var miusuario=this.usuario.current.value;
            var mipassword=this.password.current.value;
            firebaseConf
            .auth()
            .createUserWithEmailAndPassword(miusuario,mipassword)
            .then(u=>{})
            .catch(function(error){
                console.log(error);
            });
        }

        
render(){


        return(
            <div className="container colorfondoform">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                 <form >
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" 
                         aria-describedby="emailHelp" 
                         ref={this.usuario}/>
                            
                    </div>
                    <div className="form-group">
                        <label htmlFor="passw1">Password</label>
                        <input type="password" className="form-control" id="passw1" 
                        ref={this.password}/>
                    </div>
                        
                        
                    <button style={{margin:'5px'}} type="submit" className="btn btn-primary" onClick={this.login}>Iniciar Sesión</button>
                </form>
                </div>
                </div>
            </div>
        );
    }
}

export default Login;