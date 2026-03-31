import React, { useState } from "react";

const Carts = ({ cartNumber, total }) => {
  // console.log(cartNumber);  // we have to work with this

  const [deleteArr, setDeleteArr] = useState(cartNumber)
   const deleteFunction =()=>{

         if(cartNumber.length > 0){
        
          console.log('clicked')
         
          setDeleteArr([])
         }
   
    


   }

  return (
    <div>
      Your Cart
      {cartNumber.map((cart) => (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img src={cart.icon} alt="" />
              <div>
                <h2>{cart.name}</h2>
                <p>{cart.price}</p>
              </div>
            </div>
            <button className="btn">Remove</button>
          </div>
          <div className="flex justify-between items-center">
            <p>Total</p>
            <p>{total}</p>
          </div>
          <button onClick={deleteFunction} className="btn">Proceed to Checkout</button>
        </div>
      ))}
    </div>
  );
};

export default Carts;
