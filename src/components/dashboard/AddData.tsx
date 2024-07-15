"use client"
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { FaCloudUploadAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

interface IProducts {
  product_name: string;
  product_description: string;
  image: string;
  price: number;
  category: string;
  sub_category: string;
}

const AddProductD: React.FC = () => {
  const router = useRouter();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IProducts>();
  const [headlinePreview, setHeadlinePreview] = useState("");
  const [headlineImageUrl, setHeadlineImageUrl] = useState("");

  const handleImagePreview = async (
    file: any,
    setImagePreview: any,
    setImageUrl: any
  ) => {
    if (file.length > 0) {
      const formData = new FormData();
      formData.append("image", file[0]);

      try {
        const response = await axios.post(
          "https://api.imgbb.com/1/upload?key=f38e45febf287b0c4bc835d28ec2cb8c",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.data && response.data.data && response.data.data.image) {
          setImagePreview(response.data.data.display_url);
          setImageUrl(response.data.data.image.url);
        }
      } catch (error) {
        console.error("Error uploading image to imgBB:", error);
      }
    }
  };

  const onSubmit: SubmitHandler<IProducts> = async (data) => {
    const alldata = {
      ...data,
      image: headlineImageUrl,
    };
    console.log(alldata);

    try {
      const ress = await axios.post(
        "https://e-server-beta.vercel.app/api/v1/products",
        alldata
      );
      console.log(ress);

      Swal.fire({
        position: "top",
        icon: "success",
        title: "Product Added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      router.push("/dashboard");
    } catch (error: any) {
      console.error("Product add error:", error);
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Product add failed",
        text: error.message || "Please try again later",
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 border hover:border-orange-500 rounded-2xl p-3">
      <h2 className="text-2xl font-bold mb-5 text-center">Add New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            {...register("product_name", { required: "Product name is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.product_name && <span className="text-red-500 text-sm">{errors.product_name.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Product Description</label>
          <textarea
            {...register("product_description")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.product_description && <span className="text-red-500 text-sm">{errors.product_description.message}</span>}
        </div>

        <div className="lg:col-span-6 col-span-12 flex flex-col shadow-sm p-3">
          <h1 className="mb-5 text-gray-500 font-bold">Image</h1>
          <div className="w-full flex items-center">
            <label className="w-full p-4 cursor-pointer justify-center shadow-lg shrink text-center rounded-full border flex items-center">
              <input
                type="file"
                id="image"
                {...register("image")}
                className="w-full hidden"
                onChange={(e) => handleImagePreview(e.target.files, setHeadlinePreview, setHeadlineImageUrl)}
              />
              <FaCloudUploadAlt className="mr-2" />
              Upload your Image
            </label>
            {headlinePreview && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={headlinePreview}
                alt="Headline Preview"
                className="mt-2 rounded-2xl sm:order-1 md:order-1"
                style={{ maxWidth: "120px" }}
              />
            )}
            {errors.image && <span className="text-red-600">This field is required</span>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            {...register("price")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.price && <span className="text-red-500 text-sm">{errors.price.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            {...register("category", { required: "Category is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select a category</option>
            <option value="food">Food</option>
            <option value="clothes">Clothes</option>
            <option value="bike">Bike</option>
            <option value="electronics">Electronics</option>
          </select>
          {errors.category && <span className="text-red-500 text-sm">{errors.category.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Sub-Category</label>
          <input
            type="text"
            {...register("sub_category")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.sub_category && <span className="text-red-500 text-sm">{errors.sub_category.message}</span>}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductD;
