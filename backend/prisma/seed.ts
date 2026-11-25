// Data awal untuk tabel menu. Jalankan dengan: npx prisma db seed
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const menuAwal = [
  {
    nama: 'Nasi Goreng Spesial',
    harga: 18000,
    stok: 25,
    kategori: 'Makanan',
    deskripsi: 'Nasi goreng telur, ayam suwir, kerupuk.',
  },
  {
    nama: 'Mie Ayam Bakso',
    harga: 15000,
    stok: 20,
    kategori: 'Makanan',
    deskripsi: 'Mie ayam dengan 2 butir bakso sapi.',
  },
  {
    nama: 'Ayam Penyet',
    harga: 20000,
    stok: 15,
    kategori: 'Makanan',
    deskripsi: 'Ayam goreng penyet sambal bawang + lalapan.',
  },
  {
    nama: 'Es Teh Manis',
    harga: 4000,
    stok: 50,
    kategori: 'Minuman',
    deskripsi: 'Teh melati dingin.',
  },
  {
    nama: 'Es Jeruk',
    harga: 6000,
    stok: 30,
    kategori: 'Minuman',
    deskripsi: 'Jeruk peras segar.',
  },
  {
    nama: 'Pisang Goreng',
    harga: 2000,
    stok: 4,
    kategori: 'Camilan',
    deskripsi: 'Pisang kepok goreng tepung.',
  },
  {
    nama: 'Tahu Isi',
    harga: 2000,
    stok: 0,
    kategori: 'Camilan',
    deskripsi: 'Tahu isi sayur, cocok dengan cabai rawit.',
  },
  {
    nama: 'Beras Premium 5 kg',
    harga: 75000,
    stok: 8,
    kategori: 'Bahan Baku',
    deskripsi: null,
  },
];

async function main() {
  await prisma.menu.deleteMany();
  await prisma.menu.createMany({ data: menuAwal });
  console.log(`Seed selesai: ${menuAwal.length} menu ditambahkan.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
