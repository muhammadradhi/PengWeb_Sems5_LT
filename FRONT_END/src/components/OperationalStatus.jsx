const OperationalStatus = ({ isOpen, onToggle }) => {
  return (
    <section className="mb-8 flex flex-col gap-5 rounded-lg border border-gray-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#2186ff] text-white">
          <ion-icon name="storefront-outline" className="text-2xl" />
        </div>

        <div>
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <p className="text-xs font-medium tracking-wide text-gray-500 sm:text-sm">
              STATUS OPERASIONAL WARUNG
            </p>

            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold text-white ${
                isOpen ? "bg-blue-500" : "bg-gray-500"
              }`}
            >
              {isOpen ? "BUKA" : "TUTUP"}
            </span>
          </div>

          <p className="text-sm font-semibold text-gray-900 sm:text-base">
            {isOpen
              ? "Warung Buka — Siap Menerima Pesanan"
              : "Warung Tutup — Pesanan Dinonaktifkan"}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onToggle}
        className="inline-flex min-h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50 sm:text-sm"
      >
        <ion-icon name="power-outline" className="text-lg" />
        {isOpen ? "Tutup Warung Sementara" : "Buka Warung Kembali"}
      </button>
    </section>
  );
};

export default OperationalStatus;
