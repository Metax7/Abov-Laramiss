import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="" element={<Home />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
