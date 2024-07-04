import SmButton from "@/components/common/SmButton";
import Image from "next/image";
import React from "react";

const Food = () => {
  const products = [
    {
      id: "1",
      name: "Wireless Bluetooth Headphones",
      description:
        "High-quality wireless Bluetooth headphones with noise-canceling feature.",
      price: 59.99,
      category: "Electronics",
      stock: 120,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLjAdamssx0fDH1wozLg86hBqlS-JBO0si1R2ohuzdGRHG_6gpq8sTjc2TvzvzajnlfE&usqp=CAU",
      rating: 4.5,
    },
    {
      id: "2",
      name: "Smart LED TV 55 inch",
      description:
        "55 inch 4K Ultra HD Smart LED TV with HDR and Alexa compatibility.",
      price: 499.99,
      category: "Electronics",
      stock: 50,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLjAdamssx0fDH1wozLg86hBqlS-JBO0si1R2ohuzdGRHG_6gpq8sTjc2TvzvzajnlfE&usqp=CAU",
      rating: 4.7,
    },
    {
      id: "3",
      name: "Running Shoes",
      description:
        "Lightweight and comfortable running shoes for men and women.",
      price: 79.99,
      category: "Sportswear",
      stock: 200,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLjAdamssx0fDH1wozLg86hBqlS-JBO0si1R2ohuzdGRHG_6gpq8sTjc2TvzvzajnlfE&usqp=CAU",
      rating: 4.3,
    },
    {
      id: "4",
      name: "Stainless Steel Water Bottle",
      description:
        "Insulated stainless steel water bottle, keeps beverages hot or cold for hours.",
      price: 19.99,
      category: "Home & Kitchen",
      stock: 300,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLjAdamssx0fDH1wozLg86hBqlS-JBO0si1R2ohuzdGRHG_6gpq8sTjc2TvzvzajnlfE&usqp=CAU",
      rating: 4.8,
    },
    {
      id: "5",
      name: "Ergonomic Office Chair",
      description:
        "Ergonomic office chair with lumbar support and adjustable height.",
      price: 149.99,
      category: "Furniture",
      stock: 75,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLjAdamssx0fDH1wozLg86hBqlS-JBO0si1R2ohuzdGRHG_6gpq8sTjc2TvzvzajnlfE&usqp=CAU",
      rating: 4.6,
    },
  ];

  console.log(products);

  return (
    <div>
      <div className="grid grid-cols-1 md:p-8 bg-white gap-y-4 rounded-primary lg:rounded-none lg:bg-transparent lg:p-0">
        <h2 className="text-xl font-bold lg:text-3xl md:text-2xl">eCommerce</h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4  md:grid-cols-3">
          {products.map((m) => (
            <div
              className="border hover:border-orange-500 m-2 rounded-2xl p-2"
              key={m.id}
            >
              <Image src={m.imageUrl} alt="img" width={500} height={200} />
              <h2 className="text-sm font-semibold">{m.name}</h2>
              <h2 className="text-[12px]">{m.description}</h2>
              <h2 className="text-sm">
                Price : <span className="font-semibold"> {m.price}$</span>{" "}
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

export default Food;
