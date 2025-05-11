import { NavLink } from "react-router-dom";
import Link from "../Link/Link";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../AppContext";
import Cart from "../../Icons/Cart";

const defaultStyles = "flex items-center justify-between";
const fixedStyles =
  "fixed mx-auto py-3 flex items-center justify-between top-0 left-0 right-0 z-1000 shadow-lg shadow-black/50";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const headerHeight = document.getElementById("header").offsetHeight;
      setIsFixed(offset > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { cartProducts } = useContext(CartContext);

  return (
    <header
      id="header"
      className={isFixed ? fixedStyles : ""}
      style={isFixed ? { backgroundColor: "#ffe3ab" } : {}}
    >
      <div
        style={isFixed ? { maxWidth: "992px" } : {}}
        className="flex items-center justify-between w-full mx-auto"
      >
        <NavLink to="/" className="text-primary font-semibold text-3xl">
          BestFood
        </NavLink>
        <nav className="flex items-center gap-8 text-xl text-black-800 font-semibold">
          <NavLink
            to="/"
            className="transition-colors duration-200 hover:text-primary"
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className="transition-colors duration-200 hover:text-primary"
          >
            Menu
          </NavLink>
          <Link text={"About"} href="#about" />
          <Link text={"Contacts"} href="#contacts" />
          {cartProducts?.length > 0 && (
            <NavLink to="/cart" className="relative">
              <Cart />
              <span className="absolute -top-2 -right-3 bg-primary text-white text-sm px-1 rounded-full">
                {cartProducts.length}
              </span>
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}
