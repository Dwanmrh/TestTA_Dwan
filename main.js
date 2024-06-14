// Index
document.getElementById("submitBtn").addEventListener("click", function () {
  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    // Menampilkan alert box
    document.getElementById("alertBox").style.display = "block";
    // Menerapkan animasi
    document.getElementById("alertBox").style.animation =
      "slideIn 0.5s forwards";
  } else {
    window.location.href = "home.html";
  }
}

function closeAlert() {
  document.getElementById("alertBox").style.display = "none";
}

// Form
document
  .getElementById("dataForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form

    if (validateForm()) {
      this.submit(); // Mengirimkan form jika valid
    }
  });

function validateForm() {
  var inputs = document.getElementsByTagName("input");
  var selects = document.getElementsByTagName("select");
  var isEmpty = false;

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      isEmpty = true;
      break;
    }
  }

  for (var i = 0; i < selects.length; i++) {
    if (selects[i].value === "") {
      isEmpty = true;
      break;
    }
  }

  if (isEmpty) {
    alert("Data tidak boleh kosong. Mohon lengkapi semua inputan.");
    return false;
  }

  return true;
}
