import { NextResponse } from "next/server";

const products = [
  {
    id: "1",
    name: "Black Solid Cotton Shirt",
    price: 687,
    image: "/images/black-shirt.jpg",
    category: "Solid Cotton Shirt",
    offers: [
      "Bank Offer: 10% Instant Discount on HDFC Cards",
      "Get ₹200 cashback on UPI Payments",
      "No Cost EMI Available",
    ],
  },
  {
    id: "2",
    name: "Red Solid Cotton-Satin Shirt",
    price: 687,
    image: "/images/red-shirt.jpg",
    category: "Cotton-Satin Shirt",
    offers: [
      "Bank Offer: 10% Instant Discount on HDFC Cards",
      "Get ₹200 cashback on UPI Payments",
    ],
  },
];

export async function GET() {
  return NextResponse.json(products);
}

