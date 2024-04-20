// Toggle class active untuk humberger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// Ketika tombol search di klik
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class aactive untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartOut = document.querySelector("#shopping-cart-button");

// Ketika tombol shopping cart di klik
shoppingCartOut.onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik diluar elemen
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!shoppingCartOut.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");

  hamburgerMenu.addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah perilaku default dari tautan

    // Tambahkan logika di sini untuk menampilkan menu navigasi yang sesuai
    // Misalnya, mungkin Anda akan menampilkan menu samping atau menu dropdown

    // Contoh sederhana menampilkan pesan di konsol
    console.log("Tombol hamburger-menu ditekan!");
  });
});

// Modal Box
const itemDetailModal = document.querySelector("#item-details-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";

    // Supaya Tag a tidak berjalan
    e.preventDefault();
  };
});

// Klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// Klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

// Mengirim input Data Diri ke WhatsApp
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("dataDiri");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Mengambil nilai dari input
    const nama = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const noHp = form.querySelector('input[type="number"]').value;

    // Membuat pesan untuk dikirimkan melalui WhatsApp
    const pesan = `Halo, Nama saya ${nama} dengan Email ${email} dan nomor HP ${noHp}. Saya ingin bertanya terkait `;

    // Membuat URL untuk mengirim pesan melalui WhatsApp
    const whatsappUrl = `https://wa.me/6281338764581?text=${encodeURIComponent(
      pesan
    )}`;

    // Membuka WhatsApp dengan pesan yang sudah disiapkan
    window.open(whatsappUrl, "_blank");
  });
});
