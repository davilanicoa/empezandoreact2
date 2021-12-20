import React, { Component } from 'react';

function AgregarAlCarrito(){
    return(
        <div>
            <button>Agregar</button>
        </div>


    );
}

function RemoverDelCarrito(){
    return(
        <div>
           <button>Remover</button> 
        </div>

    );
}



export default class RenderizadoCondicional extends Component {

constructor(props){
    super(props)
    this.state ={
        cities: true,    
    }


}    

    render(){

    return(
        <div>
            <h2>Condiciones del Carrito </h2>
        {this.state.cities ? <AgregarAlCarrito/>:<RemoverDelCarrito/>}    
        
        
        </div>

    )


}


}

