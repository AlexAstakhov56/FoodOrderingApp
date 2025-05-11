import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./Pages/MainPage";
import MenuPage from "./Pages/MenuPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CartPage from "./Pages/CartPage";
import AppProvider from "./components/AppContext";
import { Toaster } from "react-hot-toast";

export default function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      <AppProvider>
        <Router>
          <ScrollToTop />
          <Layout>
            <div>
              <Toaster
                toastOptions={{
                  success: {
                    className: "text-lg",
                    style: {
                      border: "2px solid #18f520",
                      padding: "10px",
                    },
                  },
                  error: {
                    className: "text-lg",
                    style: {
                      border: "2px solid #f00707",
                      padding: "10px",
                    },
                  },
                }}
              />
            </div>
            <Header />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
          </Layout>
        </Router>
      </AppProvider>
    </>
  );
}
