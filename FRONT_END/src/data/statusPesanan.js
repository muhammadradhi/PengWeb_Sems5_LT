const statusPesanan = {
  Baru: {
    tab: "Pesanan Baru",
    label: "Menunggu Diproses",
    warna: "bg-[#f68048] text-white",
    tombol: "Terima Pesanan",
    tombolDetail: "Kerjakan Pesanan",
    judulInfo: "Menunggu Diproses",
    teksInfo: "Pesanan baru masuk dari pelanggan dan menunggu persetujuan mulai masak di dapur.",
    ikonInfo: "hourglass-outline",
  },
  Diproses: {
    tab: "Sedang Diproses",
    label: "Sedang Diproses",
    warna: "bg-amber-100 text-amber-800",
    tombol: "Tandai Siap",
    tombolDetail: "Selesai Dimasak, Siap Diambil",
    judulInfo: "Sedang Dimasak di Dapur",
    teksInfo: "Pesanan sedang disiapkan oleh dapur. Tandai siap setelah makanan selesai dikemas.",
    ikonInfo: "restaurant-outline",
  },
  Siap: {
    tab: "Siap Diambil",
    label: "Siap Diambil",
    warna: "bg-[#2186ff] text-white",
    tombol: "Serahkan & Selesaikan",
    tombolDetail: "Pesanan Diterima Pelanggan, Selesaikan Pesanan",
    judulInfo: "Makanan Siap di Pick-up Counter",
    teksInfo: "Makanan telah selesai dimasak dan dikemas rapi di meja kasir. Hubungi nama pemesan saat mendekati kasir.",
    ikonInfo: "bag-handle-outline",
  },
  Selesai: {
    tab: "Selesai",
    label: "Selesai & Lunas",
    warna: "bg-[#2186ff] text-white",
    tombol: "",
    tombolDetail: "",
    judulInfo: "Pesanan Sukses & Telah Diambil",
    teksInfo: "Pesanan telah diserahkan langsung ke pelanggan.",
    ikonInfo: "checkmark-circle-outline",
  },
};

export default statusPesanan;
