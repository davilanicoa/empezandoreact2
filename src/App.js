import React, { useState } from 'react';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Inicio from './components/paginas/Inicio';
import Nosotros from './components/paginas/Nosotros';
import Contacto from './components/paginas/Contacto';
import ItemListContainer from './components/container/ItemListContainer';
import Item from './components/Item/Item';
import { CartProvider } from './components/CartContex2';
import { Carrito } from './Carrito';
import RenderizadoCondicional from './components/RenderizadoCondicional';





function App()  {
  
  /*useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("viajes");
    itemCollection.get()
    .then(querySnapshot => {
    if(querySnapshot.size ===0){
    console.log('No results')}
    
    setItems(querySnapshot.docs.map(doc => doc.data()))
    })
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  
  }, [])*/
  
  
  const [carrito, setCarrito] = useState([]);


  return (

    
    <>
    
    <CartProvider>
    <Carrito/>  
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
    <RenderizadoCondicional/>
    </>
  );

}  

export default App;
