import AuthLayout from "../Layouts/AuthLayout";
import Text1 from "../Components/MiniComponents/Text1";
import Input from "../Components/MiniComponents/input";
import Button from "../Components/MiniComponents/ButtonsLink";
import { Link } from "react-router-dom";
import momoMasak from "../assets/momo masak.png";

const Register = () => {
  return (
    <AuthLayout showLogin={true} mainClassName="w-full max-w-6xl">
      <div className="flex gap-8 px-8 py-8 w-full">
        {/* FORM */}
        <div className="flex-1 min-w-0 border border-[#C1C8C1] rounded-md px-8 py-8">
          <div className="flex flex-row gap-2 mb-3">
            <Text1 props={{ text: "PENDAFTARAN PORTAL" }} />
            <Text1 props={{ text: "|" }} />
            <Text1 props={{ text: "KHUSUS PEMILIK & WARUNG" }} />
          </div>
          <h1 className="text-2xl font-bold">Buat akun owner & warung.</h1>
          <p className="text-[14px] text-font-3 mb-5">
            Daftarkan identitas pemilik dan profil usaha Anda untuk memulai
            pengelolaan <br />
            kasir terpadu.
          </p>
          <section class="registration-form">
            <div className="flex flex-row gap-2 mb-3">
              <Text1
                props={{ text: "ICON" }}
                className={"text-font-1 tracking-wider"}
              />
              <Text1
                props={{
                  text: "1.INFORMASI PEMILIK",
                }}
                className={"text-font-1 tracking-wider"}
              />
            </div>

            <Input
              props={{
                text: "NAMA LENGKAP OWNER",
                type: "text",
                id: "name",
                name: "name",
                placeholder: "Budi Santoso",
              }}
              classNameLabel="text-sm font-semibold"
            />

            <Input
              props={{
                text: "EMAIL BISNIS",
                type: "email",
                id: "email",
                name: "email",
                placeholder: "budi@warunganda.com",
              }}
              classNameLabel="text-sm font-semibold"
            />
          </section>
          <section class="data-form">
            <div className="flex flex-row gap-2 mb-6">
              <Text1
                props={{ text: "ICON" }}
                className={"text-font-1 tracking-wider"}
              />
              <Text1
                props={{
                  text: "2. DETAIL BISNIS / WARUNG",
                }}
                className={"text-font-1 tracking-wider"}
              />
            </div>

            <Input
              props={{
                text: "NAMA BISNIS / WARUNG",
                type: "text",
                id: "name",
                name: "name",
                placeholder: "Contoh: Warung Bu Dhiesna / Kopi Kenangan",
              }}
              classNameLabel="text-sm font-semibold"
            />

            <Input
              props={{
                text: "KATEGORI / JENIS BISNIS",
                type: "email",
                id: "email",
                name: "email",
                placeholder: "budi@warunganda.com",
              }}
              classNameLabel="text-sm font-semibold"
            />

            <Input
              props={{
                text: "ALAMAT LENGKAP BISNIS",
                type: "textarea",
                id: "alamat",
                name: "alamat",
                placeholder: "Jl. Melati No. 12, Kel. Menteng, Jakarta Pusat",
              }}
              classNameLabel="text-sm font-semibold"
            />
          </section>

          <section class="security-form">
            <div className="flex flex-row gap-2 mb-3">
              <Text1
                props={{ text: "ICON" }}
                className={"text-font-1 tracking-wider"}
              />
              <Text1
                props={{
                  text: "3. KEAMANAN AKUN",
                }}
                className={"text-font-1 tracking-wider"}
              />
            </div>

            <Input
              props={{
                text: "KATA SANDI",
                type: "password",
                id: "password",
                name: "password",
                placeholder: "Minimal 8 Karakter",
              }}
              classNameLabel="text-sm font-semibold"
            />
            <Input
              props={{
                text: "KONFIRMASI KATA SANDI",
                type: "password",
                id: "password",
                name: "password",
                placeholder: "Ulangi Kata sandi",
              }}
              classNameLabel="text-sm font-semibold"
            />
          </section>

          <section className="mb-6">
            <div className="flex flex-row items-center gap-1.5 mb-2">
              <p>ICON</p>
              <Text1
                props={{
                  text: "Pastikan kata sandi cocok dan mudah diingat.",
                }}
                className={"text-font-3 tracking-wider text-[12px]"}
              />
            </div>
            <Text1
              props={{
                text: "Dengan mendaftar, Anda menyetujui Ketentuan Layanan Kasir dan Kebijakan Privasi data finansial UMKM Warung.",
              }}
              className={"text-font-3 tracking-wider text-[12px]"}
            />
          </section>

          <Button
            props={{
              text: "Daftar Akun & Bisnis Baru",
              type: "primaryLogin",
              to: "/login",
            }}
          />

          <p className="text-sm text-font-3 text-center mt-9">
            Sudah punya akun?{" "}
            <Link to="/login" className="hover:underline text-font-1">
              Login Sekarang
            </Link>
          </p>
        </div>

        {/* CARD KANAN */}
        <div className="w-[320px] shrink-0 h-fit p-3 border border-[#C1C8C1] rounded-md">
          <div className="flex flex-col items-center">
            {/* FOTO */}
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src={momoMasak}
                alt="Momo sedang memasak"
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* BADGE */}
            <div className="flex items-center justify-center gap-1.5 px-3 py-1 mt-4 bg-primary rounded-full">
              <p className="text-[10px] font-semibold text-white">ICON</p>

              <p className="text-[10px] font-semibold text-white tracking-wide">
                KELOLA WARUNG MANDIRI
              </p>
            </div>

            {/* TEXT */}
            <h2 className="text-base font-bold text-center mt-3">
              Kelola Pesanan & Kasir Lebih Praktis
            </h2>

            <p className="text-[12px] leading-5 text-font-3 text-center mt-1 px-1">
              Sistem pencatatan transaksi kasir, stok bahan, dan rekap omzet
              harian ramah pemilik usaha kecil & menengah.
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
