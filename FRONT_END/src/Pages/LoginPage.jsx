import LoginForm from "../Components/LoginForm";
import AuthWelcome from "../Components/AuthWelcome";
import AuthLayout from "../Layouts/AuthLayout";
import Button from "../Components/MiniComponents/ButtonsLink";
function LoginPage() {
  return (
    <AuthLayout>
      <AuthWelcome
        props={{
          h1: "Selamat Datang Kembali.",
          content: "Masuk ke panel pengelolaan warung Anda.",
        }}
      />
      <LoginForm />
      <Button
        props={{ text: "Login", type: "primaryLogin", to: "/dashboard" }}
      />
    </AuthLayout>
  );
}

export default LoginPage;
