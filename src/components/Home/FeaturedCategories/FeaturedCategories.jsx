import React from 'react';
import { Link } from 'react-router';

const FeaturedCategories = () => {
  const categories = [
    { id: 1, name: 'Panjabi', image: 'https://i.ibb.co.com/twNKMTg1/panjabi.jpg' },
    { id: 2, name: 'Saree', image: 'https://i.ibb.co.com/fG1ZLSHX/saree.jpg' },
    { id: 3, name: 'Kurti', image: 'https://i.ibb.co.com/FkjWJ3GN/kurti.jpg' },
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="title text-4xl text-neutral-900">Explore Collections</h2>
          <p className="text-neutral-600 mt-2">Handpicked styles crafted for every occasion.</p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/40 transition-all"></div>
              
              {/* Label */}
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-2xl font-bold tracking-wide">{cat.name}</h3>
                <span className="text-stone-200 text-sm font-medium underline mt-2 block opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link to="/collection">View Collection</Link>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;