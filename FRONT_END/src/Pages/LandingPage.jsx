import { Link } from "react-router-dom";
import AuthNavbar from "../components/AuthNavbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <AuthNavbar />

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

          <div className="mt-7 flex items-center gap-5 border-t border-dashed border-gray-200 pt-5">
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-gray-900">30+</span>
              <span className="text-[11px] font-medium text-gray-500">
                Menu Tersedia
              </span>
            </div>

            <div className="h-8 w-px bg-gray-200"></div>

            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-gray-900">100+</span>
              <span className="text-[11px] font-medium text-gray-500">
                Mitra Terdaftar
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
