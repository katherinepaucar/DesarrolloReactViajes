import React from 'react';
import imagenes from '../images/imagenes';
import '../styles/HoraFecha.css';
import {Link} from 'react-router-dom';


class HoraFecha extends React.Component{

    //Props que recibe todas las variables que se enviana al componente
      constructor(props){
          super(props);
          this.state={
              date:new Date()
          }
      }
     
  //Se ejecuta después de que el componente se ha procesado en el DOM. En este ejemplo agregaremos un temporizador que durara 1 segundo.
    componentDidMount() { 
        this.timerID = setInterval(
            () => this.setState({
                date:new Date()
            }),
            1000
          );   
    }
    //Se invoca justo antes de que un componente se desmonte y se destruya.
    componentWillUnmount() {   
        clearInterval(this.timerID);
        }

        formatoDia(){
            let fecha= this.state.date; 
    
            let  dias = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes', 'Sábado'];
            let  meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
            return dias[fecha.getDay()] + " " + fecha.getDate()  + "/" + meses[fecha.getMonth()] + "/" + fecha.getUTCFullYear();
            
        }

    verDatos = ()=> this.props.datosArray.map((dato)=>{
        return(
            <tr key={dato.id}>
            <td>{dato.titulo}</td>
            <td>{dato.capital}</td>
            <td>{dato.coordenadas[0]}</td>
            <td>{dato.coordenadas[1]}</td>
            <td><Link  to={`/tiempo/${dato.coordenadas}/${dato.capital}/${dato.titulo}`}>Ver Predicción Tiempo</Link></td>
            </tr>
        );
    })

    render(){


        return(
            <div className="container colorfondo">
                <div className="row">
                    <div className="col-md-2 text-center">
                    </div>
                    <div className="col-md-4 col-sm-6 text-left">
                        <img src={imagenes[4]} alt="hora" style={{width:'50%',height:'100px'}}/>
                    </div>
                    <div className="col-md-4  col-sm-6 text-center">
                         <h4> {this.formatoDia()}</h4>
                         <h3> {this.state.date.toLocaleTimeString()}</h3>
  
                    </div>
                    <div className="col-md-2 text-center">
                    </div>
                
                </div>  
                <div className="row tex-center">
                    <div className="col-md-12 col-sm-12">
                        <table className="table table-stripped table-hover table-responsive-sm table-responsive-md table-responsive-lg">
                            <thead className="thead-dark" >
                                <tr>

                                <th colSpan="5">Datos</th>

                                </tr>
                                <tr>
                                    <th>País</th>
                                    <th >Capital</th>
                                    <th>Latitud</th>
                                    <th>Longitud</th>
                                    <th>Previsión Tiempo 7 días</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.verDatos()}

                            </tbody>
                        </table>

                    </div>
                </div>
                          
            </div>
        );
    }

}

export default HoraFecha;