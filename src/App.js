import './styles.css'
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="mi-app">
      
      <NavBar/>
      
      <ItemListContainer greeting="Hola mundo coder" />
      

    </div>
  );
}

export default App;
