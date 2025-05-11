import { HomeMenuData } from "../../Data";
import MenuItem from "../MenuItem/MenuItem";
import ArrowRight from "../../Icons/ArrowRight";
import { NavLink } from "react-router-dom";

export default function HomeMenu() {
  return (
    <section id="menu">
      <div className="text-center">
        <h3 className="uppercase text-gray-600 text-lg font-semibold">
          Check out our
        </h3>
        <h2 className="text-primary font-bold text-5xl">Best Sellers</h2>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5">
        {HomeMenuData.map((item) => (
          <MenuItem key={item.title} {...item} />
        ))}
      </div>
      <div className="mt-5 flex justify-center text-2xl">
        <NavLink to="/menu">
          <button className="bg-primary flex items-center gap-2 text-white px-9 py-3 rounded-full transition-opacity duration-200 hover:opacity-90">
            Full Menu
            <ArrowRight className="w-8 h-8" />
          </button>
        </NavLink>
      </div>
    </section>
  );
}
