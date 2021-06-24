import React from 'react';
import ImgTailandia from '../images/carrusel/tailandia.jpg';
import ImgJapon from '../images/carrusel/Japon.jpg';
import ImgHawai from '../images/carrusel/hawai.jpg';
import '../styles/Home.css';


class Home extends React.Component{
    
    render(){
        return(
          

                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={ImgJapon} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Japón</h5>
                      <p>País insular de Asia Oriental, ubicado en el noroeste del oceáno Pacífico</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={ImgTailandia} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Tailandia</h5>
                      <p>Es un país del sudeste de Asia y su capital es Bangkok.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={ImgHawai} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Hawai</h5>
                      <p>Hawái es un archipiélago y estado estadounidense ubicado en la Polinesia (océano Pacífico).</p>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            
        );
    }
}

export default Home;