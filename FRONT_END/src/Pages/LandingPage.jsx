import Navbar from "../Components/Navbar.jsx";
import HeroLandingPage from "../Components/Hero.jsx";
function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex flex-1">
        <HeroLandingPage />
      </main>
    </div>
  );
}

export default LandingPage;
