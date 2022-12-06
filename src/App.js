import React from 'react'
import Home from './pages/Home'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Login from './pages/Login'
import Registro from './pages/Registro'
import Error404 from './components/Error404'
import NavBar from './components/NavBar'
import ProductoId from './pages/ProductoId'
import CheckOut from './pages/CheckOut';
import Carrito from './pages/Carrito';
import AuthContext from './context/AuthContext';
import AuthProvider from './context/AuthProvider';

const App = () => {
  return (
    <Router>
    <AuthProvider>
      <NavBar/>
    <AuthContext.Consumer>
      {context =>
    
       <Routes>
      
      
      <Route path='/' element={<Home/>}/>
      <Route path='/home/:iduser' element={<Home/>}/>
      <Route path='/productos/:id' element={<ProductoId/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registro' element={<Registro/>}/>
      {context.userLogin && <>
      <Route path='/:iduser/carrito' element={<Carrito/>}/>
      <Route path='/:iduser/checkOut' element={<CheckOut/>}/>
      <Route path='*' element={<Error404/>}/>
      </>
      }
      
      </Routes>
  
    }
  </AuthContext.Consumer>
  </AuthProvider>
  </Router>
  )
}

export default App