const TabPesanan = ({ label, jumlah, aktif, onClick }) => {
  let warnaTab = "border-transparent text-gray-700 hover:text-gray-900";
  let warnaAngka = "bg-gray-100 text-gray-600";

  if (aktif) {
    warnaTab = "border-[#2186ff] text-[#2186ff]";
    warnaAngka = "bg-[#2186ff] text-white";
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex shrink-0 items-center gap-2 border-b-2 px-4 pb-3 text-base font-medium sm:text-lg ${warnaTab}`}
    >
      {label}
      <span className={`rounded px-1.5 py-0.5 text-xs font-semibold ${warnaAngka}`}>
        {jumlah}
      </span>
    </button>
  );
};

export default TabPesanan;
