import React from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';




const ProductCard = ({ product }) => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    currency
  } = useAppContext();

  if (!product) return null;

  const isInCart = !!cartItems[product._id];
  const rating = 4;

  return (
    <div className="border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md transition-all md:px-4 px-3 py-3 min-w-56 max-w-56 w-full">
      <div className="group cursor-pointer flex items-center justify-center px-2">
        <img
          className="group-hover:scale-105 transition-transform max-w-26 md:max-w-36 object-contain"
          src={product.image[0]}
          alt={product.name}
        />
      </div>

      <div className="text-sm text-gray-600 mt-2 space-y-1">
        <p className="text-gray-400">{product.category}</p>
        <p className="text-gray-800 font-semibold text-lg truncate">{product.name}</p>

        <div className="flex items-center gap-1">
          {Array(5).fill().map((_, i) => (
            <img
              key={i}
              className="w-4 h-4"
              src={i < rating ? assets.star_icon : assets.star_dull_icon}
              alt={`star-${i + 1}`}
            />
          ))}
          <span className="text-xs">(4)</span>
        </div>

        <div className="flex items-center justify-between mt-3">
          <p className="text-primary font-semibold md:text-xl text-base">
            {currency}{product.offerPrice}
            <span className="line-through text-xs text-gray-400 ml-1">
              {currency}{product.price}
            </span>
          </p>

          <div onClick={(e) => e.stopPropagation()} className="text-primary">
            {!isInCart ? (
              <button
                onClick={() => addToCart(product._id)}
                className="flex items-center gap-1 bg-primary/10 border border-primary/40 md:w-[80px] w-[64px] h-[34px] rounded hover:bg-primary/20 transition text-sm justify-center"
              >
                <img src={assets.cart_icon} alt="cart" />
                Add
              </button>
            ) : (
              <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-primary/10 rounded select-none">
                <button
                  onClick={() => removeFromCart(product._id)}
                  className="px-2 text-md hover:text-red-500"
                >
                  -
                </button>
                <span className="w-5 text-center">{cartItems[product._id]}</span>
                <button
                  onClick={() => addToCart(product._id)}
                  className="px-2 text-md hover:text-green-600"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
