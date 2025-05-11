import { useState } from "react";
import { NavLink } from "react-router-dom";
import Category from "../components/Category/Category";
import { menuData } from "../Data";
import MenuItem from "../components/MenuItem/MenuItem";
import ArrowRight from "../Icons/ArrowRight";

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const pizzaItems = menuData.filter((item) => item.category === "pizza");
  const burgerItems = menuData.filter((item) => item.category === "burger");
  const saladItems = menuData.filter((item) => item.category === "salad");
  const drinkItems = menuData.filter((item) => item.category === "drink");
  const dessertItems = menuData.filter((item) => item.category === "dessert");

  return (
    <section id="home" className="mt-16">
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="p-3 mt-3 mb-10 w-full text-lg border rounded-xl border-black"
        placeholder="Search a meal..."
      />
      {searchQuery.length === 0 ? (
        <>
          <h1 className="text-primary text-5xl font-semibold text-center mb-5">
            Our Menu
          </h1>
          <Category title={"Pizza"} items={pizzaItems} />
          <Category title={"Burgers"} items={burgerItems} />
          <Category title={"Salads"} items={saladItems} />
          <Category title={"Drinks"} items={drinkItems} />
          <Category title={"Desserts"} items={dessertItems} />
        </>
      ) : (
        <>
          <h2 className="text-2xl font-semibold text-primary text-center">
            Search Results:
          </h2>
          {menuData.filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
          ).length === 0 ? (
            <h3 className="text-xl font-semibold text-primary text-center">
              No such meals!
            </h3>
          ) : (
            <div className="grid grid-cols-3 gap-4 mt-5">
              {menuData
                .filter((item) =>
                  item.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((item) => (
                  <MenuItem key={item.title} {...item} />
                ))}
            </div>
          )}
        </>
      )}
      <div className="mt-5 flex justify-center text-2xl">
        <NavLink to="/">
          <button className="bg-primary flex items-center gap-2 text-white px-9 py-3 rounded-full transition-opacity duration-200 hover:opacity-90">
            Back to Home
            <ArrowRight className="w-8 h-8" />
          </button>
        </NavLink>
      </div>
    </section>
  );
}
