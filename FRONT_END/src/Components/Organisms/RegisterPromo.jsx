const RegisterPromo = ({ gambar, judul, deskripsi, statistik }) => {
  return (
    <aside className="rounded-xl border border-gray-200 bg-white p-4 text-center">
      <img
        src={gambar}
        alt="Momo Cooking"
        className="mb-4 h-64 w-full rounded-lg object-cover"
      />

      <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-bold tracking-wide text-blue-600">
        <ion-icon name="desktop-outline" />
        KELOLA WARUNG MANDIRI
      </span>

      <h2 className="mb-2 text-base font-bold leading-snug text-gray-900">
        {judul}
      </h2>

      <p className="px-1 text-xs leading-relaxed text-gray-500">{deskripsi}</p>

      <div className="mt-5 grid grid-cols-2 gap-2.5 border-t border-gray-100 pt-4">
        {statistik.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-gray-200 bg-gray-50 px-2 py-3"
          >
            <span className="block text-lg font-bold text-gray-900">
              {item.angka}
            </span>
            <span className="text-[10px] text-gray-500">{item.label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default RegisterPromo;
