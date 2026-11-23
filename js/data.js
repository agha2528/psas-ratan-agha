/* ============================================================
   data.js — "database" berupa objek JavaScript (tanpa backend)
   Sesuai ketentuan soal: data disimpan langsung di file JS.
   Ubah nilai di sini untuk mengganti konten website.
  ============================================================ */

const dataRidwanRattan = {
  bisnis: {
    nama: "Ridwan Rattan Export",
    sejak: 2009,
    lokasi: "Cirebon, Jawa Barat",
    email: "halo@ridwanrattanexport.id",
    telepon: "0812-3456-7890",
    whatsapp: "6281234567890"
  },

  // Daftar produk + varian + harga. stok = 0 berarti pre-order.
  produk: [
    {
      id: "kursi-panggung",
      nama: "Kursi Panggung Rotan",
      gambar: "assets/kursi-rotan.svg",
      deskripsi: "Kursi santai dengan anyaman rapat dan rangka kayu jati belanda.",
      beratKg: 6,
      stok: 24,
      varian: [
        { nama: "Natural", harga: 385000 },
        { nama: "Coklat Furniture", harga: 415000 },
        { nama: "Hitam Doff", harga: 435000 }
      ]
    },
    {
      id: "meja-lingkar",
      nama: "Meja Lingkar Rotan",
      gambar: "assets/meja-rotan.svg",
      deskripsi: "Meja bulang kecil untuk teras, kafe, atau ruang tamu minimalis.",
      beratKg: 9,
      stok: 12,
      varian: [
        { nama: "Diameter 60 cm", harga: 520000 },
        { nama: "Diameter 80 cm", harga: 675000 },
        { nama: "Diameter 100 cm", harga: 820000 }
      ]
    },
    {
      id: "keranjang-anyaman",
      nama: "Keranjang Anyaman Rotan",
      gambar: "assets/keranjang-rotan.svg",
      deskripsi: "Keranjang serbaguna untuk penyimpanan, hamper, atau dekorasi.",
      beratKg: 2,
      stok: 48,
      varian: [
        { nama: "Kecil (20 cm)", harga: 95000 },
        { nama: "Sedang (28 cm)", harga: 135000 },
        { nama: "Besar (35 cm)", harga: 175000 }
      ]
    },
    {
      id: "lampu-gantung",
      nama: "Lampu Gantung Rotan",
      gambar: "assets/lampu-rotan.svg",
      deskripsi: "Kap lampu anyaman untuk nuansa hangat pada restoran dan kafe.",
      beratKg: 3,
      stok: 0,
      varian: [
        { nama: "Model Kubah", harga: 245000 },
        { nama: "Model Silinder", harga: 265000 },
        { nama: "Model Miring", harga: 290000 }
      ]
    }
  ],

  // Tarif ongkir per kilogram dan estimasi dalam hari kerja.
  ongkir: [
    {
      id: "lokal",
      tujuan: "Cirebon & sekitarnya",
      tarifPerKg: 2500,
      estimasiMin: 1,
      estimasiMax: 2,
      keterangan: "Kurir lokal, bisa COD"
    },
    {
      id: "jawa",
      tujuan: "Pulau Jawa",
      tarifPerKg: 4500,
      estimasiMin: 2,
      estimasiMax: 4,
      keterangan: "Reguler darat"
    },
    {
      id: "luar-jawa",
      tujuan: "Luar Jawa (Sumatera, Kalimantan, Sulawesi)",
      tarifPerKg: 7500,
      estimasiMin: 4,
      estimasiMax: 7,
      keterangan: "Darat + laut"
    },
    {
      id: "ekspor",
      tujuan: "Ekspor (Asia & Eropa)",
      tarifPerKg: 18000,
      estimasiMin: 10,
      estimasiMax: 18,
      keterangan: "Laut/udara + dokumen"
    }
  ],

  // Pertanyaan yang paling sering ditanyakan calon klien.
  faq: [
    {
      pertanyaan: "Apakah produk yang ditampilkan sedang tersedia?",
      jawaban: "Sebagian besar produk berstatus <strong>Ready</strong> dan stoknya ditampilkan di katalog. Jika berstatus <strong>Pre-order</strong>, produk tetap bisa dipesan dengan estimasi produksi 7–10 hari kerja sebelum dikirim."
    },
    {
      pertanyaan: "Apa saja varian produk yang bisa dipilih?",
      jawaban: "Setiap produk memiliki 3 varian, misalnya Kursi Panggung tersedia dalam Natural, Coklat Furniture, dan Hitam Doff. Daftar lengkap beserta harganya ada di kartu produk dan di dropdown varian kalkulator."
    },
    {
      pertanyaan: "Bagaimana cara menghitung total harganya?",
      jawaban: "Total bayar = (harga varian × jumlah pcs) + biaya pengiriman. Gunakan kalkulator di halaman ini: semua angka dihitung otomatis oleh JavaScript sesuai jumlah dan varian yang kamu pilih."
    },
    {
      pertanyaan: "Berapa biaya pengirimannya?",
      jawaban: "Ongkir dihitung per kilogram. Berat total = jumlah pcs × berat per pcs. Tarif untuk Cirebon mulai Rp2.500/kg, Pulau Jawa Rp4.500/kg, luar Jawa Rp7.500/kg, dan ekspor Rp18.000/kg."
    },
    {
      pertanyaan: "Berapa lama barang sampai setelah pembayaran?",
      jawaban: "Estimasi dihitung sejak barang diserahkan ke kurir: 1–2 hari untuk Cirebon, 2–4 hari untuk Pulau Jawa, 4–7 hari untuk luar Jawa, dan 10–18 hari untuk pengiriman ekspor. Tanggal perkiraan muncul otomatis di kalkulator."
    },
    {
      pertanyaan: "Apakah bisa pesan dalam jumlah besar atau custom desain?",
      jawaban: "Bisa. Untuk pesanan above 50 pcs atau permintaan ukuran/warna khusus, silakan hubungi kami lewat WhatsApp. Tim akan mengirim penawaran tertulis dan jadwal produksi setelah detail pesanan disepakati."
    }
  ]
};
