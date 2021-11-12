import './styles.css'
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="mi-app">
      
      <NavBar/>
      <ItemListContainer greeting="Hola mundo coder"/>
      

    </div>
  );
}

export default App;
