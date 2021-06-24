import React from 'react';
import firebaseConf from '../config/Firebase';
import '../styles/Login.css';


class Login extends React.Component{
  formValido=false;
    constructor(props){
            super(props);
            this.state={
                form:{
                    usuario:'',
                    password:'',
                }

    
            }

        }
    handleChange= e =>{
            this.setState({
                form:{
                    ...this.state.form,
                    [e.target.name]: e.target.value
                }
              
            });
       // console.log(this.state.form)
    }
          
  validarFormu=()=>{
 
      let errors={};

      
      if(!this.state.form.usuario.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/) || this.state.form.usuario.lenght > 0 ){
       this.formValido=true;
        errors['usuario']="Por favor, ingresa un email válido"
      }
      if(!this.state.form.password.match(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,8}$/) || this.state.form.password.lenght >0 ){
       this.formValido=true;
        errors['password']="La contraseña debe tener al entre 6 y 8 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula."
      }

      //Para formulario ok
      this.setState({
        errors:errors
      });

      return this.validarFormu;
      
  }

    login =e=>{

       this.validarFormu();
        e.preventDefault();
       
        
        firebaseConf
        .auth()
        .signInWithEmailAndPassword(this.state.form.usuario,this.state.form.password)
        .then(u=>{  alert('Usuario autenticado: ' + this.state.form.usuario);})
        .catch(function(error){
           // alert('Usuario No válido');
            console.log(error)

        });
    }
        registrar = e =>{
            e.preventDefault();

            firebaseConf
            .auth()
            .createUserWithEmailAndPassword(this.state.form.usuario,this.state.form.password)
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
                        <input type="email" className="form-control" name="usuario" 
                         aria-describedby="emailHelp" 
                         onChange={this.handleChange}
                        value={this.state.form.usuario}/>
                        <span style={{color:'white',fontSize:'10px',backgroundColor:'#f05545'}}>
                        {this.formValido && this.state.errors.usuario}
                        </span>
                       
                            
                    </div>
                    <div className="form-group">
                        <label htmlFor="passw1">Password</label>
                        <input type="password" className="form-control"  name="password" 
                        onChange={this.handleChange}
                        value={this.state.form.password}/>
                        <span style={{color:'white',fontSize:'10px',backgroundColor:'#f05545',textAlign:'justify'}}>
                        {this.formValido && this.state.errors.password}
                    
                        </span>
                        
                    </div>
                        
                        
                    <button style={{margin:'5px'}} type="button" className="btn btn-primary" onClick={this.login}>Iniciar Sesión</button>
                </form>
                </div>
                </div>
            </div>
        );
    }
}

export default Login;