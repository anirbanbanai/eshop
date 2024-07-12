/* eslint-disable @next/next/no-img-element */
"use client";
import { ButtonGreen } from "@/components/common/ButtonAll";
import SmButton from "@/components/common/SmButton";
import axios from "axios";
import { useEffect, useState } from "react";
import { CiEdit, CiShoppingCart } from "react-icons/ci";
import { MdAutoDelete } from "react-icons/md";
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
const SingleProduct = ({ params }: any) => {
  const [product, setProducts] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  console.log(params.id);
  console.log(product);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/products/${params?.id}`
        );
        // console.log(response.data);
        setProducts(response.data);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-[500px] mx-auto border hover:border-orange-500 rounded-2xl m-3 py-3 px-2">
      <div>
        <img className="rounded-2xl" src={product?.Image} alt="img" width={500} height={200} />
      </div>
      <div>
        <h2 className="text-sm font-semibold">{product?.product_name}</h2>
        <h2 className="text-[12px]">{product?.product_description}</h2>
        <h2 className="text-sm">
          Price: <span className="font-semibold">{product?.price}$</span>
        </h2>
      </div>
      <div className=" flex flex-col items-center">
        <div className="flex gap-3 justify-center">
          <ButtonGreen>
            <div className="flex">
              Add to Cart <CiShoppingCart className="text-2xl text-green-500" />
            </div>
          </ButtonGreen>
        </div>

        <div className="flex gap-3 justify-center">
          <SmButton>
            <MdAutoDelete className="text-2xl text-red-500" />
          </SmButton>
          <ButtonGreen className="">
            <CiEdit className="text-2xl text-green-500" />
          </ButtonGreen>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
