
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import Cart from './pages/Cart'
function App() {
//cart using redux
  return (
    <>
      
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/Wishlist' element= { <Wishlist/> }/>
        <Route path='/View/:id' element={ <View/> } />
        <Route path='/Cart' element={ <Cart/> } />
        <Route path='/*' element={ <Navigate to={'/'}/> }/>

      </Routes>
     
      <Footer/>
    </>
  )
}

export default App
