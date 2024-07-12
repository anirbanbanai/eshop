/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import useAuthUser from "@/components/auth/getUser";
import { ButtonGreen, ButtonOnclick, ButtonRedOnclick } from "@/components/common/ButtonAll";
import SmButton from "@/components/common/SmButton";
import Link from "next/link";
import { CiEdit, CiShoppingCart } from "react-icons/ci";
import { MdAutoDelete } from "react-icons/md";
import { auth } from "../../../../firebase.config";
import axios from "axios";
import Swal from "sweetalert2";
import EditModal from "./EditModal"; // import EditModal

const ProductCard = ({ product }: any) => {
  const { user } = useAuthUser(auth);
  const [isModalOpen, setIsModalOpen] = useState(false); // state to control modal

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const del = await axios.delete(`http://localhost:5000/api/v1/products/${id}`);
        Swal.fire({
          icon: "success",
          title: "Deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.reload(); // Reload the window after deletion
        });
      } catch (error: any) {
        Swal.fire({
          icon: "error",
          title: "Error deleting",
          text: error.message,
        });
      }
    }
  };

  const handleAddToCart = async (data: any) => {
    // console.log(data);
    const alldata = {
      addedBy: user?._id,
      product_id: data._id,
      product_name: data.product_name,
      product_image: data.image,
      product_price: data.price,
    };
    // console.log(alldata);
    const added = await axios.post(
      "http://localhost:5000/api/v1/cart",
      alldata
    );

    // console.log(added);
    if (added.data) {
      Swal.fire({
        icon: "success",
        title: "Add to cart successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
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
        <img src={product.image} alt="img" width={500} height={200} />
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

          <ButtonOnclick onClick={()=>handleAddToCart(product)}>
            <CiShoppingCart className="text-2xl text-green-500" />
          </ButtonOnclick>
        </div>

        {user?.role === "admin" && (
          <div className="flex gap-3 justify-center">
            <ButtonRedOnclick onClick={() => handleDelete(product._id)}>
              <MdAutoDelete className="text-2xl text-red-500" />
            </ButtonRedOnclick>

            <ButtonRedOnclick onClick={() => setIsModalOpen(true)}>
              <CiEdit className="text-2xl text-green-500" />
            </ButtonRedOnclick>
          </div>
        )}
      </div>
      <EditModal
      
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        product={product}
      />
    </div>
  );
};

export default ProductCard;
