"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/product/${id}`)
        .then((res) => res.json())
        .then((data)=> {console.log(data);setProduct(data)} )      
    }
    console.log(id);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={product.image} alt={product.name} className="rounded-lg w-full" />
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-500">{product.category}</p>
          <p className="text-2xl text-red-600 font-bold">₹{product.price}</p>
          <p className="text-green-600">Inclusive of all taxes</p>

          <div className="mt-4 p-4 bg-gray-100 rounded">
            <p className="font-semibold">Available Offers:</p>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              {product.offers.map((offer, index) => (
                <li key={index}>{offer}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex gap-4">
            <button className="px-6 py-2 bg-black text-white rounded">Buy Now</button>
            <button className="px-6 py-2 border border-black rounded">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
