/* eslint-disable @next/next/no-img-element */
import SmButton from "@/components/common/SmButton";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  _id: string;
  product_name: string;
  product_description: string;
  price: number;
  category: string;
  stock: number;
  Image: string;
  rating: number;
}

const Clothes: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          "http://localhost:5000/api/v1/products"
        );
        const filteredProducts = response.data.filter(
          (product) => product.category === "clothes"
        );
        setProducts(filteredProducts);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err);
        } else {
          setError(new Error("An unexpected error occurred"));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="grid grid-cols-1 md:p-8 bg-white gap-y-4 rounded-primary lg:rounded-none lg:bg-transparent lg:p-0">
        <h2 className="text-xl font-bold lg:text-3xl md:text-2xl">eCommerce</h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4  md:grid-cols-3">
          {products.map((product) => (
            <div
              className="border hover:border-orange-500 m-2 rounded-2xl p-2"
              key={product._id}
            >
              <img src={product.Image} alt="img" width={500} height={200} />
              <h2 className="text-sm font-semibold">{product.product_name}</h2>
              <h2 className="text-[12px]">{product.product_description}</h2>
              <h2 className="text-sm">
                Price: <span className="font-semibold">{product.price}$</span>
              </h2>
              <div className="flex justify-center">
                <SmButton>Know More</SmButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clothes;
