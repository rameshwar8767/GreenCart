import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

const BestSellers = () => {
    const {products} = useAppContext()
  return (
    <div className='mt-16'>
      <p className="text-2xl md:text-3xl font-semibold">Best Sellers</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6 gap-4 mt-6'>
        {products.filter((product)=> product.inStock).slice(0, 5).map((product,index) => (
          <ProductCard key={index} product={product}/>
        ))}
        
      </div>
    </div>
  )
}

export default BestSellers
