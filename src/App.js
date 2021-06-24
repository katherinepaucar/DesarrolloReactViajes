import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

import Home from './pages/Home';
import Destino from './pages/Destino';
import Clima from './pages/Clima';
import Tiempo from './components/Tiempo';
import aleman from './images/banderas/germany.png';
import spain from './images/banderas/spain.png';
import ingles from './images/banderas/england.png';

import i18n from './i18n';
import { withNamespaces } from 'react-i18next';
import Error from './components/Error';
import Logado from './components/Logado';
import Login from './components/Login';
import LoginPage from './pages/LoginPage';

//Ponemos aqui las paginas

function App({t}) {

  
  const changeLanguage=(lng)=>{
    i18n.changeLanguage(lng);
  }
  return (
    <Router>

      <div className="container-sm container-md container-lg ">
      <div className="idioma">
          <img src={aleman} alt="imagen idioma" onClick={() => changeLanguage('de')} style={{width:'30px'}}/>
          <img src={ingles} alt="imagen idioma"  onClick={() => changeLanguage('en')}style={{width:'30px'}}/>
          <img src={spain} alt="imagen idioma" onClick={() => changeLanguage('es')} style={{width:'30px'}}/>
         
      </div>
        <NavBar/>
        
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/destino/:id" component={Destino}/>
        <Route exact path="/clima" component={Clima}/>
        <Route exact path="/tiempo/:codigo/:dato1/:dato2" component={Tiempo}/>
        <Route exact path="/loginPage" component={LoginPage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/logado" component={Logado}/>
        <Route exact path="/" component={Home}/>
        <Route   path="*" component={Error}/>
                
        </Switch>

        <Footer/>
      
      
      </div>
    </Router>
  );
}

export default withNamespaces() (App);
