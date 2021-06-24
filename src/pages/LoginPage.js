import React, { Component } from 'react';
import Logado from '../components/Logado';
import Login from '../components/Login';
import firebaseConf from '../config/Firebase';
class LoginPage extends React.Component{

    constructor(){
        super();
        this.state = {
          user: null
        }
    }
    componentDidMount(){
        this.authListener();
    }
    authListener(){
        firebaseConf.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({user});
            }else{
                this.setState({user:null});
            }
        });

    }
    render(){
        return(
            <div>
                {this.state.user ? (<Logado dato={this.state.user}/>): (<Login/>)}
            </div>
        );
    }

}

export default LoginPage;