import React from "react";

const Rating = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-14">
      <div className="container mx-auto flex justify-around">
        <div className="text-center">
          <h1 className="font-extrabold text-6xl text-white mb-3">50K+</h1>
          <p className="text-white opacity-80 text-2xl font-medium">
            Active Users
          </p>
        </div>
        <div className="w-0.5 h-20 bg-white/40"></div>
        <div className="text-center">
          <h1 className="font-extrabold text-6xl text-white mb-3">200+</h1>
          <p className="text-white opacity-80 text-2xl font-medium">
            Premium Tools
          </p>
        </div>
        <div className="w-0.5 h-20 bg-white/40"></div>
        <div className="text-center">
          <h1 className="font-extrabold text-6xl text-white mb-3">4.9</h1>
          <p className="text-white opacity-80 text-2xl font-medium">
            Rating
          </p>
        </div>
         
      </div>
    </div>
  );
};

export default Rating;
