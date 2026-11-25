# Warung UMKM — Tubes Pemrograman Web

Aplikasi web untuk membantu warung/UMKM mengelola operasional harian: landing page, login/register, dan dashboard admin untuk memantau pesanan, mengelola **menu & stok**, serta melihat riwayat transaksi.

Proyek dikembangkan bertahap tiap pekan: HTML → CSS → Tailwind → JavaScript/jQuery → React → REST API NestJS → **PostgreSQL + Prisma ORM (Pekan 10)**.

## Struktur Repository

```
Tubes-Pengweb/
├── LandingPage.html / .css     # frontend
├── LoginPage.html / .css
├── RegisterPage.html / .css
├── Dashboard.html / .css
├── assets/
├── backend/                    # REST API NestJS + Prisma
│   ├── prisma/
│   │   ├── schema.prisma       # model Menu
│   │   ├── migrations/         # dibuat oleh `prisma migrate dev`
│   │   └── seed.ts             # data awal
│   ├── src/
│   │   ├── prisma/             # PrismaService + PrismaModule
│   │   └── menu/               # controller, service, DTO
│   └── requests.http           # contoh request untuk uji API
└── docs/
    ├── screenshot/             # screenshot pekan sebelumnya
    └── screenshots/tugas-10/   # screenshot Tugas 10
```

## Backend: REST API + PostgreSQL + Prisma

### Teknologi
- NestJS 11 (TypeScript)
- PostgreSQL 16
- Prisma ORM 6 (`prisma-client-js`)
- class-validator untuk validasi input

### Model Prisma

Entitas utama adalah **Menu**, dengan field yang sama seperti form "Tambah Menu Baru" di dashboard:

```prisma
model Menu {
  id        Int      @id @default(autoincrement())
  nama      String   @db.VarChar(100)
  harga     Int      // Rupiah
  stok      Int      @default(0)
  kategori  String   @db.VarChar(30) // Makanan | Minuman | Camilan | Bahan Baku
  deskripsi String?
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  @@index([kategori])
  @@map("menu")
}
```

### Cara Menjalankan

1. **Siapkan PostgreSQL** dan buat database:
   ```sql
   CREATE DATABASE warung_umkm;
   ```
2. **Install dependency**:
   ```bash
   cd backend
   npm install
   ```
3. **Atur koneksi database**: salin `.env.example` menjadi `.env`, lalu sesuaikan user/password PostgreSQL:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/warung_umkm?schema=public"
   ```
4. **Jalankan migrasi awal** (membuat tabel `menu` dan folder `prisma/migrations`):
   ```bash
   npx prisma migrate dev --name init
   ```
5. **(Opsional) isi data awal**:
   ```bash
   npx prisma db seed
   ```
6. **Jalankan server**:
   ```bash
   npm run start:dev
   ```
   API berjalan di `http://localhost:3000`.

Cek isi tabel lewat `npx prisma studio` (buka `http://localhost:5555`) atau pgAdmin.

### Endpoint

| Method | Endpoint | Keterangan |
|---|---|---|
| GET | `/menu` | Daftar semua menu |
| GET | `/menu/:id` | Detail satu menu |
| POST | `/menu` | Tambah menu |
| PATCH | `/menu/:id` | Ubah data menu |
| PATCH | `/menu/:id/stok` | Tambah/kurangi stok, body `{ "jumlah": -3 }` (stok tidak bisa minus) |
| DELETE | `/menu/:id` | Hapus menu |
| GET | `/menu?kategori=Minuman&cari=es&stokMaks=5` | **Query lanjutan (where):** filter kategori, cari nama, stok maksimal |
| GET | `/menu/statistik` | **Query lanjutan (count/groupBy/aggregate):** total menu, total stok, rata-rata harga, stok habis/menipis, jumlah per kategori |

Contoh body `POST /menu`:
```json
{
  "nama": "Soto Ayam",
  "harga": 17000,
  "stok": 12,
  "kategori": "Makanan",
  "deskripsi": "Soto bening khas Lamongan"
}
```

Contoh respons `GET /menu/statistik`:
```json
{
  "totalMenu": 8,
  "totalStok": 139,
  "rataRataHarga": 18125,
  "stokHabis": 1,
  "stokMenipis": 1,
  "perKategori": [
    { "kategori": "Bahan Baku", "jumlah": 1 },
    { "kategori": "Camilan", "jumlah": 2 },
    { "kategori": "Makanan", "jumlah": 3 },
    { "kategori": "Minuman", "jumlah": 2 }
  ]
}
```

Input yang tidak valid ditolak dengan `400 Bad Request`, dan id yang tidak ada mengembalikan `404 Not Found`. Semua contoh request ada di [`backend/requests.http`](backend/requests.http).

### Dari Array (Pekan 9) ke Prisma (Pekan 10)

`MenuController` tidak berubah. Yang diganti hanya isi `MenuService`: dari array di memori menjadi `PrismaService` yang di-inject lewat constructor.

```ts
// Pekan 9
private menu: Menu[] = [];
findAll() { return this.menu; }

// Pekan 10
constructor(private readonly prisma: PrismaService) {}
findAll() { return this.prisma.menu.findMany(); }
```

`PrismaService` (`src/prisma/prisma.service.ts`) adalah `PrismaClient` yang dijadikan provider NestJS. `PrismaModule` bersifat `@Global()` sehingga bisa dipakai di module mana pun.

Karena data sekarang disimpan di PostgreSQL, data **tetap ada setelah server di-restart**.

## Screenshot Tugas 10

Screenshot disimpan di `docs/screenshots/tugas-10/`.

| # | Tahap | Screenshot |
|---|---|---|
| 1 | Database `warung_umkm` dibuat di PostgreSQL | ![](docs/screenshots/tugas-10/01-create-database.png) |
| 2 | `npx prisma migrate dev --name init` berhasil | ![](docs/screenshots/tugas-10/02-migrate.png) |
| 3 | Tabel `menu` terbentuk (pgAdmin / Prisma Studio) | ![](docs/screenshots/tugas-10/03-tabel-menu.png) |
| 4 | Server NestJS berjalan | ![](docs/screenshots/tugas-10/04-server-jalan.png) |
| 5 | CREATE — `POST /menu` | ![](docs/screenshots/tugas-10/05-create.png) |
| 6 | READ — `GET /menu` dan `GET /menu/:id` | ![](docs/screenshots/tugas-10/06-read.png) |
| 7 | UPDATE — `PATCH /menu/:id` | ![](docs/screenshots/tugas-10/07-update.png) |
| 8 | DELETE — `DELETE /menu/:id` | ![](docs/screenshots/tugas-10/08-delete.png) |
| 9 | Data tetap ada setelah server di-restart | ![](docs/screenshots/tugas-10/09-restart-persisten.png) |
| 10 | Query lanjutan: filter dan `GET /menu/statistik` | ![](docs/screenshots/tugas-10/10-query-lanjutan.png) |
| 11 | Tampilan desktop | ![](docs/screenshots/tugas-10/11-desktop.png) |
| 12 | Tampilan mobile | ![](docs/screenshots/tugas-10/12-mobile.png) |

## Tampilan Frontend (pekan sebelumnya)

| Landing Page | Login | Register | Dashboard |
|---|---|---|---|
| ![](docs/screenshot/SSLandingPage.png) | ![](docs/screenshot/SSLoginPage.png) | ![](docs/screenshot/SSregisterPage.png) | ![](docs/screenshot/SSdashboard.png) |
