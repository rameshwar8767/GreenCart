import React from 'react'   
import { NavLink } from 'react-router-dom'
import {assets} from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const {user, setUser, showUserLogin, setShowUserLogin, navigate} = useAppContext()
    const logout = ()=>{
        setUser(null)
        navigate('/')
    }
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to="/" onClick={()=> setOpen(false)} className="flex items-center gap-2">
                <img className="h-9" src={assets.logo} alt="logo" />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to="/" className="text-gray-500 hover:text-gray-800 transition">Home</NavLink>
                <NavLink to="/products" className="text-gray-500 hover:text-gray-800 transition">All Products</NavLink>
                <NavLink to="/contact" className="text-gray-500 hover:text-gray-800 transition">Contact</NavLink>

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <img src={assets.search_icon} alt="search" srcset=""  className='w-4 h-4'/>
                </div>

                <div onClick={()=>navigate('/cart')} className="relative cursor-pointer">
                    <img src={assets.nav_cart_icon} alt="Cart" srcset="" className='w-6 opacity-80' />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">3</button>
                </div>

               {!user ? (<button onClick={()=>setShowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                    Login
                </button>)
                :(
                    <div className='relative group'>
                        <img className='w-10' src={assets.profile_icon} alt="profile" srcset="" />
                        <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2 w-40 rounded-md text-sm z-40'>
                            <li onClick={()=>navigate('my-orders')} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>My Orders</li>
                            <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>Logout</li>
                        </ul>
                    </div>
                )}
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
               <img src={assets.menu_icon} alt="Menu" srcset="" className='' />
            </button>

            {/* Mobile Menu */}
            { open && (
                <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <NavLink to="/" onClick={()=> setOpen(false)} className="block">Home</NavLink>
                <NavLink to="/products"  onClick={()=> setOpen(false)}  className="block">All Products</NavLink>
                {user &&  <NavLink to="/my-orders"  onClick={()=> setOpen(false)}  className="block">MY Orders</NavLink>}
                <NavLink to="/contact"  onClick={()=> setOpen(false)}  className="block">Contact</NavLink>

                {!user ? (
                    <button  className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                    Login
                </button>
                ):(
                    <button  onClick={()=>{setOpen(false);
                    setShowUserLogin(true);
                    }} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                    Logout
                </button>
                )}
                
            </div>)}

        </nav>
  )
}

export default Navbar
