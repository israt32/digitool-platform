import React from 'react';

const Card = ({productPrice,setCartNumber,cartNumber,totalPrice}) => {
  
  
  const handleCart = ()=>{
    
    // console.log(cartNumber, productPrice)

    const newUpdatedCart = [...cartNumber, productPrice]
    setCartNumber(newUpdatedCart)
    totalPrice(newUpdatedCart)
    
  }

  return (
    
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body ">      
          <span className="badge badge-xs badge-warning ml-auto font-medium">Most Popular</span>
          <img className="w-8" src={productPrice.icon} alt="" />
            <h2 className="text-3xl font-bold">{productPrice.name}</h2>
          <p>description</p>
          <span className="text-xl">$29/mo</span>
          <ul className="mt-6 flex flex-col gap-2 text-xs">

           {
             productPrice.features.map((feature, index) => <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>)
           }     

          </ul>
          <div className="mt-6">
            <button onClick={handleCart} className="btn text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block rounded-full">Buy Now</button>
          </div>
        </div>
      </div>

    
  );
};

export default Card;