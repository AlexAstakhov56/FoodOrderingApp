import MenuItem from "../MenuItem/MenuItem";

export default function Category({ title, items }) {
  return (
    <div className="mt-5 mb-10">
      <h3 className="text-center font-semibold text-2xl text-green-600">
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-4 mt-5">
        {items.map((item) => (
          <MenuItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
