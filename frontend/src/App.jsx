
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext'
import Login from './components/Login'
import AllProducts from './pages/AllProducts'
import ProductCategory from './pages/ProductCategory'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import AddAddress from './pages/AddAddress'
import MyOrders from './pages/MyOrders'
import SellerLogin from './components/seller/SellerLogin'
function App() {
 const isSellerPath = useLocation().pathname.includes('seller')
const {showUserLogin, isSeller} = useAppContext()
  return (
    <>
      {isSellerPath ? null :<Navbar/>}
      {showUserLogin ?  <Login/> : null}

      <Toaster/>
      <div className={`${isSellerPath ? '' : 'px-6 md:px-16 lg:px-24 xl:px-32 py-4'} `}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<AllProducts/>} />
          <Route path="/products/:category" element={<ProductCategory/>} />
          <Route path="/products/:category/:id" element={<ProductDetails/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/add-address" element={<AddAddress/>} />
          <Route path="/my-orders" element={<MyOrders/>} />
          <Route path="/seller" element={isSeller ? null : <SellerLogin/>} />
        </Routes>
      </div>
      {!isSellerPath && <Footer/>}
    </>
  )
}

export default App
