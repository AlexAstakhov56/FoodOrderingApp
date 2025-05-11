import Home from "../components/Home/Home";
import HomeMenu from "../components/HomeMenu/HomeMenu";
import About from "../components/About";
import Contacts from "../components/Contacts";

export default function MainPage() {
  return (
    <main>
      <Home />
      <HomeMenu />
      <About />
      <Contacts />
    </main>
  );
}
