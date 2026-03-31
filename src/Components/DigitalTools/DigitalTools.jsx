import React, { use, useState } from 'react';
import Products from './Products/Products';
import Carts from './Carts/Carts';

const DigitalTools = ({promisePricing, setCartNumber,cartNumber}) => {
  const pricingDatas = use(promisePricing)
  // console.log(pricingDatas)
  const [selected, setSelected] = useState('products')
   
  const [total, setTotal] = useState(0)
  const totalPrice = (newUpdatedCart) => {
    // console.log(newUpdatedCart, 'eita ki kaj kore?')
    const totalPrice = newUpdatedCart.reduce((total, item) => total + item.price, 0)
    setTotal(totalPrice)

   
  }
  


  return (
    <div>
      <h2>Premium Digital Tools</h2>
      <p>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
      <div className=' p-1 border border-[#F6F6F6] w-fit mx-auto rounded-full'>
        <button onClick={()=>setSelected('products')} className={`px-4 py-3.5 w-[120px] rounded-full  font-bold text-[16px] ${selected === 'products' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'text-[#25065D]'}`}>Products</button>

        <button onClick={()=>setSelected('cart')} className={`px-4 py-3.5 w-[120px] rounded-full font-bold text-[16px]  ${selected === 'cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'text-[#25065D]'}`}>Cart ({cartNumber.length})</button>
      </div>
    {selected === 'products' ? <Products totalPrice={totalPrice} pricingDatas={pricingDatas} cartNumber={cartNumber} setCartNumber={setCartNumber}></Products> : <Carts total={total} cartNumber={cartNumber}></Carts>}
      
    </div>
  );
};

export default DigitalTools;