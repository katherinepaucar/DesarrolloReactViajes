import React from 'react';
import axios from 'axios';
import calendario  from '../images/logos/calendario.png';
import imagenes from '../images/imagenes';
import '../styles/Tiempo.css'


class Tiempo extends React.Component{


    constructor(){
    
        console.log('ejecutando Constructor');
        super();
        this.state={
            lista_tiempo:[],
            
        }
    }

    
    async componentDidMount(){
     
        console.log('ejecutando DidMount');

        const { match: { params } } = this.props;
       // console.log('datos ' + params.codigo)
        const lat=params.codigo[0];
        const lng=params.codigo[1];
       //  console.log('datos ' + params.dato1)

        const response =await axios.get(`http://www.7timer.info/bin/civillight.php?lon=${lng}&lat=${lat}&ac=0&unit=metric&output=json`);
        //http://www.7timer.info/bin/civillight.php?lon=13.75398&lat=100.50144&ac=0&unit=metric&output=json
      //console.log(response.data.dataseries)
      this.setState({
          lista_tiempo:response.data.dataseries
        
      });
      
    }
    formatoFecha(value){
        value="" + value;
        if(!value){
            return "";
        }
        let anio=value.substring(0,4);
        let mes = value.substring(4,6);
        let dia= value.substring(6,8);
        return anio + "-" + mes + "-" + dia;
    }

    formatoDia(valor){
        let date= new Date(valor);
        if(!valor){
            return ""
        }

        let  dias = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes', 'Sábado']
        return dias[date.getDay()]
        
    }
    cargarImagen(img) {

        if(img==="cloudy"){
            return imagenes[0];
        }
        if(img==="rain"){
            return imagenes[1];
        }
        if(img==="lightrain"){
            return imagenes[2];
        }
        if(img==="clear"){
            return imagenes[3];
        }
        if(img==="pcloudy"){
            return imagenes[6];
        }
        if(img==="ishower"){
            return imagenes[7];
        }
        if(img==="mcloudy"){
            return imagenes[8];
        }
        if(img==="ts"){
            return imagenes[9];
        }

      }
      


    verDatos = () =>this.state.lista_tiempo.map((dato) =>(
               // console.log(this.state.lista_tiempo);
       <div className="card " key={dato.date}>
            <div className="card-body">
                <div className="row text-center">
                    <div className="col-lg-4 col-12">
                    <h1 className="display-4">{dato.temp2m.max}°</h1>
                    
                    <p>Mínima: {dato.temp2m.min}°</p>
                    </div>
    
                    <div className="col-lg-4 col-12">
                        <img style={{width:'40%',height:'40%'}} className="img-fluid mb-2" src={this.cargarImagen(dato.weather)} alt="Imagen del clima"/>
                        <p>{dato.weather}</p>
                    </div>
                    <div className="col-lg-4 col-12">

                    <img src={calendario} alt="calendario" style={{height:'20%',width:"10%"}}/>
                        <p className="h1">
                        {this.formatoDia(this.formatoFecha(dato.date))}
                        </p>
                        <p className="h6">
  
                        
                        {this.formatoFecha(dato.date)}
                        </p>
                    </div>
                </div>
            </div>
       </div>

        
    ));


    datosCargados =()=>{
        return(
            
          this.verDatos()
        )
    }

    datosNoCargados =()=>{
        return(
            <div className="row text-center estilofondo">
                    <div className="col-md-6">
                    <h4 style={{color:'navy'}}>Cargando Datos, espere un momento...</h4>
                    </div>
                    <div className="col-md-6">
                    <img className="mover" src={imagenes[5]} style={{height:'100px', width:"20%"}} alt="Imagen Cargando datos"/>
                    </div>

                   
                </div>
        )
    }

   mostrar(){

      if((this.state.lista_tiempo).length === 0){
        return this.datosNoCargados();
           
       }
       else{
      
        return this.datosCargados();
       
       }

   }
     
    render(){
        console.log('ejecutando Render');
        return(
           
            <div className="container colorfondoT">
                
                <div className="row text-center">
                    <div className="col-md-6 col-sm-6">
                         <h2>Previsión Tiempo 7 días</h2>
                         <h3 style={{color:'white', backgroundColor:'#002171'}}>{this.props.match.params.dato1} - {this.props.match.params.dato2} </h3>
                    </div>
                    <div className="col-md-6 col-sm-6">


                        <p>
                        <button type="button" className="btn btn-dark">
                        <a href="/clima">Volver a Clima</a>
                        </button>
                             
                        </p>
                       
                    </div>

                </div>
             
                <div> {this.mostrar()}</div>   
                     
                <p><small>Datos extraidos de "7timer" API</small> </p>
            </div>
        );
    }

}
export default Tiempo;
