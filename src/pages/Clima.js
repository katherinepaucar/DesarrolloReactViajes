import React from 'react';
import HoraFecha from '../components/HoraFecha';


const datos = [
    {
      id: 1,
      titulo: "Japón",
      capital:"Tokio",
      coordenadas:[35.6895, 139.69171],
    },
    {
      id: 2,
      titulo: "Tailandia",
      capital:"Bangkok",
      coordenadas:[13.75398, 100.50144],
    },
    {
      id: 3,
      titulo: "Hawai",
      capital:"Honolulu",
      coordenadas:[21.30694, -157.85833],
    },
  ];

class Clima extends React.Component{

    constructor(){
        super();
        this.state={
            informacion:datos
        }
        
    }

    render(){
        return(
            <div>
              
                <HoraFecha datosArray={this.state.informacion}/>
               
              
               
            </div>
        );
    }

}

export default Clima;