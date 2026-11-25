# Warung UMKM API

REST API untuk menu & stok Warung UMKM, dibangun dengan NestJS, PostgreSQL, dan Prisma ORM.

```bash
npm install
cp .env.example .env            # sesuaikan DATABASE_URL
npx prisma migrate dev --name init
npx prisma db seed              # opsional
npm run start:dev               # http://localhost:3000/menu
```

Dokumentasi lengkap (endpoint, model, screenshot) ada di [README utama](../README.md).
