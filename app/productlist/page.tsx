'use client';
import { useParams } from "next/navigation";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ProductDetails = () => {
  // const router = useRouter();
  // const { id } = router.query;
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on ID (Replace with actual API call)
    const products = [
      {
        id: '1',
        name: 'BLACK SOLID COTTON SHIRT',
        price: '₹687',
        rating: 4.5,
        image: '/black-shirt.jpg',
        description: 'Solid Cotton Shirt',
        offers: [
          '10% Instant Discount on HDFC Cards',
          '₹200 cashback on UPI Payments',
          'No Cost EMI Available'
        ]
      }
    ];
    
    const selectedProduct = products.find(p => p.id === id);
    if (selectedProduct) setProduct(selectedProduct);
  }, [id]);

  if (!product) return <p className='text-center'>Loading...</p>;

  return (
    <div className='container mx-auto p-4 flex flex-col md:flex-row gap-6 items-start'>
      <div className='w-full md:w-1/2'>
        <Image src={product.image} alt={product.name} width={500} height={500} className='rounded-lg' />
      </div>
      <div className='w-full md:w-1/2'>
        <h1 className='text-2xl font-bold'>{product.name}</h1>
        <p className='text-yellow-500'>⭐ {product.rating}</p>
        <p className='text-xl font-bold text-red-600'>{product.price}</p>
        <p className='text-green-600'>Inclusive of all taxes</p>
        <div className='bg-gray-100 p-4 rounded-lg mt-4'>
          <p className='font-semibold'>Available Offers:</p>
          <ul className='list-disc pl-5'>
            {product.offers.map((offer, index) => (
              <li key={index} className='text-gray-700'>{offer}</li>
            ))}
          </ul>
        </div>
        <div className='flex gap-4 mt-6'>
          <button className='bg-black text-white px-6 py-2 rounded-lg'>Buy Now</button>
          <button className='border border-black px-6 py-2 rounded-lg'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;