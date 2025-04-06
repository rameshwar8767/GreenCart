import React from 'react'
import { useNavigate } from 'react-router-dom'
import { categories } from '../assets/assets'

const Categories = () => {
  const navigate = useNavigate()

  const handleCategoryClick = (path) => {
    navigate(`/products/${path.toLowerCase()}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-semibold">Categories</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 mt-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`group cursor-pointer rounded-lg py-5 px-3 flex flex-col items-center justify-center gap-2 transition`}
            style={{ backgroundColor: category.bgColor }}
            onClick={() => handleCategoryClick(category.path)}
          >
            <img
              src={category.image}
              alt={category.text}
              className="max-w-28 group-hover:scale-110 transition-transform"
            />
            <p className="text-sm font-medium text-center">{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
