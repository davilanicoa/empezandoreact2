
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Inicio from './components/paginas/Inicio';
import Nosotros from './components/paginas/Nosotros';
import Contacto from './components/paginas/Contacto';
import { EjemploDesafio } from './container/ItemListContainer';
import Listas from './components/ItemList';
import { DetalleDesafio } from './components/paginas/ItemDetail'; 
const App = () => {
  return (
    

    <Router>
    <NavBar/>
    <EjemploDesafio/>
    <DetalleDesafio/>
    <Listas/>
    </Router>
  );

  

  
  }  








export default App;
