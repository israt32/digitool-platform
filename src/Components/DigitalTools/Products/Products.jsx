import React from "react";

import Card from "../../ui/Card";
const Products = ({pricingDatas, setCartNumber,cartNumber,totalPrice}) => {
  // console.log(pricingDatas, 'pricingDatas')
  
  return (
    <div className="grid grid-cols-3 gap-8">
      {
      pricingDatas.map(productPrice =>  <Card key={productPrice.id} totalPrice={totalPrice} productPrice={productPrice} cartNumber={cartNumber} setCartNumber={setCartNumber} ></Card> )
      }
    
    </div>
  );
};

export default Products;
