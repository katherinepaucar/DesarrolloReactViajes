import React from "react";
//En este fichero podemos la estructura
import ImgTailandia from "../images/carrusel/tailandia.jpg";
import ImgJapon from "../images/carrusel/Japon.jpg";
import ImgHawai from "../images/carrusel/hawai.jpg";
import '../styles/Lugares.css';
import Mapa from "./Mapa";



//aquí le pasamos los datos
const datos = [
  {
    id: 1,
    titulo: "Japón",
    capital:"Tokio",
    img: ImgJapon,
    coordenadas:[35.6895, 139.69171],
    idioma:'El idioma oficial es el japonés, y el uso del inglés se limita a hoteles, restaurantes y cafeterías, aunque en general está muy limitado.',
    moneda:'La unidad de divisas de Japón es el Yen. Hay cuatro tipos de billetes -10.000¥, 5000¥, 2000¥ y 1000¥. Los billetes de 2000¥ son de uso poco frecuente. Hay seis tipos de monedas, de 500, 100, 50, 10,5 y 1¥ respectivamente. Todas las monedas excepto las de 5¥ tienen el valor numérico indicado para hacer más fácil su uso.  ',
    contenido: "Japón es un país situado en el continente asiático. El nombre oficial del país es 'Nihon-koku' o 'Nippon-koku', cuya capital es la ciudad de Tokyo. La bandera nacional es un 'Hinomaru', un sol rojo sobre fondo blanco, simétrico en todos los flancos. El himno nacional, 'Kimigayo', deriva de una canción tradicional japonesa del periodo Heian (años 794-1185). La superficie de Japón es de 377.960 km² y una población de 127.187.000 habitantes (datos del Ministerio de Asuntos Exteriores en febrero de 2014).",
    clima:'Japón tiene una temporada de lluvias (Tsuyu) desde principios de Junio hasta final de Julio. La cantidad de lluvia aumenta en la mayoría de regiones salvo en Hokkaido. El verano se inicia en Julio con un calor húmedo que continúa hasta septiembre. Las fuertes lluvias y vientos originados por los tifones se extienden de Sur a Norte de Japón desde Julio a Octubre. Estos fuertes vientos de componente noroeste son causados por las masas de aire frío siberiano. En algunas regiones nieva, siendo el aire frío y seco.',
    difHoraria:'Entre España y Tailandia hay +7 horas de diferencia.',
    estilo:'estilo1',
  },
  {
    id: 2,
    titulo: "Tailandia",
    capital:"Bangkok",
    img: ImgTailandia,
    coordenadas:[13.75398, 100.50144],
    idioma:'El tailandés o siamés es el idioma nacional y oficial de Tailandia y lengua madre de la etnia tailandesa, la dominante en Tailandia.',
    moneda:'El baht es la moneda tailandesa. Un baht (THB) se compone de 100 satangs. Hay monedas de 25 y 50 satangs y de 1, 2, 5 y 10 THB.',
    contenido: "Tailandia, es un país del sudeste asiático que limita con Camboya y Laos al este, Myanmar al oeste y Malasia al sur. Bangkok es la capital de Tailandia y una de las ciudades más importantes de Asia. Tiene una superficie de 513.115 km2 y una población que supera los 65.000.000 de habitantes.",
    clima:'El clima tropical en Tailandia es generalmente caliente y húmedo en la mayor parte del país durante la mayor parte del año. Mientras que las estaciones de Tailandia se dividen generalmente en la temporada de calor, estación “fría” y la temporada de lluvias, en realidad es relativamente cálido la mayor parte del año.',
    difHoraria:'Entre España y Tailandia hay +5 horas de diferencia.',
    estilo:'estilo2',
  },
  {
    id: 3,
    titulo: "Hawai",
    capital: "Honolulu",
    img: ImgHawai,
    coordenadas:[21.30694, -157.85833],
    idioma:' El idioma autóctono de Hawaii es el malayo-polinesio y, actualmente, es idioma oficial en la isla junto con el inglés.',
    moneda:'La moneda de Hawái es el dólar estadounidense (US$)',
    contenido: "Es uno de los cincuenta estados que, junto con Washington D.C., forman los Estados Unidos de América. Su capital y ciudad más poblada es Honolulu, en la isla de Oʻahu. Es el único estado insular y extracontinental del país, y el último y más reciente en ser admitido como tal, el 21 de agosto de 1959. Su población alcanza casi el millón y medio de habitantes.",
    clima:'El verano en Hawaii abarca desde mayo hasta octubre y, el invierno, desde noviembre hasta abril. De todas formas la temperatura media entre ambas estaciones no es muy variable (en verano es de unos 30º grados y en invierno, de unos 25º).',
    difHoraria:'Entre España y Tailandia hay +12 horas de diferencia.',
    estilo:'estilo3',
  },
];


class Lugares extends React.Component {
  render() {
   
    //recogemos el parametro de la pagina Destinos
    //le pasamos como id
   const parametro=this.props.parametro;
    return (
    
      <div style={{backgroundColor:'#eceff1'}}>
       
        {datos
          .filter((item) => item.id == parametro)
          .map((dato) => {
            return (
              <div className="container" key={dato.id}>
                
                <div className="row">
                  <div className="col-md-12"  >
                      <h2  className={dato.estilo}>{dato.capital} - {dato.titulo}</h2>
                  </div>
                </div>

                <div className="row"  >
                  {/* <h3>ID:{dato.id}</h3>*/}
                    <div className="col-sm-6 col-md-6" >
                      <img src={dato.img} alt={dato.titulo} />
                    </div>
                    <div className="col-sm-6 col-md-6"  style={{backgroundColor:'white'}}>
                      <h5 className="estiloh5">Información Básica:</h5>
                      <p>{dato.contenido}</p>
                    </div>

                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                  
                  {/** */}
                  <table className="table table-responsive-sm table-hover">
                  
                    <tbody>
                    <tr className="thead-dark text-center">
                      <th scope="row" colSpan='4' className='text-center estiloh5'><h5>Datos de Interés</h5></th>

                      </tr>
                      <tr >
                    
                        <th className={dato.estilo} >Idioma</th>
                        <td colSpan='3'>{dato.idioma}</td>

                    </tr>
                      <tr>
                    
                        <th className={dato.estilo}>Moneda</th>
                        <td colSpan='3'>{dato.moneda}</td>

                      </tr>
                      <tr >
                    
                      <th className={dato.estilo}>Clima</th>
                      <td colSpan='3'>{dato.clima}</td>

                    </tr>
                    <tr >
                    
                    <th className={dato.estilo}>Diferencia Horaria</th>
                    <td colSpan='3'>{dato.difHoraria}</td>
                    </tr>  
                    </tbody>
                  </table>

                  {/** */}
                  </div>


                </div>
                <div className="row">
                  <div className="col-md-12 ">
                      <h5 className="estiloh5">Mapa</h5>
                      <Mapa  lat={dato.coordenadas[0]} lng={dato.coordenadas[1]}/>
                  </div>
                </div>
              </div>

            );
          })}
      </div>
   
    );
  }
 
}

export default Lugares;
