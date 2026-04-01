import React from "react";

const GetStarted = () => {
  return (
    <div className="container mx-auto bg-[#F9FAFC] py-28">
      <h1 className="text-[#101727] font-extrabold text-5xl text-center mb-4">
        Get Started in 3 Steps
      </h1>
      <p className="text-[#627382] text-[16px] text-center mb-10">
        Start using premium digital tools in minutes, not hours.
      </p>
      {/* //////////////////// */}
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
