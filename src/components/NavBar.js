import React from "react";
import "../styles/NavBar.css";
import {Link, NavLink} from 'react-router-dom';
import { withNamespaces } from "react-i18next";

//
const datos = [
  {
    id: 1,
    titulo: "Japón",
  },
  {
    id: 2,
    titulo: "Tailandia",
  },
  {
    id: 3,
    titulo: "Hawai",
  },
];
//
function NavBar({t}) {
 
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">

          <span className="navbar-brand"></span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">

              <NavLink to="/home" className="nav-link main-nav" activeClassName="main-nav-active">
                {t("inicio.nav")}
                </NavLink>
                 
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"  
                          
                >
                  {t("destinos.nav")}
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink">
              {datos.map((data)=> 
                <div key={data.id}>

                   <Link                    
                    className="dropdown-item text-dark" 
                    to={`/destino/${data.id}`}>
                    {data.titulo}
                    </Link>
              
                </div>

              )}

                </div>
                </li>
                <li className="nav-item">
                 <NavLink to="/clima" className="nav-link main-nav" activeClassName="main-nav-active">
                  {t("clima.nav")}
                </NavLink>
              </li>
             
            

            </ul>

          </div>
       
               <NavLink to="/loginPage" className="nav-link main-nav text-right logincolor" activeClassName="main-nav-active">
               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAB90lEQVRIS8WW0TVEQRBEayMgA0SADIgAESACRIAIEAEiQARkgAiQARk4953Zc+b19nTP7n7s/LyPN9PVVdNd0xOtaE1WhKtFgHckbUjiy/qQ9FO+3Tx6gTclXUo6lLTeiP4r6VnStaTvLIMMGBAAz7NA5v9tSYBk3BUBw/KpknRO7OEKjlrsW8CAvgey9iYB410P3ANG3tclmNqkYL4vaSS7B8z9nHVQ+ix7tjv23tk6scBI/JUEepF0UjFAoQdJB8m5rVpyC0yA4yAALKf960kasX8sCQ/nLDD3sBYAX0jiKrxFy90EZ+ltWM8Aw4RKjhZF8tbYsFeKMjpPhVNsI8a4En0brWUYE5e+xt1GwFfFpSJgsiVrb/Evq3DsFJy5gTlDxqemqu+LjyeCDT4+A9wjdR14uKs5jcaVuqe4MkbZf7e4OJS1E+aB1PbZw3hQLDIR3mz2DavXQDhE4Km8LWaoRmIMCnaFBuJZ5l/JtPm2GgRikKA1otAyiWEfCQApipZxWGYoQ5XXk0r6SBCEA4DYnsymita0gr/jaumzCHhLrulchZR1O3G33jzGNfFvZgbLRh8KJXOjVqHBlGTcwa9n2MNpegaDOgHulHMLDXt1IKQnEAxazyYtR22wb+nx1pOROyOReqAHKOvxUaxM6swCF/6/MuB/KVBnH6rqmo4AAAAASUVORK5CYII="
                title= {t("login.nav")} />
                </NavLink>
        </nav>
        
      </div>
    );
  
}
export default withNamespaces() (NavBar);
