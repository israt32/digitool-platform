import React from "react";
import digiToolsFooter from "../../assets/products/DigiTools (1).png";
import { FaCameraRetro, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#101727] text-white">
      <div className="container mx-auto">
        <div className="container mx-auto md:pt-20 lg:pt-32 md:pb-7 py-11 px-5 ">
          <div className="flex justify-between flex-wrap mb-20">
            <div className="w-full md:w-2/5 lg:w-1/3">
              <img className="mb-4  " src={digiToolsFooter} alt="" />
              <p className=" opacity-80 text-[14px] lg:text-[16px]">
                Premium digital tools for creators, professionals, and
                businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>
            <div className="lg:space-y-3.5 space-y-2 pt-3">
              <h2 className="text-[20px] font-medium">Product</h2>
              <p className="opacity-80 text-[14px] lg:text-[16px]">Features</p>
              <p className="opacity-80 text-[14px] lg:text-[16px]">Pricing</p>
              <p className="opacity-80 text-[14px] lg:text-[16px]">Templates</p>
              <p className="opacity-80 text-[14px] lg:text-[16px]">Integrations</p>
            </div>
            <div className="lg:space-y-3.5 space-y-2 pt-3">
              <h2 className="text-[20px] font-medium">Company</h2>
              <p className="opacity-80 text-[14px] lg:text-[16px]">About</p>
              <p className="opacity-80 text-[14px] lg:text-[16px]">Blog</p>
              <p className="opacity-80 text-[14px] lg:text-[16px]">Careers</p>
              <p className="opacity-80 text-[14px] lg:text-[16px]">Press</p>
            </div>
            <div className="lg:space-y-3.5 space-y-2 pt-3">
              <h2 className="text-[20px] font-medium">Resources</h2>
              <p className="opacity-80 text-[14px] lg:text-[16px]">Documentation</p>
              <p className="opacity-80 text-[14px] lg:text-[16px]">Help Center</p>
              <p className="opacity-80 text-[14px] lg:text-[16px]">Community</p>
              <p className="opacity-80 text-[14px] lg:text-[16px]">Contact</p>
            </div>
            <div className="lg:space-y-3.5 space-y-2 pt-3">
              <h3 className="text-[20px] font-medium lg:mb-5 mb-3">Social Links</h3>
              <div className="flex gap-4">
                <FaCameraRetro />
                <FaFacebook />
                <FaSquareXTwitter />
              </div>
            </div>
          </div>
          <hr className="border-t border-white/20" />
          <div className="flex justify-between mt-7 text-[14px] lg:text-[16px]">
            <p className="opacity-50">© 2026 Digitools. All rights reserved.</p>
            <div className="flex opacity-50 gap-5">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Cookies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
