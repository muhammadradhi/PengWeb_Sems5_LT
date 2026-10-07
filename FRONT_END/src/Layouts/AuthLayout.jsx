import Navbar from "../Components/Navbar";

const AuthLayout = ({
  children,
  showLogin,
  mainClassName = "flex flex-col items-start px-12 py-14 border border-[#C1C8C1] rounded-md",
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar showLogin={showLogin} />

      <section className="flex flex-1 items-center justify-center">
        <main className={mainClassName}>{children}</main>
      </section>
    </div>
  );
};

export default AuthLayout;
