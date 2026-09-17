# AGENTS.md

Panduan ini merupakan sumber referensi konteks produk, aturan bisnis, batasan scope, serta aturan development bagi AI coding agent yang mengembangkan project ini.

Sumber utama requirement produk adalah `srs.docx` pada direktori yang sama dengan dokumen ini. Dokumen ini tidak dimaksudkan untuk menambah atau mengubah requirement, melainkan menegaskan kembali requirement yang telah ditetapkan dalam SRS agar implementasi tetap konsisten.

---

## 1. Project Overview

Project ini adalah platform web pemesanan makanan untuk **satu UMKM (single-vendor)** yang diakses oleh pelanggan melalui **QR Code**. Platform menggantikan proses pemesanan yang selama ini dilakukan secara manual melalui WhatsApp, dengan konsep pengalaman pemesanan seperti restoran cepat saji yang menyediakan QR ordering.

---

## 2. Product Purpose

Tujuan utama sistem adalah mendigitalisasi proses pemesanan makanan UMKM agar pelanggan dapat memesan langsung dari perangkat mereka melalui QR Code tanpa harus menghubungi penjual secara manual. Masalah yang diselesaikan:

- Menghilangkan proses pemesanan manual melalui WhatsApp.
- Memudahkan pelanggan dalam melihat menu, memilih menu, mengatur jumlah, menambahkan kustomisasi/catatan, memasukkan alamat pengiriman, memilih metode pembayaran, dan memantau status pesanan.
- Memudahkan owner dalam mengelola menu, memproses pesanan, dan mengatur status operasional UMKM.

---

## 3. Actors

### Pengguna / Pelanggan

Pengguna umum dengan tingkat pengalaman teknis yang beragam. Platform harus dapat digunakan tanpa pelatihan khusus. Pelanggan:

- Mengakses platform melalui QR Code.
- Melihat menu, memesan, membayar dengan QRIS atau Cash, dan memantau status pesanan.
- Hanya memiliki akses terhadap data pesanan miliknya sendiri.

### Owner UMKM

Pemilik usaha penyedia makanan dengan kemampuan dasar mengoperasikan aplikasi. Owner:

- Mengelola katalog menu dan status ketersediaan menu.
- Menerima notifikasi pesanan baru, melihat detail pesanan, dan memajukan status pesanan.
- Mengatur status operasional UMKM (buka/tutup).

---

## 4. Core Features

### Fitur Pengguna / Pelanggan

- **Menu**: melihat daftar menu beserta nama, harga, detail/deskripsi, dan status ketersediaan menu.
- **Jumlah pesanan (+/-)**: mengatur jumlah pesanan menggunakan tombol tambah (+) dan minus (-).
- **Custom/catatan**: menambahkan kustomisasi/catatan pada menu yang dipesan dan tercatat sebagai bagian dari detail pesanan.
- **Alamat manual**: memasukkan alamat pengiriman secara manual melalui input teks.
- **Total harga**: melihat total harga pesanan berdasarkan menu dan jumlah yang dipilih.
- **QRIS**: memilih metode pembayaran QRIS; melihat gambar QRIS milik UMKM dan mengunggah foto bukti transfer.
- **Cash**: memilih metode pembayaran Cash tanpa unggahan bukti pembayaran.
- **Upload bukti transfer QRIS**: foto bukti transfer disubmit bersama pesanan.
- **Status pesanan**: memantau status pesanan (Dimasak, OTW, Selesai).

### Fitur Owner UMKM

- **Manajemen menu**: menambah, mengubah, dan menghapus/menonaktifkan menu serta mengatur nama menu, harga, dan detail/deskripsi menu.
- **Status Ready/Habis**: mengatur status ketersediaan setiap menu menjadi Ready atau Habis.
- **Notifikasi pesanan**: menerima notifikasi ketika terdapat pesanan baru.
- **Pengelolaan pesanan**: melihat detail pesanan yang masuk dan memajukan status pesanan sesuai siklus hidup.
- **Status operasional UMKM**: mengatur status operasional UMKM (buka atau tutup) yang ditampilkan kepada pengguna.

---

## 5. Customer Flow

Alur lengkap pelanggan dari mengakses sistem hingga pesanan selesai:

1. Pelanggan membuka web pemesanan melalui **QR Code**.
2. Sistem menampilkan daftar menu beserta nama, harga, detail/deskripsi, dan status ketersediaan menu.
3. Pelanggan memilih menu dan mengatur jumlah menggunakan tombol (+) dan (-). Menu dengan status **Habis** tidak dapat ditambahkan ke pesanan.
4. Pelanggan menambahkan kustomisasi/catatan pada menu yang dipesan.
5. Pelanggan memasukkan alamat pengiriman secara manual melalui input teks.
6. Sistem menampilkan ringkasan pesanan beserta **total harga**.
7. Pelanggan memilih metode pembayaran **QRIS** atau **Cash**.
8. Pelanggan men-submit pesanan beserta foto bukti transfer (untuk QRIS) atau tanpa bukti pembayaran (untuk Cash).
9. Pelanggan memantau status pesanan hingga berstatus **Selesai**.

---

## 6. Owner Flow

Alur owner dalam mengelola menu, menerima pesanan, memproses pesanan, mengubah status, dan mengatur status operasional:

1. Owner membuka halaman pengelolaan menu.
2. Owner menambah menu baru atau mengelola menu yang sudah ada; dapat mengubah nama, harga, dan detail/deskripsi, menghapus/menonaktifkan menu, serta mengatur status ketersediaan menjadi **Ready** atau **Habis**.
3. Owner menerima notifikasi ketika terdapat pesanan baru.
4. Owner membuka detail pesanan dan melihat menu yang dipesan beserta jumlah, kustomisasi/catatan, alamat pengiriman, metode pembayaran, foto bukti transfer (apabila metode pembayaran QRIS), dan status pesanan.
5. Owner memajukan status pesanan sesuai siklus hidup **Dimasak → OTW → Selesai**.
6. Owner mengatur status operasional UMKM menjadi **buka** atau **tutup**.

---

## 7. Payment Flow

### QRIS

1. Pelanggan memilih metode pembayaran **QRIS**.
2. Sistem menampilkan gambar **QRIS** milik UMKM.
3. Pelanggan melakukan transfer pembayaran.
4. Pelanggan mengunggah **foto bukti transfer**.
5. Pelanggan men-submit pesanan beserta foto bukti transfer.
6. Foto bukti transfer menjadi bagian dari detail pesanan yang dapat dilihat owner.

### Cash

1. Pelanggan memilih metode pembayaran **Cash**.
2. Pelanggan men-submit pesanan **tanpa unggahan bukti pembayaran**.
3. Pembayaran dilakukan secara tunai **ketika pesanan sampai** kepada pelanggan.

---

## 8. Order Lifecycle

Status pesanan **HANYA** tiga status berikut, dengan urutan yang tetap:

**Dimasak → OTW → Selesai**

Aturan yang berlaku:

- Status hanya boleh bergerak **maju** sesuai siklus hidup; tidak boleh mundur (misalnya dari OTW kembali ke Dimasak, atau dari Selesai ke status sebelumnya).
- Platform tidak mengenal status pesanan selain Dimasak, OTW, dan Selesai.
- Jangan menambahkan status lain.

---

## 9. Menu Availability

Status menu **HANYA** dua status berikut:

- **Ready** — menu dapat dipesan oleh pelanggan.
- **Habis** — menu tetap dapat ditampilkan dengan penanda yang jelas, tetapi **tidak dapat ditambahkan** ke pesanan.

Aturan yang berlaku:

- Owner dapat mengubah status ketersediaan menu menjadi Ready atau Habis.
- Status ketersediaan menu harus terlihat jelas oleh pelanggan.
- Menu dengan status Habis tidak dapat digunakan untuk pesanan baru.

---

## 10. Business Rules

Aturan bisnis penting yang harus dipenuhi sistem (bersumber dari SRS):

- **Single-vendor**: sistem hanya melayani satu UMKM.
- **Status pesanan**: setiap pesanan harus memiliki status; status hanya mengikuti siklus hidup **Dimasak → OTW → Selesai** dan hanya dapat berjalan maju.
- **Status menu**: menu dengan status **Habis** tidak dapat dipesan; menu berstatus **Ready** dapat dipesan.
- **Metode pembayaran**: metode pembayaran yang tersedia hanya **QRIS** dan **Cash**.
- **Bukti transfer QRIS**: pembayaran QRIS mensyaratkan pelanggan mengunggah foto bukti transfer yang disubmit bersama pesanan.
- **Alamat manual**: alamat pengiriman dimasukkan secara manual oleh pelanggan melalui input teks; sistem tidak menggunakan GPS atau live location.
- **Integritas data transaksi**: riwayat transaksi harus tetap konsisten, tidak berubah secara tidak sah, dan harus tetap merepresentasikan transaksi yang telah terjadi.
- **Hak akses data**: pelanggan hanya dapat mengakses data pesanan miliknya sendiri; owner memiliki kewenangan mengelola menu, memproses pesanan, dan mengatur status operasional UMKM.

---

## 11. Scope

Fitur yang termasuk dalam versi project ini:

- Pemesanan makanan melalui web yang diakses via QR Code.
- Melihat daftar menu, memilih menu, mengatur jumlah pesanan (+/-).
- Kustomisasi/catatan pada menu.
- Input alamat pengiriman secara manual.
- Penghitungan dan penampilan total harga.
- Pembayaran **QRIS** (dengan unggah foto bukti transfer) dan **Cash**.
- Pencatatan pesanan sebagai bagian dari transaksi.
- Pemantauan status pesanan (Dimasak, OTW, Selesai).
- Manajemen menu oleh owner (tambah, ubah, hapus/nonaktifkan).
- Pengaturan status ketersediaan menu (Ready/Habis).
- Notifikasi pesanan baru kepada owner.
- Detail pesanan yang dapat dilihat owner.
- Pemrosesan pesanan oleh owner.
- Pengaturan status operasional UMKM (buka/tutup).

---

## 12. Out of Scope

Project ini **TIDAK** mencakup fitur berikut dan batasan ini tidak boleh dihapus atau dikurangi:

- Marketplace multi-vendor.
- Recommendation system.
- Machine learning.
- Personalization.
- Aplikasi delivery dan manajemen driver.
- Pelacakan posisi pengiriman berbasis GPS / live tracking.
- Chat antara pengguna dan owner.
- AI chatbot.
- Loyalty point dan sistem poin.
- Voucher dan promo.
- Rating/review.
- Payment gateway selain QRIS dan Cash.

---

## 13. Technical Decision Policy

Jangan mengunci atau mengasumsikan framework, database, authentication mechanism, payment gateway, notification mechanism, hosting, atau teknologi lain yang belum ditentukan dalam SRS.

Jika terdapat kebutuhan teknis yang belum ditentukan, tandai sebagai **TBD** dan jangan memutuskan sepihak kecuali instruksi dari user menyatakan sebaliknya.

---

## 14. Development Rules

AI coding agent **WAJIB**:

1. Membaca `AGENTS.md` sebelum melakukan perubahan.
2. Membaca dan memahami struktur project sebelum coding.
3. Mengacu pada `srs.docx` untuk requirement produk.
4. Tidak membuat fitur yang tidak diminta.
5. Tidak melakukan feature creep.
6. Tidak mengubah business rules tanpa instruksi.
7. Tidak mengganti requirement dengan asumsi pribadi.
8. Tidak menghapus functionality yang sudah ada tanpa alasan dan persetujuan.
9. Mempertahankan perubahan tetap sesuai scope project.
10. Jika requirement ambigu dan berdampak pada architecture atau behavior, tanyakan terlebih dahulu.
11. Untuk keputusan teknis yang belum ditentukan, pilih solusi yang sederhana dan maintainable hanya setelah kebutuhan teknisnya jelas.
12. Setelah melakukan perubahan, periksa kembali agar implementasi tetap konsisten dengan SRS.

---

## 15. UI/UX Principles

UI harus:

- Clean.
- Minimal.
- Modern.
- Mudah digunakan.
- Fokus pada proses pemesanan.
- Memiliki hierarchy informasi yang jelas.
- Responsive.

Hindari:

- Excessive cards.
- Excessive gradients.
- Glassmorphism.
- Tampilan SaaS dashboard yang berlebihan.
- Elemen dekoratif yang tidak memiliki fungsi.

UI harus terasa seperti platform ordering UMKM yang sederhana dan profesional, bukan template AI/SaaS.

---

## 16. Source of Truth

Gunakan prioritas berikut:

1. Instruksi terbaru dari user.
2. `srs.docx` untuk product requirements.
3. `AGENTS.md` untuk project context dan development rules.
4. Existing source code untuk behavior yang sudah diimplementasikan.

Jika instruksi terbaru user bertentangan dengan dokumentasi lama, ikuti instruksi terbaru user.

---

## 17. Open Questions / TBD

Hal-hal yang memang belum ditentukan dalam SRS — dicatat tanpa mengarang jawabannya:

- Mekanisme authentication/login, baik untuk pelanggan maupun owner.
- Cara pelanggan mengakses/melihat pesanan (mekanisme autentikasi atau identifikasi pesanan).
- Mekanisme dan teknologi notifikasi pesanan baru kepada owner.
- Mekanisme verifikasi bukti pembayaran QRIS.
- Detail struktur kustomisasi/catatan menu.
- Pengaruh status operasional UMKM (buka/tutup) terhadap proses pemesanan, misalnya pembatasan pemesanan ketika UMKM tutup.
- Teknologi/framework yang digunakan.
- Database yang digunakan.
- Deployment/hosting.
- Integrasi dengan penyedia layanan QRIS, komponen notifikasi, dan layanan pengiriman pihak ketiga.

Jangan mengubah TBD menjadi requirement tanpa instruksi.

---

**CATATAN**: Dokumen ini adalah panduan development, bukan sumber requirement baru. Seluruh requirement produk bersumber dari `srs.docx`. Apabila terdapat ketidaksesuaian antara dokumen ini dan `srs.docx`, maka `srs.docx` yang menjadi acuan selama belum ada instruksi terbaru dari user.