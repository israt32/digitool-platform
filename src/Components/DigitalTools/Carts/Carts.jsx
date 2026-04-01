import React, { useState } from "react";

const Carts = ({ cartNumber, total ,setCartNumber,setTotal}) => {
  // console.log(cartNumber);  // we have to work with this

//  const [deleteArr, setDeleteArr] = useState(cartNumber)
   const checkoutFunction =(cartNumber)=>{
   
    if(cartNumber.length > 0){

      setCartNumber([])
      setTotal(0)
    }

  }

  const removeFunction =(cart)=>{
   const removedCart = cartNumber.filter(singleCart => singleCart.name !== cart.name);
   setCartNumber(removedCart)
   setTotal(total - cart.price)
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
            <button onClick={()=> removeFunction(cart)} className="btn">Remove</button>
          </div>
         
        </div>
      ))}
       <div className="flex justify-between items-center">
            <p>Total</p>
            <p>{total}</p>
          </div>
          <button onClick={()=>checkoutFunction(cartNumber)} className="btn">Proceed to Checkout</button>
    </div>
  );
};

export default Carts;
