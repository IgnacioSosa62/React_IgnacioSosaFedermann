import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { ItemListContainer } from './Components/ItemListContainer';

function App() {
  return (
  <>
    <NavBar/>
    <ItemListContainer greeting={'Hola!'}/>
  </>
  );
}

export default App;
