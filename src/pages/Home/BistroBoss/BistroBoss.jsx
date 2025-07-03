import React from 'react';
import chefService from "../../../assets/home/chef-service.jpg";

const BistroBoss = () => {
  return (
    <div className="relative overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center justify-center">
      {/* Parallax background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{ backgroundImage: `url(${chefService})` }}
      />
      
      {/* Content container */}
      <div className="relative z-10 w-11/12 md:w-3/4 max-w-4xl mx-auto my-16">
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl">
          <div className="text-center space-y-4">
            <h2 className="font-[Cinzel] text-gray-800 text-2xl md:text-3xl lg:text-4xl font-bold">
              Bistro Boss
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
            <p className="text-gray-700 leading-relaxed text-sm md:text-base w-full md:w-3/4 lg:w-1/2 mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-4 right-4 w-16 h-16 bg-amber-500/20 rounded-full z-0" />
      <div className="absolute top-4 left-4 w-12 h-12 bg-amber-500/20 rounded-full z-0" />
    </div>
  );
};

export default BistroBoss;