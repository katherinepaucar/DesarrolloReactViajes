import React from "react";
import Lugares from "../components/Lugares";




class Destino extends React.Component {
  render() {
    const { id } = this.props.match.params;
    return (
    
      <section>
     
        <Lugares parametro={id} />
      </section>
    );
  }
}

export default Destino;
