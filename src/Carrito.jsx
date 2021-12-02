import React, {useContext} from 'react';
import {CartContext} from '../src/components/CartContex2';
export const Carrito = () => {
  const [carrito, setCarrito] = useContext(CartContext);
  const totalPrice = carrito.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <span>Viajes Totales : {carrito.length}</span>
      <br />
      <span>Precio Total : {totalPrice}</span>
    </div>
  )
}