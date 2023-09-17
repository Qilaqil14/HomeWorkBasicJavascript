
const awal = document.getElementsByClassName("awal")[0];
const registrasi = document.getElementById("registrasi");
const listPendaftar = document.getElementById("listPendaftar");
// function untuk tombol Registrasi
document
  .getElementById("buttonRegistrasi")
  .addEventListener("click", function (regis) {
    regis.preventDefault();
    awal.style.display = "none";
    listPendaftar.style.display = "none";
    registrasi.style.display = "inline";
  });

  
// function untuk tombol List Pendaftar
document
  .getElementById("buttonListPendaftar")
  .addEventListener("click", function (list) {
    list.preventDefault();
    awal.style.display = "none";
    registrasi.style.display = "none";
    listPendaftar.style.display = "inline";
  });

// function tombol Submit
let totalUmur = 0
let totalUangSangu = 0
let jumlahPendaftar = 0

document
  .getElementById("tombolClick")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const tabel = document.getElementById("tabelData");
    const nama = document.getElementById("nama").value;
    const umur = document.getElementById("umur").value;
    const uangSangu = document.getElementById("uangSangu").value;

    if (
      nama.length >= 10 &&
      umur >= 25 &&
      uangSangu >= 100000 &&
      uangSangu <= 1000000
    ) {
// unutuk membuat Baris dan Kolom dalam Tabel
      const newRow = tabel.getElementsByTagName("tbody")[0].insertRow();
      const tNama = newRow.insertCell(0);
      const tUmur = newRow.insertCell(1);
      const tUang = newRow.insertCell(2);

      tNama.innerHTML = nama;
      tUmur.innerHTML = umur;
      tUang.innerHTML = uangSangu;

      // Menghitung Rata rata umur dan uang sangu
      totalUmur += umur
      totalUangSangu += uangSangu
      jumlahPendaftar++
      const resume = document.getElementById('resume')

      const rataRataUmur = totalUmur / jumlahPendaftar
      const rataRataUangSagu = totalUangSangu / jumlahPendaftar

      resume.textContent = `Rata-rata pendaftar memiliki uang sangu sebesar ${rataRataUangSagu.toFixed(2)} dengan rata-rata umur ${rataRataUmur.toFixed(2)} tahun`

      alert("Data Berhasil di Simpan");
    } else {
      alert("Data yang anda masukkan salah");
    }
  });

