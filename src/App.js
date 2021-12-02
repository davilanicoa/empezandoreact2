import React from 'react';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Inicio from './components/paginas/Inicio';
import Nosotros from './components/paginas/Nosotros';
import Contacto from './components/paginas/Contacto';
import ItemListContainer from './components/container/ItemListContainer';
import Item from './components/Item/Item';
import { CartProvider } from './components/CartContex2';
import { Carrito } from './Carrito';




function App()  {
  return (
    <>
    
    <CartProvider>
    <Carrito />  
    <BrowserRouter>
    <NavBar/>  
    <Routes>
      <Route path='/' element={<Inicio/>}/> 
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>
    </Routes>  
    </BrowserRouter>
    <Item/>
    <ItemListContainer/>    
    </CartProvider>
    </>
  );
}  

export default App;
