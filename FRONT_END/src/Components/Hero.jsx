import Button from "./MiniComponents/ButtonsLink";
const HeroLandingPage = () => {
  return (
    <section className="flex flex-1 items-center justify-center">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-4xl font-bold">
          Kelola warung,
          <br />
          mulai dari sini.
        </h1>

        <p className="text-base text-font-3">
          Masuk untuk mengelola menu dan pesanan, atau daftarkan
          <br />
          akun owner Anda.
        </p>

        <div className="flex gap-4">
          <Button props={{ text: "Masuk", type: "primary", to: "/login" }} />
          <Button
            props={{
              text: "Daftar Akun Baru",
              type: "secondary",
              to: "/register",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroLandingPage;
