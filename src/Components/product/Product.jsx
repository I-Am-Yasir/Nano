import React from 'react';
import './product.css'; // Ensure this file has the necessary styles

const Product = () => {
  const products = [
    {
      name: 'METAL',
      image: '/goldbrick.png', // Replace with your image path
      details: ['Gold', 'Silver', 'Copper', 'Platinum', 'Palladium'],
    },
    {
      name: 'INDICES',
      image: '/bfalo.png', // Replace with your image path
      details: ['S&P 500', 'Nasdaq', 'Dow Jones', 'FTSE 100', 'DAX 30'],
    },
    {
      name: 'ENERGIES',
      image: '/index.png', // Replace with your image path
      details: ['Crude Oil', 'Natural Gas', 'Heating Oil', 'Gasoline', 'Brent Oil'],
    },
    {
      name: 'CURRENCY PAIRS',
      image: '/currency.png', // Replace with your image path
      details: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD', 'USD/CHF'],
    },
    {
      name: 'AGRICULTURAL PRODUCTS',
      image: '/aproducts.png', // Replace with your image path
      details: ['Corn', 'Soybeans', 'Wheat', 'Cotton', 'Sugar'],
    },
  ];

  return (
    <div className="container py-12 px-4">
      {/* Headings */}
      <div className="mb-12">
        <h2 className="text-xl text-orange-500 font-bold text-left">Our Products</h2>
        <h1 className="text-4xl text-orange-500 font-extrabold text-left">Product List</h1>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="group perspective w-full h-80">
            <div className="relative preserve-3d group-hover:rotate-y-180 w-full h-full max-w-[320px] max-h-[260px] duration-1000 mx-auto">
              {/* Front Side */}
              <div className="absolute backface-hidden border border-gray-200 w-full h-full rounded-lg overflow-hidden bg-[#292929] flex flex-col items-center justify-center">
                <img src={product.image} alt={product.name} className="w-36 h-36 mb-4 rounded-full" />
                <h2 className="text-4xl font-bold text-white">{product.name}</h2>
              </div>

              {/* Back Side */}
              <div className="absolute rotate-y-180 backface-hidden bg-yellow-400 text-gray-800 w-full h-full rounded-lg flex items-center justify-center text-center p-6">
                <div>
                  <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                  <ul className="text-left">
                    {product.details.map((detail, idx) => (
                      <li key={idx} className="text-sm font-medium mb-1">
                        - {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
    