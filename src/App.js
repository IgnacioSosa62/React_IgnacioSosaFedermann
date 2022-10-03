import './App.css';
import NavBar from './Components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetail from './Components/shop/itemDetail';
import ItemListContainer from './Components/shop/ItemListContainer';




function App() {

  const styles = {
    border: 'solid 2px blue',
    padding: '20px'
  }

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          
          
          
          
          <Route path={'/shop'} element={<ItemListContainer/>} />
          <Route path={'/shop/item/:id'} element={<ItemDetail/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;