/* eslint-disable @next/next/no-img-element */
// import SmButton from "@/components/common/SmButton";
import { ButtonGreen } from "@/components/common/ButtonAll";
import SmButton from "@/components/common/SmButton";
import Link from "next/link";
import React from "react";
import { CiEdit, CiShoppingCart } from "react-icons/ci";
import { MdAutoDelete } from "react-icons/md";

const ProductCard = ({ product }: any) => {
  const handleDelete = (id: string) => {
    console.log(id);
  };
  const handleMore = () => {
    console.log("jfgf");
  };

  return (
    <div
      className="border hover:border-orange-500 m-2 rounded-2xl p-2 flex flex-col justify-around"
      key={product._id}
    >
      <div>
        <img src={product.Image} alt="img" width={500} height={200} />
      </div>
      <div>
        <h2 className="text-sm font-semibold">{product.product_name}</h2>
        <h2 className="text-[12px]">{product.product_description}</h2>
        <h2 className="text-sm">
          Price: <span className="font-semibold">{product.price}$</span>
        </h2>
      </div>
      <div className=" flex flex-col items-center">
        <div className="flex gap-3 justify-center">
          <Link href={`dashboard/${product._id}`}>
            <SmButton onClick={handleMore}>Know More</SmButton>
          </Link>

          <ButtonGreen>
            <CiShoppingCart className="text-2xl text-green-500" />
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

export default ProductCard;
