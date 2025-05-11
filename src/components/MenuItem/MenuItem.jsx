import { useContext } from "react";
import { CartContext } from "../AppContext";
import toast, { Toaster } from "react-hot-toast";

export default function MenuItem({ img, title, price }) {
  const product = {
    img: img,
    title: title,
    price: price,
  };
  const { addToCart } = useContext(CartContext);
  function handleAddClick() {
    addToCart(product);
    toast.success("Added to Cart!");
  }
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center border-2 transition-all duration-200 hover:bg-gray-100 hover:border-primary hover:shadow-lg hover:shadow-black/50 hover:-translate-y-3 z-1">
      <div className="mx-auto" style={{ width: "200px", height: "200px" }}>
        <img src={img} alt="" className="mx-auto h-full" />
      </div>
      <h4 className="font-semibold my-2">{title}</h4>
      <button
        onClick={handleAddClick}
        className="bg-primary px-6 py-2 text-white rounded-full"
      >
        Add to Cart ${price}
      </button>
    </div>
  );
}
