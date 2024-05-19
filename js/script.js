// Toggle class active untuk humberger kamar
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger kamar di klik
document.querySelector("#hamburger-kamar").onclick = () => {
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
const hamburger = document.querySelector("#hamburger-kamar");
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
  const hamburgerkamar = document.getElementById("hamburger-kamar");

  hamburgerkamar.addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah perilaku default dari tautan

    // Tambahkan logika di sini untuk menampilkan kamar navigasi yang sesuai
    // Misalnya, mungkin Anda akan menampilkan kamar samping atau kamar dropdown

    // Contoh sederhana menampilkan pesan di konsol
    console.log("Tombol hamburger-kamar ditekan!");
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

// Kamar
let slideIndex = 0;
showSlides(slideIndex);

// Fungsi untuk menampilkan slide
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Fungsi untuk mengubah slide
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Event listeners untuk tombol navigasi
document.querySelector(".prev").addEventListener("click", () => {
  plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", () => {
  plusSlides(1);
});

// Tombol partial-slide untuk pindah slide
document.getElementById("left-slide").addEventListener("click", () => {
  plusSlides(-1);
});

document.getElementById("right-slide").addEventListener("click", () => {
  plusSlides(1);
});

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
    const whatsappUrl = `https://wa.me/6285237123026?text=${encodeURIComponent(
      pesan
    )}`;

    // Membuka WhatsApp dengan pesan yang sudah disiapkan
    window.open(whatsappUrl, "_blank");
  });
});
