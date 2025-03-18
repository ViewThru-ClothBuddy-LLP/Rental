import Image from "next/image";
import Link from "next/link";
const products = [
  {
    id: 1,
    name: "BLACK SOLID COTTON SHIRT",
    price: "₹227/hour",
    rating: 3,
    image: "/uniform2 1.png", // Replace with actual image URL
  },
  {
    id: 2,
    name: "BEIGE SOLID CASA LINEN SHIRT",
    price: "₹128/hour",
    rating: 4.5,
    image: "/uniform2 1.png",
  },
  {
    id: 3,
    name: "RED SOLID COTTON-SATIN SHIRT",
    price: "₹127/hour",
    rating: 4,
    image: "/uniform2 1.png",
  },
  {
    id: 4,
    name: "TERACOTTA BROWN COTTON SHIRT",
    price: "₹67/hour",
    rating: 3,
    image: "/uniform2 1.png",
  },
  {
    id: 5,
    name: "BLACK SOLID COTTON SHIRT",
    price: "₹227/hour",
    rating: 3,
    image: "/uniform2 1.png", // Replace with actual image URL
  },
  {
    id: 6,
    name: "BEIGE SOLID CASA LINEN SHIRT",
    price: "₹128/hour",
    rating: 4.5,
    image: "/uniform2 1.png",
  },
  {
    id: 7,
    name: "RED SOLID COTTON-SATIN SHIRT",
    price: "₹127/hour",
    rating: 4,
    image: "/uniform2 1.png",
  },
  {
    id: 8,
    name: "TERACOTTA BROWN COTTON SHIRT",
    price: "₹67/hour",
    rating: 3,
    image: "/uniform2 1.png",
  },
  {
    id: 9,
    name: "BLACK SOLID COTTON SHIRT",
    price: "₹227/hour",
    rating: 3,
    image: "/uniform2 1.png", // Replace with actual image URL
  },
  {
    id: 10,
    name: "BEIGE SOLID CASA LINEN SHIRT",
    price: "₹128/hour",
    rating: 4.5,
    image: "/uniform2 1.png",
  },
  {
    id: 11,
    name: "RED SOLID COTTON-SATIN SHIRT",
    price: "₹127/hour",
    rating: 4,
    image: "/uniform2 1.png",
  },
  {
    id: 12,
    name: "TERACOTTA BROWN COTTON SHIRT",
    price: "₹67/hour",
    rating: 3,
    image: "/uniform2 1.png",
  },
];

export default function ProductList() {
    return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={product.image} alt={product.name} width={300} height={400} className="w-full object-cover" />
              <div className="p-4">
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <div className="flex items-center mt-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                      key={index}
                      className={
                        index < product.rating ? "text-yellow-500" : "text-gray-300"
                      }
                    >
                      ★
                    </span>
                  ))}
                  <span className="ml-2 text-sm">{product.rating}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-lg font-bold">{product.price}</p>
                  <Link href={`/productlist/${product.id}`} passHref>
                  <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
                    Add to Cart
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
