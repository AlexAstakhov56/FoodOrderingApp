import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export default function AppContext({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const storage = typeof window !== "undefined" ? window.localStorage : null;

  function saveProductsToLS(cartProducts) {
    if (storage) {
      storage.setItem("cart", JSON.stringify(cartProducts));
    }
  }

  function removeProductFromCart(removeIndex) {
    setCartProducts((prevCartProducts) => {
      const newProducts = prevCartProducts.filter(
        (v, index) => index !== removeIndex
      );
      saveProductsToLS(newProducts);
      return newProducts;
    });
  }

  useEffect(() => {
    if (storage && storage.getItem("cart"))
      setCartProducts(JSON.parse(storage.getItem("cart")));
  }, []);

  function clearCart() {
    setCartProducts([]);
    saveProductsToLS([]);
  }

  function addToCart(product) {
    setCartProducts((prevProducts) => {
      const newProducts = [...prevProducts, product];
      saveProductsToLS(newProducts);
      return newProducts;
    });
  }
  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addToCart,
        removeProductFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
