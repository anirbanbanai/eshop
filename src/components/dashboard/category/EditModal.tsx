/* eslint-disable @next/next/no-img-element */
import React from "react";
import Modal from "react-modal";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
// import { useRouter } from "next/router";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000, // Set a high z-index value
  },
  overlay: {
    zIndex: 999, // Ensure the overlay also has a high z-index value
  },
};

interface EditModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  product: any;
}

interface IFormInput {
  product_name: string;
  product_description: string;
  price: number;
  Image: string;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onRequestClose, product }) => {
//   const router = useRouter();
  const { register, handleSubmit, setValue, reset } = useForm<IFormInput>();

  React.useEffect(() => {
    if (product) {
      setValue("product_name", product.product_name);
      setValue("product_description", product.product_description);
      setValue("price", product.price);
      setValue("Image", product.Image);
    }
  }, [product, setValue]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await axios.put(`https://e-server-beta.vercel.app/api/v1/products/${product._id}`, data);
      Swal.fire({
        icon: "success",
        title: "Updated successfully",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        onRequestClose();
        // router.reload(); // Reload the page to reflect the updated product
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error updating",
        text: error.message,
      });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Edit Product"
    >
      <h2 className="text-blue-500 text-center my-3">Edit Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
          <input
            {...register("product_name", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea
            {...register("product_description", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
          <input
            type="number"
            {...register("price", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
       
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update Product
          </button>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onRequestClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
