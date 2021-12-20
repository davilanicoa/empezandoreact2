import React, {useContext} from 'react';
import {CartContext} from '../src/components/CartContex2';

export const Carrito = () => {
  const [carrito, setCarrito] = useContext(CartContext);

return (
    <aside className="block col-1">
      <h2>Carrito</h2>
            

    </aside>
);
}