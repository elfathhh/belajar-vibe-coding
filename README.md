# Belajar Vibe Coding - Backend API

Proyek backend baru berbasis runtime **Bun**, framework **ElysiaJS**, ORM **Drizzle**, dan database **MySQL**.

## 🛠️ Stack Teknologi

- **Runtime**: [Bun](https://bun.sh/)
- **Framework**: [ElysiaJS](https://elysiajs.com/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Database**: MySQL
- **Plugins**: `@elysiajs/cors`, `@elysiajs/swagger`

---

## 📂 Struktur Proyek

```
.
├── drizzle.config.ts    # Konfigurasi Drizzle Kit
├── package.json         # Dependensi dan script project
├── .env                 # Environment variables
├── .env.example         # Template environment variables
└── src/
    ├── index.ts         # Main server entry point
    ├── db/
    │   ├── index.ts     # Koneksi MySQL & Instance Drizzle
    │   └── schema.ts    # Schema tabel database
    └── routes/
        └── health.ts    # Route health check
```

---

## 🚀 Panduan Setup & Menjalankan Project

### 1. Prasyarat
Pastikan [Bun](https://bun.sh/) dan **MySQL** telah terinstall di sistem Anda.

### 2. Konfigurasi Environment (`.env`)
Salin file `.env.example` ke `.env` dan sesuaikan kredensial MySQL Anda:

```bash
cp .env.example .env
```

Isi variabel berikut:
```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=belajar_vibe_coding
```

### 3. Install Dependensi
```bash
bun install
```

### 4. Jalankan Server (Development Mode)
```bash
bun run dev
```
Server akan berjalan secara otomatis pada: `http://localhost:3000`

- **Root Endpoint**: `http://localhost:3000/`
- **Health Check**: `http://localhost:3000/health`
- **Swagger Documentation**: `http://localhost:3000/swagger`

---

## 🗄️ Perintah Database (Drizzle ORM)

- **Generasi file migrasi**:
  ```bash
  bun run db:generate
  ```
- **Jalankan migrasi ke database**:
  ```bash
  bun run db:migrate
  ```
- **Push schema langsung ke database**:
  ```bash
  bun run db:push
  ```
- **Buka Drizzle Studio (GUI)**:
  ```bash
  bun run db:studio
  ```
