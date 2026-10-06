import Navbar from "../Components/Navbar";

const LandingPageLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar showLogin={true} />

      <main className="flex flex-1">{children}</main>
    </div>
  );
};

export default LandingPageLayout;
