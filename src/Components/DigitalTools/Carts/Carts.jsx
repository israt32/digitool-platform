import React, { useState } from "react";
import shoppingCart from "../../../assets/products/shopping-cart.png";
import { toast } from "react-toastify";
const Carts = ({ cartNumber, total, setCartNumber, setTotal }) => {
  // console.log(cartNumber);  // we have to work with this

  //  const [deleteArr, setDeleteArr] = useState(cartNumber)
  const checkoutFunction = (cartNumber) => {
    if (cartNumber.length > 0) {
      setCartNumber([]);
      setTotal(0);
    }
  };

  const removeFunction = (cart) => {
    toast.error('Removed from the cart')
    const removedCart = cartNumber.filter(
      (singleCart) => singleCart.name !== cart.name,
    );
    setCartNumber(removedCart);
    setTotal(total - cart.price);
  };

  return (
    <div className="border-2 border-[#F2F2F2] rounded-2xl p-10">
      <h1 className="text-[#101727] font-bold text-2xl mb-6">Your Cart</h1>

      {cartNumber.length > 0 ? (
        <div>
          {cartNumber.map((cart) => (
            <div className="bg-[#F9FAFC] p-5 mb-4 rounded-2xl">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className="bg-white p-3 rounded-full">
                    <img src={cart.icon} alt="" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[20px]">{cart.name}</h2>
                    <p className="text-[#627382] font-medium text-[16px]">
                      ${cart.price}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFunction(cart)}
                  className="btn text-[#FF3980] font-bold text-[16px]"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mb-6">
            <p className="text-[#627382] text-[16px]">Total</p>
            <p className="font-bold text-[#101727] text-2xl">${total}</p>
          </div>
          <button
            onClick={() => checkoutFunction(cartNumber)}
            className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full py-6 font-bold text-[16px] text-white"
          >
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <div className="bg-[#d0d0d0a7] flex flex-col  justify-center items-center md:p-32 p-12 rounded-2xl">
          <img className="w-12 mb-3.5" src={shoppingCart} alt="" />
          <p className="text-xl md:text-2xl font-semibold text-[#627382]">Your Cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default Carts;
