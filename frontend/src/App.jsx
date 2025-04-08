
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext'
import Login from './components/Login'
import AllProducts from './pages/AllProducts'
import ProductCategory from './pages/ProductCategory'
function App() {
 const isSellerPath = useLocation().pathname.includes('seller')
const {showUserLogin} = useAppContext()
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
        </Routes>
      </div>
      {!isSellerPath && <Footer/>}
    </>
  )
}

export default App
