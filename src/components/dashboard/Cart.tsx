/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuthUser from "../auth/getUser";
import { auth } from "../../../firebase.config";
import { ButtonOnclick, ButtonRedOnclick } from "../common/ButtonAll";
import { MdAutoDelete } from "react-icons/md";
import Swal from "sweetalert2";

interface CartItem {
  _id: string;
  product_id: string;
  product_image: string;
  product_name: string;
  product_price: number;
  addedBy: string;
}

const Carts: React.FC = () => {
  const { user } = useAuthUser(auth);
  const [cart, setCarts] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCart = async () => {
      if (!user?._id) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/v1/cart");
        // console.log(response.data);
        const filteredCart = response.data.filter(
          (item: CartItem) => item.addedBy === user._id
        );
        console.log(filteredCart);
        setCarts(filteredCart);
      } catch (err) {
        setError("Error fetching cart");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [user?._id]); // Add user._id as a dependency

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handleDelete = async (id: string) => {
    // console.log(id);
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
        const del = await axios.delete(`http://localhost:5000/api/v1/cart/${id}`);
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
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center my-5">Cart</h2>
      <div>
        {cart.map((item) => (
          <div
            className="border hover:border-orange-500 max-w-[400px] mx-auto my-4 p-3 rounded-2xl"
            key={item._id}
          >
            <img
              className="w-[300px] h-[200px] mx-auto rounded-xl"
              src={item.product_image}
              alt="img"
            />
            <div className="flex gap-3 justify-between items-center my-3 mx-5">
              <div>
                <h3>Name: {item.product_name}</h3>
                <h4>Price: ${item.product_price}</h4>
              </div>
              <div className=" flex justify-center">
                <ButtonRedOnclick onClick={()=>handleDelete(item._id)}>
                  <MdAutoDelete className="text-2xl text-red-500" />
                </ButtonRedOnclick>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carts;
