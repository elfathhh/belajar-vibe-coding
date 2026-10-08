# Issue: Setup Proyek Baru (Bun + ElysiaJS + Drizzle + MySQL)

## Deskripsi
Inisialisasi proyek backend baru menggunakan runtime **Bun** dengan framework **ElysiaJS**, ORM **Drizzle**, dan database **MySQL**. Issue ini berfokus pada kerangka dasar dan integrasi dependensi inti secara modular.

---

## 1. Lingkup Pekerjaan (Scope)

- Inisialisasi repositori/proyek berbasis Bun.
- Pemasangan dependensi inti:
  - Framework: `elysia`
  - ORM: `drizzle-orm`, `drizzle-kit`
  - Driver Database: MySQL client (`mysql2`)
- Konfigurasi environment variable untuk koneksi database MySQL.
- Setup konfigurasi Drizzle (`drizzle.config.ts`) dan inisialisasi schema database.
- Pembuatan entry point server ElysiaJS dengan basic health-check route.
- Penyusunan script workflow di `package.json` untuk mode development dan database migration.

---

## 2. Tahapan Pengerjaan (High-Level Steps)

### Tahap 1: Inisialisasi Proyek & Dependensi
- Jalankan inisialisasi proyek menggunakan Bun runtime.
- Install paket ElysiaJS dan dependensi database (Drizzle ORM & driver MySQL).
- Tambahkan plugin pendukung yang diperlukan (seperti `@elysiajs/cors` atau `@elysiajs/swagger` jika relevan).

### Tahap 2: Struktur Proyek
- Siapkan struktur direktori yang rapi dan terorganisir, misalnya:
  - `src/` (Source code utama)
  - `src/db/` (Koneksi database dan schema Drizzle)
  - `src/routes/` / `src/modules/` (Route handlers dan business logic)

### Tahap 3: Konfigurasi Database & ORM
- Siapkan file `.env` dan `.env.example` untuk kredensial MySQL (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_PORT`).
- Buat modul koneksi database menggunakan driver MySQL dan instance Drizzle.
- Buat konfigurasi Drizzle Kit (`drizzle.config.ts`) untuk kebutuhan migrasi schema.
- Buat schema dasar (sample table) untuk menguji validitas mapping tabel.

### Tahap 4: Inisialisasi Server Elysia
- Buat server entry point (`src/index.ts`).
- Daftarkan endpoint health check (misal: `GET /` atau `GET /health`) yang memverifikasi respon server dan konektivitas database.
- Pastikan server dapat berjalan lancar menggunakan `bun run`.

### Tahap 5: Otomasi Script & Developer Experience
- Konfigurasikan script di `package.json`:
  - `dev`: Menjalankan server dalam mode hot reload (`bun --watch`).
  - `db:generate`: Menghasilkan file migrasi Drizzle.
  - `db:migrate` / `db:push`: Menerapkan perubahan schema ke database MySQL.
  - `db:studio`: Menjalankan Drizzle Studio (opsional untuk inspeksi GUI).

---

## 3. Kriteria Penyelesaian (Definition of Done)

- [ ] Proyek berhasil diinisialisasi dengan Bun dan semua dependensi terpasang tanpa konflik.
- [ ] Server ElysiaJS berjalan dengan baik dan mengembalikan response pada endpoint health check.
- [ ] Drizzle ORM terhubung ke MySQL dan perintah migrasi/generasi schema dapat dijalankan tanpa error.
- [ ] Dokumentasi singkat (`README.md`) tersedia yang mencakup cara setup `.env` dan perintah menjalankan server.
