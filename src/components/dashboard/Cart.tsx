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
  product_price: string; // Product price is stored as a string in the database
  addedBy: string;
}

const Carts: React.FC = () => {
  const { user } = useAuthUser(auth);
  const [cart, setCarts] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const fetchCart = async () => {
      if (!user?._id) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/v1/cart");
        const filteredCart = response.data.filter(
          (item: CartItem) => item.addedBy === user._id
        );
        setCarts(filteredCart);

        // Calculate the total price and convert string to number
        const total = filteredCart.reduce(
          (acc:any, item:any) => acc + parseFloat(item.product_price),
          0
        );
        setTotalPrice(total);
      } catch (err) {
        setError("Error fetching cart");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [user?._id]);

  if (loading)
    return (
      <div>
        <div className="text-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  if (error) return <div>{error}</div>;

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
        await axios.delete(`http://localhost:5000/api/v1/cart/${id}`);
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

  const handlePayment = () => {
    Swal.fire({
      icon: "success",
      title: "Payment successful",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center my-5">Cart</h2>
      <div className="md:grid grid-cols-4">
        <div className="m-5 col-span-3 grid md:grid-cols-2">
          {cart.map((item) => (
            <div
              className="border hover:border-orange-500  mx-auto my-4 p-3  rounded-2xl"
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
                <div className="flex justify-center">
                  <ButtonRedOnclick onClick={() => handleDelete(item._id)}>
                    <MdAutoDelete className="text-2xl text-red-500" />
                  </ButtonRedOnclick>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" md:fixed  right-0 border hover:border-orange-500 m-5  bg-slate-200 rounded-2xl px-5 py-3 ">
          <h2>Total price: ${totalPrice.toFixed(2)}</h2>
          <form className="mt-5">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="MM/YY"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">CVV</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="123"
              />
            </div>
            <ButtonOnclick onClick={handlePayment}>Pay Now</ButtonOnclick>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Carts;
