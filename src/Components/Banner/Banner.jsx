import React from "react";
import bannerImg from "../../assets/products/banner.png";
import circleImg from "../../assets/products/Group 5.png";
import { CiPlay1 } from "react-icons/ci";
const Banner = () => {
  return (
   
      <div className="flex gap-14 justify-around container mx-auto py-20 items-center">
        <div >
          <span className="p-4 rounded-full text-[16px] font-medium badge badge-xs badge-warning bg-[#E1E7FF] border-none text-[#9514FA] mb-6">
            <span>
              <img src={circleImg} alt="" />
            </span>
            New: AI-Powered Tools Available
          </span>
          <h1 className="font-extrabold text-7xl opacity-90 leading-21 mb-4">
            Supercharge Your <br />
            Digital Workflow
          </h1>
          <p className="text-[#627382] text-[18px] mb-8">
            Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div >
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full p-5 mr-4">
              Explore Products
            </button>
            <button className="btn p-5 text-[#9514FA] border border-[#9514FA] rounded-full ">
              <CiPlay1 /> Watch Demo
            </button>
          </div>
        </div>
        <div >
          <img src={bannerImg} alt="" />

        </div>
        
      </div>
    
  );
};

export default Banner;
