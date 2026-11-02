import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Dashboard from "./Pages/DashboardPage";
import Pesanan from "./Pages/Pesanan";
import Menu from "./Pages/Menu";
import { daftarMenu, pesananAwal } from "./data/dummyData";

function App() {
  // Daftar pesanan dan menu disimpan sebagai state di App agar bisa
  // dipakai oleh beberapa halaman sekaligus.
  const [pesanan, setPesanan] = useState(pesananAwal);
  const [menu, setMenu] = useState(daftarMenu);
  const [isOpen, setIsOpen] = useState(true);

  const tambahPesanan = (pesananBaru) => {
    setPesanan((previous) => [pesananBaru, ...previous]);
  };

  const tambahMenu = (menuBaru) => {
    setMenu((previous) => [...previous, menuBaru]);
  };

  const ubahMenu = (menuDiubah) => {
    setMenu((previous) =>
      previous.map((item) => (item.id === menuDiubah.id ? menuDiubah : item)),
    );
  };

  const toggleOperasional = () => setIsOpen((previous) => !previous);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              pesanan={pesanan}
              isOpen={isOpen}
              onToggleOperasional={toggleOperasional}
            />
          }
        />
        <Route
          path="/pesanan"
          element={
            <Pesanan
              pesanan={pesanan}
              daftarMenu={menu}
              onTambahPesanan={tambahPesanan}
              isOpen={isOpen}
            />
          }
        />
        <Route
          path="/menu"
          element={
            <Menu
              menu={menu}
              isOpen={isOpen}
              onTambahMenu={tambahMenu}
              onUbahMenu={ubahMenu}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
