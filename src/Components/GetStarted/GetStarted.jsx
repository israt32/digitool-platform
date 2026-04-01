import React from "react";
import userImg from '../../assets/products/user.png'
import boxImg from '../../assets/products/package.png'
import rocketImg from '../../assets/products/rocket.png'
const GetStarted = () => {
  return (
    <div className=" bg-[#F9FAFC] py-28">
      <h1 className="text-[#101727] font-extrabold text-5xl text-center mb-4">
        Get Started in 3 Steps
      </h1>
      <p className="text-[#627382] text-[16px] text-center mb-10">
        Start using premium digital tools in minutes, not hours.
      </p>
      {/* //////////////////// */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
       
        <div className="card bg-base-100 shadow-sm pb-20 pt-5 px-5 rounded-2xl ">
          <p className="flex justify-center items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-[40px] p-2 rounded-full mb-7 ml-auto text-white">01</p>
          <figure >
            <img className="bg-[#d2b2eb6a] p-2 rounded-full"
              src={userImg}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title mx-auto">Create Account</h2>
            <p className="text-[#627382] text-[16px]">
              Sign up for free in seconds. No credit card required to get started.
            </p>
            
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm pb-20 pt-5 px-5 rounded-2xl">
          <p className="flex justify-center items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-[40px] p-2 rounded-full mb-7 ml-auto text-white">02</p>
          <figure >
            <img className="bg-[#d2b2eb6a] p-2 rounded-full"
              src={boxImg}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title mx-auto">Choose Products</h2>
            <p className="text-[#627382] text-[16px]">
              Browse our catalog and select the tools that fit your needs.
            </p>
            
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm pb-20 pt-5 px-5 rounded-2xl">
          <p className="flex justify-center items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-[40px] p-2 rounded-full mb-7 ml-auto text-white">03</p>
          <figure >
            <img className="bg-[#d2b2eb6a] p-2 rounded-full"
              src={rocketImg}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title mx-auto">Start Creating</h2>
            <p className="text-[#627382] text-[16px]">
              Download and start using your premium tools immediately.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
