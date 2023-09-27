const btnMenus = document.querySelector(".btn-menus");
const menusNav = document.querySelector("nav");

const formContact = document.querySelector(".form-contact");
const fullname = formContact.querySelector("#fullname");
const email = formContact.querySelector("#email");
const telp = formContact.querySelector("#telp");
const pesan = formContact.querySelector("#message");

// === BTN MENUS NAV FOR MOBILE ONLY ===
document.addEventListener("click", (e) => {
  if (btnMenus.contains(e.target)) {
    menusNav.classList.toggle("nav-active");
  } else {
    if (menusNav.classList.contains("nav-active")) {
      menusNav.classList.remove("nav-active");
    }
  }
});

// === FORM CONTACT ON SUBMIT ===
formContact.addEventListener("submit", (e) => {
  e.preventDefault();

  const errorNameForm = formContact.querySelector(".error-name");
  const errorEmailForm = formContact.querySelector(".error-email");
  const errorTelpForm = formContact.querySelector(".error-telp");
  const errorMessageForm = formContact.querySelector(".error-message");

  if (fullname.value.trim() == "") {
    errorNameForm.innerHTML = "Masukkan nama Anda!";
    fullname.style.border = "1px solid #ff0000";
  } else {
    errorNameForm.innerHTML = "";
    fullname.style.border = "";
  }

  if (email.value.trim() == "") {
    errorEmailForm.innerHTML = "Masukkan email Anda!";
    email.style.border = "1px solid #ff0000";
  } else {
    errorEmailForm.innerHTML = "";
    email.style.border = "";
  }

  if (telp.value.trim() == "") {
    errorTelpForm.innerHTML = "Masukkan nomor telepon Anda!";
    telp.style.border = "1px solid #ff0000";
  } else {
    errorTelpForm.innerHTML = "";
    telp.style.border = "";
  }

  if (pesan.value.trim() == "") {
    errorMessageForm.innerHTML = "Masukkan pesan Anda!";
    pesan.style.border = "1px solid #ff0000";
  } else {
    errorMessageForm.innerHTML = "";
    pesan.style.border = "";
  }
});

// === HERO BANNERS ===
const banners = [
  "./imgs/sayur1.jpg",
  "./imgs/sayur2.jpg",
  "./imgs/sayur3.jpg",
  "./imgs/sayur4.jpg",
  "./imgs/sayur5.jpg",
];

// === BTN CONTROLLER BANNER ===
const btnBannerPrev = document.querySelector(".btn-banner-prev");
const btnBannerNext = document.querySelector(".btn-banner-next");

const heroBanner = document.querySelector(".hero-banner");

// === BTN CONTROLLER BANNER ONCLICK ===
let i = 0;
document.addEventListener("click", (e) => {
  if (btnBannerNext.contains(e.target)) {
    i++;
    if (i == banners.length) i = 0;
    heroBanner.setAttribute("src", banners[i]);
  } else if (btnBannerPrev.contains(e.target)) {
    i--;
    if (i < 0) i = banners.length - 1;
    heroBanner.setAttribute("src", banners[i]);
  }
});

// === FUNC BANNER AUTO SLIDES ===
function autoSlide() {
  i++;
  if (i == banners.length) i = 0;
  if (i < 0) i = banners.length - 1;
  heroBanner.setAttribute("src", banners[i]);
}

(function () {
  setInterval(() => {
    autoSlide();
  }, 8000);
})();
