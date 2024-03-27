import React from "react";
interface id {
  id: number | string;
}

const ProductDetails: React.FC<id> = ({ id }) => {
  return (
    <div>
      <div>productDetails - {id}</div>
    </div>
  );
};

export default ProductDetails;
