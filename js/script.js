const btnMenus = document.querySelector(".btn-menus");
const menusNav = document.querySelector("nav");

const formContact = document.querySelector(".form-contact");
const fullname = formContact.querySelector("#fullname");
const email = formContact.querySelector("#email");
const telp = formContact.querySelector("#telp");
const pesan = formContact.querySelector("#message");
const errorForm = formContact.querySelector(".error-form");

document.addEventListener("click", (e) => {
  if (btnMenus.contains(e.target)) {
    menusNav.classList.toggle("nav-active");
  } else {
    if (menusNav.classList.contains("nav-active")) {
      menusNav.classList.remove("nav-active");
    }
  }
});

formContact.addEventListener("submit", (e) => {
  e.preventDefault();
  if (fullname.value.trim() == "") {
    return (errorForm.innerHTML = "Masukkan nama Anda!");
  }

  if (email.value.trim() == "") {
    return (errorForm.innerHTML = "Masukkan email Anda!");
  }

  if (telp.value.trim() == "") {
    return (errorForm.innerHTML = "Masukkan nomor telepon Anda!");
  }

  if (pesan.value.trim() == "") {
    return (errorForm.innerHTML = "Masukkan pesan Anda!");
  }
  return (errorForm.innerHTML = "");
});

const banners = [
  "./imgs/sayur1.jpg",
  "./imgs/sayur2.jpg",
  "./imgs/sayur3.jpg",
  "./imgs/sayur4.jpg",
  "./imgs/sayur5.jpg",
];

const btnBannerPrev = document.querySelector(".btn-banner-prev");
const btnBannerNext = document.querySelector(".btn-banner-next");

const heroBanner = document.querySelector(".hero-banner");

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
