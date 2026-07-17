import React from 'react';
// import modelImg from '../../../assets/images/fashion model.jpg'
import modelImg from '../../../assets/images/fashion lady.jpg'
const Hero = () => {
  return (
    <section className="relative bg-stone-50 min-h-[80vh] flex items-center justify-center px-6 lg:px-12 mt-5 mb-5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 z-10">
        
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <span className="text-amber-600 font-semibold tracking-widest uppercase text-sm">
            Exclusive Collection 2026
          </span>
          <h1 className="title text-5xl lg:text-7xl font-bold text-neutral-900 leading-tight">
            Elegance Woven in <br />
            <span className="title text-stone-500 italic">Every Thread</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-lg">
            Discover the timeless beauty of premium handloom fashion. 
            Crafted for those who value comfort and sophistication.
          </p>
          
          <div className="flex gap-4 pt-4">
            <button className="cursor-pointer bg-neutral-900 text-stone-100 px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition-all">
              Explore Collection
            </button>
            <button className="cursor-pointer border border-neutral-300 text-neutral-900 px-8 py-4 rounded-full font-medium hover:bg-neutral-100 transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 w-full">
          <div className="aspect-square bg-stone-200 rounded-3xl overflow-hidden shadow-2xl relative">
            <img 
              src={modelImg}
              alt="Fashion Model" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg">
              <p className="font-bold text-neutral-900">Premium Silk</p>
              <p className="text-sm text-neutral-500">Starting from $49</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;