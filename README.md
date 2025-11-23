# 🎨 Frontend – Aplikasi Data Siswa

Frontend ini dibuat untuk kebutuhan **Uji Kompetensi (UJK) BNSP** program **Pengembangan Web dengan React & Node.js – BBPVP Bekasi**.  
Aplikasi ini terhubung dengan backend CRUD menggunakan **React (Vite)**, **React Router**, **Axios**, dan **Bootstrap**.

---

## 🚀 Teknologi yang Digunakan

- **React + Vite**
- **React Router DOM v6.28.0**
- **Axios v1.6.8**
- **Bootstrap v5.3.3**
- **React Hot Toast v2.4.1**

---

## 📦 Fitur Aplikasi

Frontend ini mendukung:

| Fitur         | Deskripsi                                 |
| ------------- | ----------------------------------------- |
| List Siswa    | Menampilkan semua data siswa dari backend |
| Create Siswa  | Form tambah data siswa                    |
| Edit Siswa    | Update data berdasarkan `id`              |
| Delete Siswa  | Hapus data siswa                          |
| Validasi Form | Input wajib terisi                        |
| Notifikasi    | Menggunakan react-hot-toast               |

Semua operasi CRUD terhubung langsung ke backend Express.

---

## 🗂 Struktur Folder Frontend

```

src/
│── components/
│── pages/
│ ├── Home.jsx
│ ├── SiswaList.jsx
│ ├── SiswaCreate.jsx
│ ├── SiswaEdit.jsx
│── services/
│ └── siswaApi.js
│── App.jsx
│── main.jsx

```

---

## 🛠 Instalasi & Setup

### 1️⃣ Clone Repo

```bash
git clone https://github.com/rizkilabs/siswa-frontend.git
cd siswa-frontend
```

### 2️⃣ Install dependency

```bash
npm install
```

### 3️⃣ Jalankan Aplikasi

```bash
npm run dev
```

Frontend berjalan di:

```
http://localhost:5173
```

---

## 🔗 Koneksi ke Backend

Semua request API menggunakan Axios:
**src/services/siswaApi.js**

```js
const api = axios.create({
  baseURL: "http://localhost:3000/api",
});
```

Jika backend dipindah server/hosting, cukup ubah baseURL saja.

---

## 📡 Endpoint yang Digunakan Frontend

- `GET /api/siswa`
- `GET /api/siswa/:id`
- `POST /api/siswa`
- `PUT /api/siswa/:id`
- `DELETE /api/siswa/:id`

Format response yang digunakan sama dengan backend:

```json
{
  "status": true,
  "data": [...],
  "message": "OK"
}
```

---

## 🧩 Routing Frontend

Diatur melalui **React Router DOM**:

| Route             | Halaman      |
| ----------------- | ------------ |
| `/`               | Home         |
| `/siswa`          | List Siswa   |
| `/siswa/create`   | Tambah Siswa |
| `/siswa/edit/:id` | Edit Siswa   |

---

## 🧪 Fitur Notifikasi

Semua aksi CRUD menggunakan **react-hot-toast**:

```js
toast.success("Data berhasil disimpan");
toast.error("Gagal menyimpan data");
```

---

## 🎨 Tampilan & UI

- Menggunakan **Bootstrap 5**
- Layout sederhana dan responsif
- Card wrapper:

  ```html
  <div class="card card-soft p-3"></div>
  ```

---

## 📘 Catatan Penting

- Edit & Delete menggunakan **ID** sesuai backend (bukan `kodeSiswa` lagi)
- Jika muncul error CORS, pastikan backend mengaktifkan middleware CORS
- Format tanggal harus mengikuti tipe `DateTime` MySQL/Prisma

---

## 🏆 Dibuat Untuk

**Uji Kompetensi (UJK) – Sertifikasi BNSP**
Program: _Pengembangan Web dengan React & Node.js_
Lembaga: **BBPVP Bekasi**
Tahun: **2025**

---

## ✨ Author

**Mochamad Rizki**
Frontend + Backend Developer – React & Node.js

---
