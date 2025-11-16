import { Route, Routes } from "react-router";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/home/home.jsx";
import Catalog from "./components/catalog/Catalog.jsx";

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Catalog />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
