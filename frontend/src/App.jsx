
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
function App() {
 const isSellerPath = useLocation().pathname.includes('seller')

  return (
    <>
      {isSellerPath ? null :<Navbar/>}
      <Toaster/>
      <div className={`${isSellerPath ? '' : 'px-6 md:px-16 lg:px-24 xl:px-32 py-4'} `}>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
      {!isSellerPath && <Footer/>}
    </>
  )
}

export default App
