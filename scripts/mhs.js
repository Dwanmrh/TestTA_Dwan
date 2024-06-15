document.getElementById('InputMhs').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Example validation (you can add your own validation logic here)
    let nim = document.getElementById('NIM').value.trim();
    let noHp = document.getElementById('noHp').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    if (nim === '' || noHp === '' || email === '' || password === '') {
      Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: 'Silakan lengkapi semua kolom',
      });
    } else {
      // Jika validasi sukses, tampilkan sweet alert sukses
      Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: 'Data berhasil disimpan!',
      });

      // Di sini Anda dapat menambahkan logika untuk mengirim data ke server atau melakukan aksi lainnya
      // Contoh: Simpan data ke server dengan menggunakan fetch atau Ajax
    }
  });