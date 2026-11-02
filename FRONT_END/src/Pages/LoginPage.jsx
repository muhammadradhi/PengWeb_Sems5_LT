import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../Components/Molecules/FormInput";
import Button from "../Components/Atoms/Button";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
      {/* Navbar */}
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

      {/* Login Container */}
      <main className="flex flex-1 items-center justify-center px-5 py-10">
        <div className="w-full max-w-[470px] rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8 md:p-10">
          {/* Header */}
          <div className="mb-8">
            <h1 className="mb-2 text-[22px] font-bold tracking-tight text-gray-900 sm:text-[26px]">
              Selamat datang kembali.
            </h1>

            <p className="text-[15px] text-gray-500">
              Masuk ke panel pengelolaan warung Anda.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/dashboard");
            }}
          >
            {/* Email */}
            <FormInput
              label="EMAIL BISNIS"
              hint="Wajib"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@warunganda.com"
            />

            {/* Password */}
            <div className="mb-5">
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs font-bold tracking-wide text-gray-900"
                >
                  KATA SANDI
                </label>

                <button
                  type="button"
                  onClick={() => navigate("/forgot-password")}
                  className="text-[13px] font-medium text-gray-700 hover:underline"
                >
                  Lupa sandi?
                </button>
              </div>

              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-3.5 py-3 pr-20 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-[13px] font-medium text-gray-700 hover:text-gray-900"
                >
                  {showPassword ? "Sembunyi" : "Lihat"}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <Button type="submit" className="mt-2 w-full py-3 text-[15px]">
              Login <span aria-hidden="true">&rarr;</span>
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-8 border-t border-gray-100 pt-6 text-center">
            <p className="text-sm text-gray-700">
              Belum punya akun?{" "}
              <Link
                to="/register"
                className="font-medium text-gray-900 underline hover:text-blue-600"
              >
                Daftar sekarang
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
