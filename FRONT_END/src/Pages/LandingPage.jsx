import { Link } from "react-router-dom";
import InfoAngka from "../Components/Molecules/InfoAngka";

const LandingPage = () => {
  const infoWarung = [
    { angka: "30+", label: "Menu Tersedia" },
    { angka: "100+", label: "Mitra Terdaftar" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="flex h-16 items-center border-b border-gray-200 bg-white px-5 sm:px-12">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="text-xl font-bold tracking-tight text-[#111111]">
            Warung
          </span>

          <span className="text-base text-gray-300">|</span>

          <span className="text-xs font-semibold tracking-wide text-gray-500">
            UMKM
          </span>
        </Link>
      </header>

      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center p-6">
        <section className="w-full max-w-95">
          <h1 className="mb-3 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-[28px]">
            Kelola warung,
            <br />
            mulai dari sini.
          </h1>

          <p className="mb-5 text-[13px] leading-relaxed text-[#555a55]">
            Masuk untuk mengelola menu dan pesanan, atau daftarkan akun owner
            Anda.
          </p>

          <div className="flex items-center gap-2.5 border-t border-gray-100 pt-4">
            <Link
              to="/login"
              className="inline-flex h-9.5 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-[#2186ff] bg-[#2186ff] px-3.5 text-xs font-semibold text-white transition hover:-translate-y-px hover:bg-[#086bdc] sm:px-5.5"
            >
              Login Sekarang
              <span aria-hidden="true">&rarr;</span>
            </Link>

            <Link
              to="/register"
              className="inline-flex h-[38px] items-center justify-center whitespace-nowrap rounded-md border border-gray-300 bg-white px-[14px] text-xs font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-100 sm:px-[22px]"
            >
              Daftar Akun Baru
            </Link>
          </div>

          <div className="mt-7 flex items-center divide-x divide-gray-200 border-t border-dashed border-gray-200 pt-5">
            {infoWarung.map((item) => (
              <InfoAngka key={item.label} angka={item.angka} label={item.label} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
