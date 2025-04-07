import React from 'react';

const NewsLetter = () => {
  return (
    <section className="flex flex-col items-center text-center mt-24 pb-14 px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
        Never Miss a Deal!
      </h2>
      <p className="text-gray-600 md:text-lg max-w-xl mb-6">
        Subscribe to get the latest offers, new arrivals, and exclusive discounts.
      </p>

      <form className="flex w-full max-w-xl h-12 md:h-14">
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="flex-1 px-4 text-gray-600 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className="px-6 md:px-10 text-white bg-primary hover:bg-primary/90 transition-all rounded-r-md"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsLetter;
