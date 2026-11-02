import { Link } from "react-router-dom";
import momoMasak from "../assets/momo masak.png";
import AuthNavbar from "../components/AuthNavbar";

const RegisterPage = () => {
  const categories = [
    { value: "warteg", label: "Warteg / RM" },
    { value: "coffee-shop", label: "Coffee Shop" },
    { value: "makanan", label: "Makanan" },
    { value: "minuman", label: "Minuman" },
    { value: "jajanan", label: "Jajanan / Camilan" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-10 text-gray-800">
      {/* Navbar */}
      <AuthNavbar />

      {/* Main Container */}
      <main className="flex justify-center px-4 py-8 sm:px-6">
        <div className="w-full max-w-6xl rounded-xl border border-gray-200 bg-white p-5 sm:p-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_340px]">
            {/* Register Form */}
            <section>
              <div className="mb-7">
                <span className="mb-3 inline-block rounded bg-gray-100 px-2.5 py-1 text-[10px] font-bold tracking-wide text-gray-600 sm:text-[11px]">
                  PENDAFTARAN PORTAL · KHUSUS PEMILIK & WARUNG
                </span>

                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-[26px]">
                  Buat akun owner & warung.
                </h1>

                <p className="text-sm leading-relaxed text-gray-500">
                  Daftarkan identitas pemilik dan profil usaha Anda untuk
                  memulai pengelolaan kasir terpadu.
                </p>
              </div>

              <form>
                {/* Informasi Pemilik */}
                <fieldset className="mb-6">
                  <legend className="mb-4 w-full border-b border-gray-100 pb-3 text-xs font-bold tracking-wide text-gray-900">
                    <span className="mr-2">♙</span>
                    1. INFORMASI PEMILIK
                  </legend>

                  <div className="mb-4">
                    <label
                      htmlFor="owner-name"
                      className="mb-2 block text-[11px] font-bold tracking-wide text-gray-900"
                    >
                      NAMA LENGKAP OWNER
                    </label>

                    <input
                      type="text"
                      id="owner-name"
                      placeholder="Budi Santoso"
                      className="w-full rounded-md border border-gray-300 px-3.5 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-600"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="business-email"
                      className="mb-2 block text-[11px] font-bold tracking-wide text-gray-900"
                    >
                      EMAIL BISNIS
                    </label>

                    <input
                      type="email"
                      id="business-email"
                      placeholder="budi@warungpadang.com"
                      className="w-full rounded-md border border-gray-300 px-3.5 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-600"
                    />
                  </div>
                </fieldset>

                {/* Detail Bisnis */}
                <fieldset className="mb-6">
                  <legend className="mb-4 w-full border-b border-gray-100 pb-3 text-xs font-bold tracking-wide text-gray-900">
                    <span className="mr-2">⌂</span>
                    2. DETAIL BISNIS / WARUNG
                  </legend>

                  <div className="mb-4">
                    <label
                      htmlFor="store-name"
                      className="mb-2 block text-[11px] font-bold tracking-wide text-gray-900"
                    >
                      NAMA BISNIS / WARUNG
                    </label>

                    <input
                      type="text"
                      id="store-name"
                      placeholder="Contoh: Warung Bu Dhiesna"
                      className="w-full rounded-md border border-gray-300 px-3.5 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-600"
                    />
                  </div>

                  <div className="mb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <label
                        htmlFor="business-category"
                        className="text-[11px] font-bold tracking-wide text-gray-900"
                      >
                        KATEGORI / JENIS BISNIS
                      </label>

                      <span className="text-xs text-gray-500">
                        Pilih salah satu
                      </span>
                    </div>

                    <select
                      id="business-category"
                      defaultValue=""
                      className="w-full rounded-md border border-gray-300 bg-white px-3.5 py-3 text-sm outline-none focus:border-blue-600"
                    >
                      <option value="">-- Pilih Kategori Usaha --</option>

                      {categories.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>

                    <p className="mt-2 flex items-start gap-1.5 text-xs leading-relaxed text-gray-500">
                      <span>ⓘ</span>
                      Catatan jenis usaha membantu kami menyesuaikan pengaturan
                      menu dan struk warung Anda.
                    </p>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="store-address"
                      className="mb-2 block text-[11px] font-bold tracking-wide text-gray-900"
                    >
                      ALAMAT LENGKAP BISNIS
                    </label>

                    <textarea
                      id="store-address"
                      rows={3}
                      maxLength={200}
                      placeholder="Jl. Melati No. 12, Kel. Menteng, Jakarta Pusat"
                      className="w-full resize-y rounded-md border border-gray-300 px-3.5 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-600"
                    />

                    <p className="mt-1 text-right text-[11px] text-gray-400">
                      Maksimal 200 karakter
                    </p>
                  </div>
                </fieldset>

                {/* Keamanan Akun */}
                <fieldset className="mb-6">
                  <legend className="mb-4 w-full border-b border-gray-100 pb-3 text-xs font-bold tracking-wide text-gray-900">
                    <span className="mr-2">♙</span>
                    3. KEAMANAN AKUN
                  </legend>

                  {/* Password */}
                  <div className="mb-5">
                    <div className="mb-2 flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="text-[11px] font-bold tracking-wide text-gray-900"
                      >
                        KATA SANDI
                      </label>

                      <span className="text-xs text-gray-500">
                        Min. 8 karakter
                      </span>
                    </div>

                    <input
                      type="password"
                      id="password"
                      placeholder="Minimal 8 karakter"
                      className="w-full rounded-md border border-gray-300 px-3.5 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-600"
                    />
                  </div>

                  {/* Confirm Password */}
                  <div className="mb-4">
                    <label
                      htmlFor="confirm-password"
                      className="mb-2 block text-[11px] font-bold tracking-wide text-gray-900"
                    >
                      KONFIRMASI KATA SANDI
                    </label>

                    <input
                      type="password"
                      id="confirm-password"
                      placeholder="Ulangi kata sandi"
                      className="w-full rounded-md border border-gray-300 px-3.5 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-600"
                    />

                    <p className="mt-2 text-xs leading-relaxed text-gray-500">
                      ⓘ Pastikan kata sandi cocok dan mudah diingat.
                    </p>
                  </div>
                </fieldset>

                {/* Terms */}
                <p className="my-5 text-xs leading-relaxed text-gray-500">
                  Dengan mendaftar, Anda menyetujui Ketentuan Layanan Kasir dan
                  Kebijakan Privasi data finansial UMKM Warung.
                </p>

                {/* Submit */}
                <Link
                  to="/login"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-[#1d70f5] px-3 py-3 text-[15px] font-semibold text-white transition hover:bg-[#1a5ecf]"
                >
                  Daftar Akun & Bisnis Baru <span>→</span>
                </Link>

                <div className="relative my-6 text-center">
                  <div className="absolute top-1/2 w-full border-t border-gray-100" />

                  <span className="relative bg-white px-3 text-[11px] font-bold tracking-wide text-gray-400">
                    SUDAH TERDAFTAR?
                  </span>
                </div>

                <p className="text-center text-sm text-gray-700">
                  Sudah punya akun?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-gray-900 underline hover:text-blue-600"
                  >
                    Masuk ke Login
                  </Link>
                </p>
              </form>
            </section>

            {/* Promo Sidebar */}
            <aside className="rounded-xl border border-gray-200 bg-white p-4 text-center">
              <img
                src={momoMasak}
                alt="Momo Cooking"
                className="mb-4 h-64 w-full rounded-lg object-cover"
              />

              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-bold tracking-wide text-blue-600">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
                KELOLA WARUNG MANDIRI
              </span>

              <h2 className="mb-2 text-base font-bold leading-snug text-gray-900">
                Kelola Pesanan & Kasir Lebih Praktis
              </h2>

              <p className="px-1 text-xs leading-relaxed text-gray-500">
                Sistem pencatatan transaksi kasir, stok bahan, dan rekapan omzet
                harian ramah pemilik usaha kecil & menengah.
              </p>

              {/* Static Frontend Stats */}
              <div className="mt-5 grid grid-cols-2 gap-2.5 border-t border-gray-100 pt-4">
                <div className="rounded-lg border border-gray-200 bg-gray-50 px-2 py-3">
                  <span className="block text-lg font-bold text-gray-900">
                    30+
                  </span>

                  <span className="text-[10px] text-gray-500">
                    Pengguna Terdaftar
                  </span>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 px-2 py-3">
                  <span className="block text-lg font-bold text-gray-900">
                    100+
                  </span>

                  <span className="text-[10px] text-gray-500">
                    Resep Tersedia
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
