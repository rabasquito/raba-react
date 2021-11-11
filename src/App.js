import './styles.css'
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { CartWidget } from './components/CartWidget/CartWidget';

function App() {
  return (
    <div className="mi-app">
      
      <NavBar/>
      <ItemListContainer greeting="Hola mundo coder"/>
      <CartWidget/>

    </div>
  );
}

export default App;
