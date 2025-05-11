import ArrowRight from "../../Icons/ArrowRight";
import mainImage from "../../Images/MainImage.jpg";

export default function Home() {
  return (
    <section id="home" className="flex justify-between py-12">
      <div style={{ width: "40%" }}>
        <h1 className="text-5xl font-semibold">Best Food for the best mood!</h1>
        <p className="my-6 text-lg text-gray-600">
          Discover the world of culinary delights with our food delivery
          service! We offer a wide range of dishes, from fresh salads to sweet
          desserts that will satisfy any taste preferences. Order your favorite
          food in comfort — quickly, conveniently, and deliciously.
        </p>
        <div className="flex gap-4 text-xl">
          <button className="bg-primary flex items-center gap-2 text-white px-6 py-2 rounded-full transition-opacity duration-200 hover:opacity-90">
            Order Now
            <ArrowRight className="w-8 h-8" />
          </button>
          <button className="rounded-full px-8 py-2 border-2 font-semibold bg-white transition-all duration-200 border-white hover:border-primary">
            Learn More
          </button>
        </div>
      </div>
      <div className="" style={{ width: "52%" }}>
        <img src={mainImage} alt="mainImage" />
      </div>
    </section>
  );
}
