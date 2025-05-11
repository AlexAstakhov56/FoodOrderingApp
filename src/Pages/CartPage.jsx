import { useContext, useEffect, useState } from "react";
import { CartContext } from "../components/AppContext";
import Close from "../Icons/Close";
import toast from "react-hot-toast";

export default function CartPage() {
  const { cartProducts, removeProductFromCart, clearCart } =
    useContext(CartContext);

  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  const [inp3, setInp3] = useState("");

  function handleRemove(index) {
    removeProductFromCart(index);
    toast.success("Removed from Cart!");
  }

  function handleClear() {
    clearCart();
    toast.success("Cart cleared!");
  }
  function handlePay() {
    if (!inp1 || !inp2 || !inp3) {
      toast.error("You need to enter your data!");
    } else if (cartProducts.length === 0) {
      toast.error("You need to choose the products!");
    } else {
      clearCart();
      setInp1("");
      setInp2("");
      setInp3("");
      toast.success("Thank you for your order!");
    }
  }

  let totalSum = 0;
  cartProducts.forEach((product) => {
    totalSum += product.price;
  });

  return (
    <section className="mt-8">
      <h1 className="text-4xl text-primary text-center font-semibold">
        Shopping Cart
      </h1>
      <div className="grid grid-cols-2 gap-8 mb-6 mt-10 ">
        <div>
          {cartProducts?.length === 0 && (
            <h2 className="text-3xl font-semibold">Cart is Empty</h2>
          )}
          {cartProducts?.length > 0 &&
            cartProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl justify-between mb-3 border-2 text-lg font-semibold border-green-500 bg-gray-100 p-2"
              >
                <div className="w-24">
                  <img src={product.img} alt="" />
                </div>
                <div>{product.title}</div>
                <div>{product.price}$</div>
                <div>
                  <button onClick={() => handleRemove(index)}>
                    <Close />
                  </button>
                </div>
              </div>
            ))}
          <div className="text-2xl mt-6 font-semibold flex items-center justify-between">
            <div>
              Total: <span className="text-primary">{totalSum}$</span>
            </div>
            {cartProducts.length > 0 && (
              <button
                className="bg-primary p-2 transition-opacity duration-200 hover:opacity-85 text-white rounded-full text-xl"
                onClick={handleClear}
              >
                Clear the cart
              </button>
            )}
          </div>
        </div>

        <div className="bg-gray-200 p-3 rounded-xl">
          <h2 className="text-2xl mb-2 font-semibold">Checkout</h2>
          <div>
            <div className="text-xl mb-2">Enter your data:</div>
            <div>
              <label>City</label>
              <input
                value={inp1}
                onChange={(event) => setInp1(event.target.value)}
                type="text"
                className="w-full border rounded-lg p-2 mb-2 text-lg"
                placeholder="City"
              />
            </div>
            <div>
              <label>Street and House</label>
              <input
                value={inp2}
                onChange={(event) => setInp2(event.target.value)}
                type="text"
                className="w-full border rounded-lg p-2 mb-2 text-lg"
                placeholder="Street and House"
              />
            </div>

            <div>
              <label>Phone Number</label>
              <input
                value={inp3}
                onChange={(event) => setInp3(event.target.value)}
                type="text"
                className="w-full border rounded-lg p-2 text-lg"
                placeholder="Phone Number"
              />
            </div>

            <div>
              <button
                type="button"
                onClick={handlePay}
                className="bg-primary w-full py-2 mt-6 transition-opacity font-semibold duration-200 hover:opacity-85 text-white rounded-full text-xl"
              >
                Pay {totalSum}$
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
