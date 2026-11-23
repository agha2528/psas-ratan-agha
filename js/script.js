/* ============================================================
   script.js — seluruh perhitungan dan render konten
   Mengambil data dari objek dataRidwanRattan (js/data.js)
  ============================================================ */

(function () {
  "use strict";

  const formatRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  });

  const formatTanggal = new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  // Elemen yang dipakai berulang kali
  let elemenPilihProduk;
  let elemenPilihVarian;
  let elemenJumlah;
  let elemenTujuan;

  document.addEventListener("DOMContentLoaded", inisialisasi);

  function inisialisasi() {
    elemenPilihProduk = document.getElementById("pilihProduk");
    elemenPilihVarian = document.getElementById("pilihVarian");
    elemenJumlah = document.getElementById("jumlah");
    elemenTujuan = document.getElementById("tujuan");

    renderDaftarProduk();
    renderPilihanProduk();
    renderPilihanTujuan();
    renderTabelOngkir();
    renderFaq();

    isiVarianProduk();
    isiInfoStok();
    hitungSemua();

    elemenPilihProduk.addEventListener("change", function () {
      isiVarianProduk();
      isiInfoStok();
      hitungSemua();
    });

    elemenPilihVarian.addEventListener("change", hitungSemua);
    elemenJumlah.addEventListener("input", hitungSemua);
    elemenTujuan.addEventListener("change", hitungSemua);

    document.getElementById("formKalkulator").addEventListener("submit", function (event) {
      event.preventDefault();
      hitungSemua();
    });

    document.getElementById("tombolReset").addEventListener("click", resetKalkulator);

    document.getElementById("daftarProduk").addEventListener("click", function (event) {
      const tombol = event.target.closest(".pilih-produk");
      if (tombol) {
        pilihProdukDariKatalog(tombol.dataset.id);
      }
    });

    document.getElementById("tahun").textContent = new Date().getFullYear();
    document.getElementById("linkWhatsapp").href =
      "https://wa.me/" + dataRidwanRattan.bisnis.whatsapp +
      "?text=" + encodeURIComponent("Halo Pak Ridwan, saya ingin bertanya tentang produk rotan.");
  }

  /* ---------- Fungsi bantu ---------- */

  function ambilProdukTerpilih() {
    return dataRidwanRattan.produk.find(function (produk) {
      return produk.id === elemenPilihProduk.value;
    }) || dataRidwanRattan.produk[0];
  }

  function ambilOngkirTerpilih() {
    return dataRidwanRattan.ongkir.find(function (item) {
      return item.id === elemenTujuan.value;
    }) || dataRidwanRattan.ongkir[0];
  }

  function tambahHari(tanggal, jumlahHari) {
    const hasil = new Date(tanggal.getTime());
    hasil.setDate(hasil.getDate() + jumlahHari);
    return hasil;
  }

  function Rupiah(angka) {
    return formatRupiah.format(angka);
  }

  /* ---------- Render katalog produk ---------- */

  function renderDaftarProduk() {
    const kontainer = document.getElementById("daftarProduk");

    kontainer.innerHTML = dataRidwanRattan.produk.map(function (produk) {
      const ready = produk.stok > 0;
      const status = ready
        ? '<span class="badge badge-ready">' + produk.stok + " pcs ready</span>"
        : '<span class="badge badge-preorder">Pre-order</span>';

      const daftarVarian = produk.varian.map(function (varian) {
        return "<li>" + varian.nama + " · " + Rupiah(varian.harga) + "</li>";
      }).join("");

      const hargaTerendah = Math.min.apply(null, produk.varian.map(function (v) {
        return v.harga;
      }));

      return (
        '<div class="col-sm-6 col-xl-3">' +
          '<article class="card card-rre card-produk h-100">' +
            '<img src="' + produk.gambar + '" class="card-img-top gambar-produk" alt="Ilustrasi ' + produk.nama + '">' +
            '<div class="card-body d-flex flex-column p-3 p-lg-4">' +
              '<div class="d-flex justify-content-between align-items-start gap-2 mb-2">' +
                "<h3 class=\"h6 fw-bold mb-0\">" + produk.nama + "</h3>" +
                status +
              "</div>" +
              '<p class="text-muted small mb-2">' + produk.deskripsi + "</p>" +
              '<p class="small mb-1"><i class="bi bi-box"></i> Berat: <strong>' + produk.beratKg + " kg/pcs</strong></p>" +
              '<ul class="varian-list">' + daftarVarian + "</ul>" +
              '<div class="mt-auto d-flex justify-content-between align-items-center">' +
                '<span class="harga-produk">' + Rupiah(hargaTerendah) + "<small class=\"text-muted fw-normal\"> mulai</small></span>" +
                '<button type="button" class="btn btn-rre btn-sm pilih-produk" data-id="' + produk.id + '">' +
                  'Pilih <i class="bi bi-arrow-right"></i>' +
                "</button>" +
              "</div>" +
            "</div>" +
          "</article>" +
        "</div>"
      );
    }).join("");
  }

  function pilihProdukDariKatalog(id) {
    elemenPilihProduk.value = id;
    isiVarianProduk();
    isiInfoStok();
    hitungSemua();

    const target = document.getElementById("kalkulator");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(function () {
      elemenJumlah.focus({ preventScroll: true });
    }, 450);
  }

  /* ---------- Isi dropdown ---------- */

  function renderPilihanProduk() {
    elemenPilihProduk.innerHTML = dataRidwanRattan.produk.map(function (produk) {
      const keterangan = produk.stok > 0 ? "Ready " + produk.stok + " pcs" : "Pre-order";
      return '<option value="' + produk.id + '">' + produk.nama + " — " + keterangan + "</option>";
    }).join("");
  }

  function renderPilihanTujuan() {
    elemenTujuan.innerHTML = dataRidwanRattan.ongkir.map(function (item) {
      return '<option value="' + item.id + '">' + item.tujuan + "</option>";
    }).join("");
  }

  function isiVarianProduk() {
    const produk = ambilProdukTerpilih();

    elemenPilihVarian.innerHTML = produk.varian.map(function (varian, indeks) {
      return '<option value="' + indeks + '">' + varian.nama + " — " + Rupiah(varian.harga) + "</option>";
    }).join("");

    elemenJumlah.max = produk.stok > 0 ? produk.stok : 50;
    elemenJumlah.value = 1;
  }

  function isiInfoStok() {
    const produk = ambilProdukTerpilih();
    const keterangan = produk.stok > 0
      ? "Stok tersedia: " + produk.stok + " pcs · " + produk.beratKg + " kg/pcs"
      : "Pre-order · estimasi produksi 7–10 hari · " + produk.beratKg + " kg/pcs";

    document.getElementById("infoStok").textContent = keterangan;
  }

  /* ---------- Hitung total harga, ongkir, dan estimasi ---------- */

  function hitungSemua() {
    const produk = ambilProdukTerpilih();
    const indeksVarian = Number(elemenPilihVarian.value) || 0;
    const varian = produk.varian[indeksVarian] || produk.varian[0];
    const ongkir = ambilOngkirTerpilih();

    const batasAtas = Number(elemenJumlah.max) || 50;
    let jumlah = Number(elemenJumlah.value);
    if (!Number.isFinite(jumlah) || jumlah < 1) {
      jumlah = 1;
    }
    jumlah = Math.min(Math.floor(jumlah), batasAtas);
    elemenJumlah.value = jumlah;

    // Semua angka di bawah dihitung di JavaScript, bukan ditulis manual di HTML.
    const beratTotal = jumlah * produk.beratKg;
    const subtotal = jumlah * varian.harga;
    const biayaOngkir = beratTotal * ongkir.tarifPerKg;
    const totalBayar = subtotal + biayaOngkir;

    const hariIni = new Date();
    const tanggalMin = tambahHari(hariIni, ongkir.estimasiMin);
    const tanggalMax = tambahHari(hariIni, ongkir.estimasiMax);

    document.getElementById("ringkasanProduk").textContent =
      jumlah + " × " + produk.nama + " (" + varian.nama + ") · " + ongkir.tujuan;

    document.getElementById("statusStok").innerHTML = produk.stok > 0
      ? '<i class="bi bi-check-circle-fill"></i> <strong>Ready:</strong> produk siap dikirim dengan stok ' + produk.stok + " pcs."
      : '<i class="bi bi-hourglass-split"></i> <strong>Pre-order:</strong> produk diproduksi setelah pesanan, estimasi 7–10 hari kerja.';

    document.getElementById("beratInfo").textContent = beratTotal + " kg";
    document.getElementById("nilaiSubtotal").textContent = Rupiah(subtotal);
    document.getElementById("nilaiOngkir").textContent = Rupiah(biayaOngkir);
    document.getElementById("nilaiTotal").textContent = Rupiah(totalBayar);
    document.getElementById("nilaiEstimasi").textContent =
      ongkir.estimasiMin + "–" + ongkir.estimasiMax + " hari kerja";
    document.getElementById("nilaiTanggal").textContent =
      "Perkiraan tiba: " + formatTanggal.format(tanggalMin) + " – " + formatTanggal.format(tanggalMax);
  }

  function resetKalkulator() {
    elemenPilihProduk.selectedIndex = 0;
    elemenTujuan.selectedIndex = 0;
    isiVarianProduk();
    isiInfoStok();
    hitungSemua();
  }

  /* ---------- Tabel tarif & FAQ ---------- */

  function renderTabelOngkir() {
    document.getElementById("tabelOngkir").innerHTML = dataRidwanRattan.ongkir.map(function (item) {
      return (
        "<tr>" +
          "<td>" + item.tujuan + "</td>" +
          '<td class="text-end">' + Rupiah(item.tarifPerKg) + "</td>" +
          '<td class="text-center">' + item.estimasiMin + "–" + item.estimasiMax + " hari</td>" +
          "<td>" + item.keterangan + "</td>" +
        "</tr>"
      );
    }).join("");
  }

  function renderFaq() {
    document.getElementById("daftarFaq").innerHTML = dataRidwanRattan.faq.map(function (item, indeks) {
      const dibuka = indeks === 0;
      return (
        '<div class="accordion-item">' +
          '<h2 class="accordion-header">' +
            '<button class="accordion-button' + (dibuka ? "" : " collapsed") + '" type="button" ' +
              'data-bs-toggle="collapse" data-bs-target="#faq-' + indeks + '" ' +
              'aria-expanded="' + dibuka + '" aria-controls="faq-' + indeks + '">' +
              item.pertanyaan +
            "</button>" +
          "</h2>" +
          '<div id="faq-' + indeks + '" class="accordion-collapse collapse' + (dibuka ? " show" : "") + '" ' +
              'data-bs-parent="#daftarFaq">' +
            '<div class="accordion-body">' + item.jawaban + "</div>" +
          "</div>" +
        "</div>"
      );
    }).join("");
  }
})();
