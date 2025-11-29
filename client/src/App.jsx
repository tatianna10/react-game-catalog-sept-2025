import { Route, Routes } from "react-router";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/home/Home.jsx";
import Catalog from "./components/catalog/Catalog.jsx";
import Details from "./components/details/Details.jsx";
import GameCreate from "./components/game-create/GameCreate.jsx";
import Register from "./components/register/register.jsx";
import { useState } from "react";
import Login from "./components/login/Login.jsx";

function App() {
  const [user, setUser] = useState(null);

  const authHadler = (email) => {
    setUser({
      email,
    });
  };
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Catalog />} />
        <Route path="/games/:gameId/details" element={<Details />} />
        <Route path="/games/create" element={<GameCreate />} />
        <Route path="/register" element={<Register user={user} onRegister={authHadler} />} />
        <Route path="/login" element={<Login user={user} onLogin={authHadler} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
