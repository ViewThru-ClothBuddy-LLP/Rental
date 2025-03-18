"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("/api/product") // Fetch product data from API
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/productlisting/${product.id}`}>
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-red-600 font-bold">₹{product.price}</p>
              <button className="bg-red-600 text-white px-4 py-2 rounded mt-2 w-full">Add to Cart</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
