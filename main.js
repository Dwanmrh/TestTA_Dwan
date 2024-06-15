document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah pengiriman form
    validateForm();
  });

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Username dan Password Tidak Boleh Kosong!",
    });
    return false;
  }

  window.location.href = "home.html";
  return true;
}

// Optional: Jika Anda memiliki form lain yang perlu divalidasi dengan cara yang sama
document
  .getElementById("dataForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form

    if (validateForm()) {
      this.submit(); // Mengirimkan form jika valid
    }
  });

// main.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("inputForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const judulBimbingan = form.elements["judul_bimbingan"].value;
    const namaMahasiswa = form.elements["nama_mahasiswa"].value;
    const namaDosen = form.elements["nama_dosen"].value;
    const tanggalBimbingan = form.elements["tanggal_bimbingan"].value;
    const tanggalUjian = form.elements["tanggal_ujian"].value;
    const materiBimbingan = form.elements["materi_bimbingan"].value;

    // Save data to localStorage (for demonstration purposes)
    let data = {
      judul_bimbingan: judulBimbingan,
      nama_mahasiswa: namaMahasiswa,
      nama_dosen: namaDosen,
      tanggal_bimbingan: tanggalBimbingan,
      tanggal_ujian: tanggalUjian,
      materi_bimbingan: materiBimbingan,
    };

    localStorage.setItem("dataBimbingan", JSON.stringify(data));

    // Redirect to tampil_data.html
    window.location.href = "tampil_data.html";
  });
});

// main.js

document.addEventListener("DOMContentLoaded", function () {
  // Ambil data dari localStorage
  let data = JSON.parse(localStorage.getItem("dataBimbingan"));

  if (data) {
    // Tampilkan data Nama Mahasiswa dan NIM di #basic-info
    let basicInfoHtml = `<p><strong>Nama Mahasiswa:</strong> ${data.nama_mahasiswa}</p>`;
    // Untuk NIM, pastikan data yang sesuai dengan formulir input Anda tersedia
    // Jika NIM tidak ada dalam formulir, tambahkan di sini atau gunakan informasi lain yang relevan
    // basicInfoHtml += `<p><strong>NIM:</strong> ${data.nim}</p>`;

    document.getElementById("basic-info").innerHTML = basicInfoHtml;

    // Tampilkan data detail dalam bentuk accordion di #accordion
    let accordionHtml = "";

    accordionHtml += `
          <div class="accordion-item">
              <div class="accordion-item-header">Judul Bimbingan: ${data.judul_bimbingan}</div>
              <div class="accordion-item-content">
                  <p><strong>Nama Dosen:</strong> ${data.nama_dosen}</p>
                  <p><strong>Tanggal Bimbingan:</strong> ${data.tanggal_bimbingan}</p>
                  <p><strong>Tanggal Ujian:</strong> ${data.tanggal_ujian}</p>
                  <p><strong>Materi Bimbingan:</strong> ${data.materi_bimbingan}</p>
              </div>
          </div>
      `;

    document.getElementById("accordion").innerHTML = accordionHtml;
  } else {
    // Tampilkan pesan jika tidak ada data yang tersimpan
    document.getElementById("basic-info").innerHTML =
      "<p>Tidak ada data bimbingan yang tersimpan.</p>";
  }
});
