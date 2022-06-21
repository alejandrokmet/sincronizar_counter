import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/Items/ItemListContainer';
import CartItemContainer from './components/Cart/CartItemContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './components/Context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const links=[   
  {href:"/", name:"Inicio", id: 1},
  {href:"categoria/escritorio", name:"Computadoras de escritorio", id: 2}, 
  {href:"categoria/portatil", name:"Equipos portátiles", id: 3},
  {href:"categoria/tablet", name:"Tablets", id: 4}    
]; 

function App() {   
  
  return( 
    <CartProvider>
      <BrowserRouter>
        <Navbar nombre="Alejandro" apellido="Kmet" links={links}/>         
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>          
          <Route path="/:categoria/:filter" element={<ItemListContainer/>}/>  
          <Route path="/carrito" element={<CartItemContainer />}/>                  
        </Routes>
      </BrowserRouter>    
    </CartProvider>    
    );
    
}

export default App;
