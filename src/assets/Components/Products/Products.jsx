import React from "react";
import pie from "../../images/products-img/pie.jpg";
import truffle from "../../images/products-img/coconutTruffle.jpg";
import cake from "../../images/products-img/mousecake.jpg";
import pea from "../../images/products-img/pea_purple_podded.jpg";
import corn from "../../images/products-img/corn.jpg";
import shutter from "../../images/products-img/shutterstock.jpg";
import capsicum from "../../images/products-img/capsicum.jpg";
import orange from "../../images/products-img/dragonOrange.jpg";
import pancake from "../../images/products-img/pancakes.jpg";
const products = [
  {
    id: 1,
    name: "Truffle Infused Coconut",
    price: 15,
    image: pie,
    isNew: true,
  },
  {
    id: 2,
    name: "Gumbi Gumbi Tea",
    price: 15,
    image: truffle,
    isSale: true,
  },
  {
    id: 3,
    name: "Green Tea Blend",
    price: 15,
    image: pancake,
  },
  {
    id: 4,
    name: "Herbal Mix",
    price: 15,
    image: cake,
  },
  {
    id: 5,
    name: "Seasonal Blend",
    price: 15,
    image: pea,
  },
  {
    id: 6,
    name: "Special Tea Mix",
    price: 15,
    image: corn,
  },
  {
    id: 7,
    name: "Wild Harvest Tea",
    price: 15,
    image: shutter,
  },
  {
    id: 8,
    name: "Garden Fresh Blend",
    price: 15,
    image: capsicum,
  },
  {
    id: 9,
    name: "Premium Tea Selection",
    price: 15,
    image: orange,
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-500 via-emerald-400 to-green-400 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-white text-center">
            Our Products
          </h1>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {product.isNew && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    New
                  </div>
                )}
                {product.isSale && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Sale
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <div className="text-gray-900">
                    <span className="text-lg font-bold">${product.price}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-600">Quantity:</label>
                    <div className="flex items-center border rounded">
                      <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                        -
                      </button>
                      <span className="px-2 py-1 border-x">1</span>
                      <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-end mt-8">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            NEXT PAGE
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
