const awal = document.getElementsByClassName("awal")[0];
const registrasi = document.getElementById("registrasi");
const listPendaftar = document.getElementById("listPendaftar");
document
  .getElementById("buttonRegistrasi")
  .addEventListener("click", function (regis) {
    regis.preventDefault();
    awal.style.display = "none";
    listPendaftar.style.display = "none";
    registrasi.style.display = "inline";
  });
document
  .getElementById("buttonListPendaftar")
  .addEventListener("click", function (regis) {
    regis.preventDefault();
    awal.style.display = "none";
    registrasi.style.display = "none";
    listPendaftar.style.display = "inline";
  });

// function menampilkan barang
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
      const newRow = tabel.getElementsByTagName("tbody")[0].insertRow();

      const tNama = newRow.insertCell(0);
      const tUmur = newRow.insertCell(1);
      const tUang = newRow.insertCell(2);

      tNama.innerHTML = nama;
      tUmur.innerHTML = umur;
      tUang.innerHTML = uangSangu;
      alert("Data Berhasil di Simpan");
    } else {
      alert("Data yang anda masukkan salah");
    }
  });
