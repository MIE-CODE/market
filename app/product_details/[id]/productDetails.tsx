import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
interface id {
  id: number | string;
}

const ProductDetails: React.FC<id> = ({ id }) => {
  const [product, setProduct] = useState<ItemProducts | null>();

  interface ItemProducts {
    id: number;
    name: string;
    images: image[];
    description: string;
  }
  interface image {
    url: string;
  }
  useEffect(() => {
    async function getItems() {
      const url = `https://course-api.com/react-store-single-product?id=${id}`;
      const response = await axios.get<ItemProducts>(url);
      setProduct(response.data);
      console.log(response.data);
    }
    getItems();
  }, [id]);

  return (
    <div>
      <div>
        productDetails {id} {product?.name}
        {product && (
          <Image
            src={product.images[0].url}
            alt={product?.name}
            width={200}
            height={200}
          />
        )}
        {product?.id} --
        {product?.images[0].url}
      </div>
    </div>
  );
};

export default ProductDetails;
