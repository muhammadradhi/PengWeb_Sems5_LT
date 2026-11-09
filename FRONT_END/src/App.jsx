import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Dashboard from "./Pages/DashboardPage";
import Pesanan from "./Pages/Pesanan";
import Menu from "./Pages/Menu";
import daftarMenu from "./data/menuData";
import daftarPesanan from "./data/pesananData";

function App() {
  const [menu, setMenu] = useState(daftarMenu);
  const [pesanan, setPesanan] = useState(daftarPesanan);

  const tambahMenu = (menuBaru) => {
    setMenu([...menu, menuBaru]);
  };

  const ubahMenu = (menuDiubah) => {
    setMenu(menu.map((item) => (item.id === menuDiubah.id ? menuDiubah : item)));
  };

  const ubahStatusPesanan = (id) => {
    const statusBerikutnya = {
      Baru: "Diproses",
      Diproses: "Siap",
      Siap: "Selesai",
    };

    const jamSekarang = new Date().toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });

    setPesanan(
      pesanan.map((item) => {
        if (item.id !== id || item.status === "Selesai") {
          return item;
        }

        const statusBaru = statusBerikutnya[item.status];
        let waktuSelesai = item.waktuSelesai;
        if (statusBaru === "Selesai") {
          waktuSelesai = jamSekarang;
        }

        return { ...item, status: statusBaru, waktuSelesai: waktuSelesai };
      }),
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard pesanan={pesanan} onUbahStatus={ubahStatusPesanan} />} />
        <Route
          path="/pesanan"
          element={
            <Pesanan pesanan={pesanan} onUbahStatus={ubahStatusPesanan} />
          }
        />
        <Route
          path="/menu"
          element={
            <Menu menu={menu} onTambahMenu={tambahMenu} onUbahMenu={ubahMenu} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
