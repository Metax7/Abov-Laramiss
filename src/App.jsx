import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="" ></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
