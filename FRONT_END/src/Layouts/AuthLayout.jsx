import Navbar from "../Components/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar showLogin={false} />
      <section className="flex flex-1 items-center justify-center">
        <main className="flex flex-col items-start px-12 py-14 border border-[#C1C8C1] rounded-md">
          {children}
        </main>
      </section>
    </div>
  );
};

export default AuthLayout;
