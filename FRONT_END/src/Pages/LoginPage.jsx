import LoginForm from "../Components/LoginForm";
import AuthWelcome from "../Components/AuthWelcome";
import AuthLayout from "../Layouts/AuthLayout";
import Button from "../Components/MiniComponents/ButtonsLink";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <AuthLayout showLogin={false}>
      <AuthWelcome
        props={{
          h1: "Selamat Datang Kembali.",
          content: "Masuk ke panel pengelolaan warung Anda.",
        }}
      />

      <LoginForm />

      <Button
        props={{
          text: "Login",
          type: "primaryLogin",
          to: "/dashboard",
        }}
      />

      <p className="text-sm text-font-3 self-center mt-9">
        Belum punya akun?{" "}
        <Link to="/register" className="hover:underline text-font-1">
          Daftar Sekarang
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
