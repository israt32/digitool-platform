import React from "react";
import digiToolLogo from "../../assets/products/DigiTools.png";
import cartImgNavbar from '../../assets/products/shopping-cart.png'
const Navbar = ({cartNumber}) => {
 
  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-50 py-3 pr-6">
      <div className="container mx-auto flex items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a>
            <img src={digiToolLogo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="font-semibold text-base">Products</a>
            </li>
            <li>
              <a className="font-semibold text-base">Features</a>
            </li>
            <li>
              <a className="font-semibold text-base">Pricing</a>
            </li>
            <li>
              <a className="font-semibold text-base">Testimonials</a>
            </li>
            <li>
              <a className="font-semibold text-base">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <span className="inline-block relative ">
            <img className="relative w-6 h-6" src={cartImgNavbar} alt="" />
            <p className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-red-600 text-white text-xs md:text-sm font-bold rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center ">{cartNumber.length}</p>
            </span>
          <a className="text-[#101727] opacity-90 font-semibold text-[16px]" href="">Login</a>
          <a className="btn font-semibold text-[16px] text-white  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full hidden md:inline-flex ">Get Started</a>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
