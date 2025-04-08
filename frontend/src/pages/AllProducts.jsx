import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'

const AllProducts = () => {

    const {products, searchQuery} = useAppContext()
    const [filterProducts, setFilterProducts] = useState([])

    useEffect(()=>{
        if(searchQuery.length > 0){
            setFilterProducts(products.filter(
                
                product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
)
            )
        }else{
                setFilterProducts(products)
        }
            
},[products, searchQuery])
  return (
    <div className='mt-16 flex flex-col'>
      <div className='flex flex-col items-end w-max'>
        <p className='text-2xl font-medium uppercase'>All Products</p>
        <div className='w-16 h-0.5 bg-primary rounded-full'></div>
      </div>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8 md:gap-6 lg:gap-8'>
        {filterProducts.length === 0 && (
            <div className='col-span-5 flex items-center justify-center text-gray-500'>
                No products found
            </div>
        )}
        {filterProducts.filter((product)=> product.inStock).map((product, index)=> (
            <ProductCard key={index} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default AllProducts
