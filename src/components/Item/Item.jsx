import './Item.css'
import React, { useContext } from 'react';
import { CartContext } from '../CartContex2';


const Item = (props) => {
    
    const [carrito,setCarrito]=useContext(CartContext);


    function agregar(){
        
        const Item = {
            name:props.name,
            price:props.price,
            imagen:props.imgUrl,
        

        }
        /*let temporal = carrito;
        temporal.push(Item),
        setCarrito(temporal);
        console.log(carrito);*/

    }

    
    return(
        
        <div className={props.name}>
            <h1>{props.name}</h1>
            <h1>{props.price}</h1>
            <img src={props.imgUrl}/>
            <button onClick={agregar}>Comprame</button>
        <hr />    
        </div>
        

    )
    
   /* return(
        <Col>
        <Card style={{ width: '18 rem'}}/>
            <Link to={'/producto/'+ props.name}>
            <Card.Img variant="top" src={props.imgUrl}/>
            </Link>
            <Card.Body>
                <Card.Title>Titulo</Card.Title>
            <Card.Text>
                {props.name - props.price}
            </Card.Text>
            <Button variant="primary" onClick={agregar}>Agregar al carrito</Button>
            </Card.Body> 
            </Col>


    )*/
}
export default Item;


