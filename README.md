# 🌾 Ridwan Rattan Export — PSAS X PPLG

Website publikasi bisnis ekspor rotan Pak Ridwan di Cirebon. Dibuat hanya dengan **HTML, CSS, JavaScript, dan Bootstrap 5** sesuai ketentuan soal PSAS.

---

## 📛 Nama-nama yang dipakai (tinggal pakai)

| Yang ditanya | Jawabannya |
| --- | --- |
| **Nama bisnis / brand** | `Ridwan Rattan Export` |
| **"Database"** | Tidak ada database sungguhan (dilarang oleh soal). Penggantinya adalah objek JavaScript **`dataRidwanRattan`** di [`js/data.js`](js/data.js) |
| **Nama variabel data** | `dataRidwanRattan` (berisi `bisnis`, `produk`, `ongkir`, `faq`) |
| **Username GitHub** | `agha` — **cek lagi di profil GitHub-mu**, harus huruf kecil dan persis sama |
| **Nama repository = nama folder** | `psas-ratan-agha` |
| **Tautan GitHub Pages** | `https://agha.github.io/psas-ratan-agha/` |

> Kalau handle GitHub-mu bukan tepat `agha` (misalnya `agha-27`), ganti saja bagian `agha` pada tautan di atas. Nama repository bebas, tetapi kalau diganti, tautan Pages dan CNAME ikut berubah.

---

## ✅ Fitur yang sudah ada

1. **Publikasi bisnis** — seksi "Tentang", lokasi, jam operasional, dan layanan.
2. **Ketersediaan produk** — badge `Ready (stok … pcs)` atau `Pre-order` di setiap kartu.
3. **Varian produk** — 4 produk × 3 varian, lengkap dengan harga.
4. **Total harga** — kalkulator JS: `harga varian × jumlah`.
5. **Biaya pengiriman** — `berat total × tarif per kg`, dihitung otomatis.
6. **Estimasi sampai** — rentang hari kerja + perkiraan tanggal dari `Date()` hari ini.
7. **FAQ** — 6 pertanyaan yang sering ditanyakan calon klien, dibuat dari array JS.

---

## 📁 Struktur folder

```
psas-ratan-agha/            <- upload isi folder ini sebagai ROOT repository
├── index.html              <- wajib di root repository
├── css/
│   └── style.css
├── js/
│   ├── data.js             <- "database" berupa objek JS
│   └── script.js           <- semua perhitungan & render
├── assets/
│   ├── logo-ridwan-rattan.svg
│   ├── kursi-rotan.svg
│   ├── meja-rotan.svg
│   ├── keranjang-rotan.svg
│   └── lampu-rotan.svg
└── README.md
```

Semua gambar dibuat sendiri berformat SVG dan ikut ter-upload, jadi tidak ada gambar rusak di GitHub Pages.

---

## 🚀 Cara upload ke GitHub (GitHub Desktop / web)

**Lewat browser github.com:**

1. Buka <https://github.com/new>.
2. **Repository name:** `psas-ratan-agha`.
3. Visibility: **Public** (wajib agar Pages gratis bisa dipakai).
4. Centang *Add a README file* **tidak perlu** — sudah ada README di sini.
5. Klik **Create repository**.
6. Klik **Add file → Upload files**.
7. Pilih **semua isi** folder `psas-ratan-agha` (file `index.html` harus masuk ke root, jangan di dalam folder lagi).
8. Klik **Commit changes**.

**Lewat Git Bash / PowerShell:**

```powershell
cd "C:\Users\LOQ\OneDrive\Documents\Default Project\psas-ratan-agha"
git init
git add .
git commit -m "Initial commit - PSAS Rattan Export"
git branch -M main
git remote add origin https://github.com/agha/psas-ratan-agha.git
git push -u origin main
```

---

## 🌐 Cara aktifkan GitHub Pages

1. Buka repository → tab **Settings**.
2. Pilih **Pages** di menu samping.
3. **Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **`main`** → folder **`/ (root)`**
4. Klik **Save**.
5. Tunggu 1–3 menit, lalu buka: <https://agha.github.io/psas-ratan-agha/>
6. Refresh dengan `Ctrl + F5` kalau masih menampilkan halaman 404.

---

## 🧪 Checklist sebelum submit

- [ ] `index.html` ada di root repository (bukan di dalam subfolder).
- [ ] Tidak ada file PHP, MySQL, React, Vue, jQuery, atau Tailwind di repository.
- [ ] Klik tombol **Pilih** di produk → halaman kalkulator terisi otomatis.
- [ ] Ubah jumlah dan tujuan → subtotal, ongkir, total, dan tanggal berubah.
- [ ] Buka DevTools → tab **Console** → tidak ada error merah.
- [ ] Coba di HP (responsive) dan di laptop.
- [ ] Semua tautan navbar berfungsi dan gambar tampil.
- [ ] Tautan GitHub Pages bisa dibuka dari browser lain / mode incognito.
- [ ] Kirim tautan Pages ke guru **sebelum batas H-1**.

---

## ⚠️ Catatan penting

Folder lain di workspace (`index.php`, `api.php`, `database/perpustakaan.sql`, dan lain-lain) adalah **proyek lama Perpustakaan Digital (PHP/MySQL)**. Proyek itu **tidak boleh** dikumpulkan untuk soal ini karena soal melarang backend, database, dan PHP. Cukup upload folder `psas-ratan-agha` saja.
