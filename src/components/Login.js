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
                     
                },
                formTitle: 'Login',
                loginBtn: true,
                fireErrors: '',
    
            }

        }

          
  validarFormu=()=>{
 
      let errors={};

      
      if(!this.state.form.usuario.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/) ){
       this.formValido=true;
        errors['usuario']="Por favor, introduce un email válido."
      }
      if(!this.state.form.password){
       this.formValido=true;
        errors['password']="Por favor, escribe una contraseña válida";
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
        .then(u=>{  alert('Usuario autenticado: ' + this.state.form.usuario)})
        .catch((error)=>{
           // alert('Usuario No válido');
          // console.log(error.message);
         
          this.setState({fireErrors: error.message});
            
          //  console.log('adios' + this.state.fireErrors);

        });

       
    }
    registrar = e =>{
     
           
            this.validarFormu();
            e.preventDefault();

            firebaseConf
            .auth()
            .createUserWithEmailAndPassword(this.state.form.usuario,this.state.form.password)
            .then(u=>{alert('Registrado Correctamente')})
            .catch((error)=>{
               console.log(error);
           
               this.setState({fireErrors: error.message});
          
            });
            
     }

        
  getAction = a => {
	if(a === 'reg'){
		this.setState({formTitle: 'Registrar nuevo usuario', loginBtn: false, fireErrors: ''});
	}else{
		this.setState({formTitle: 'Login', loginBtn: true,fireErrors: ''});
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
  
render(){

    let mensajeError = this.state.fireErrors ? ( <div className="Error"> Mensaje Error de Firebase :{this.state.fireErrors} </div> ) : null;
    
    let submitBtn = this.state.loginBtn ? 
        (<input className="loginBtn" type="submit" onClick={this.login} value="Iniciar Sesión" />) : 
        (<input className="loginBtn" type="button" onClick={this.registrar} value="Registrarse" />);
    
     let login_register = this.state.loginBtn ?
        (<button className="registerBtn" onClick={() => this.getAction('reg')}>Registrarse</button>) : 
        (<button className="registerBtn"  onClick={() => this.getAction('login')}>Iniciar Sesión</button>);

        return(
            <div className="container colorfondoform">
                <div className="row">
                    {mensajeError} 
                    <div className="col-sm-12 col-md-12">
                    <div className ="registrar">{login_register}</div>
                 <form style={ this.state.formTitle=='Login' ? { color:'green', backgroundColor: '#00b686'} : { color:'navy', backgroundColor: '#007c91'}}>
                 <div  className="titulo">{this.state.formTitle}</div>
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
                        
                        <div className="botonLogin">
                        {submitBtn} 
                        </div>
                        
                   
                </form>
                
                
                </div>
                </div>
            </div>
        );
    }
}

export default Login;