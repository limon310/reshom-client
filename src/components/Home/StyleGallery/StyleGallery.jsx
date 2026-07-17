import React from 'react';

const StyleGallery = () => {
  const galleryImages = [
    'https://i.ibb.co.com/tMtytHt5/lether-hand-bag.jpg',
    'https://i.ibb.co.com/XdZ2NKf/flora.jpg',
    'https://i.ibb.co.com/4nD5T3fn/blezer.jpg',
    'https://i.ibb.co.com/XxTLBRyy/suit.jpg'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="title text-5xl text-neutral-900">Style Gallery</h2>
          <p className="text-neutral-600 mt-4 max-w-md mx-auto italic">
            "The art of wearing Reshom — captured in moments."
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <div 
              key={index} 
              className={`overflow-hidden rounded-2xl ${index % 3 === 0 ? 'row-span-2' : 'h-64'}`}
            >
              <img 
                src={img} 
                alt="Style Lookbook" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StyleGallery;