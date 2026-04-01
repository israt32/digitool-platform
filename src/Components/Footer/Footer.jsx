import React from "react";
import digiToolsFooter from "../../assets/products/DigiTools (1).png";
import { FaCameraRetro, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#101727] text-white">
      <div className="container mx-auto pt-32 pb-7">
        <div className="flex justify-between mb-20">
          <div>
            <img className="mb-4" src={digiToolsFooter} alt="" />
            <p className="w-[500px] opacity-80">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className="space-y-3.5">
            <h2 className="text-[20px] font-medium">Product</h2>
            <p className="opacity-80">Features</p>
            <p className="opacity-80">Pricing</p>
            <p className="opacity-80">Templates</p>
            <p className="opacity-80">Integrations</p>
          </div>
          <div className="space-y-3.5">
            <h2 className="text-[20px] font-medium">Company</h2>
            <p className="opacity-80">About</p>
            <p className="opacity-80">Blog</p>
            <p className="opacity-80">Careers</p>
            <p className="opacity-80">Press</p>
          </div>
          <div className="space-y-3.5">
            <h2 className="text-[20px] font-medium">Resources</h2>
            <p className="opacity-80">Documentation</p>
            <p className="opacity-80">Help Center</p>
            <p className="opacity-80">Community</p>
            <p className="opacity-80">Contact</p>
          </div>
          <div className="space-y-3.5">
            <h3>Social Links</h3>
            <div className="flex gap-4">
              <FaCameraRetro />
              <FaFacebook />
              <FaSquareXTwitter />
            </div>
          </div>
        </div>
        <hr className="border-t border-white/20" />
        <div className="flex justify-between mt-7">
          <p className="opacity-50">© 2026 Digitools. All rights reserved.</p>
          <div className="flex opacity-50 gap-5">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
