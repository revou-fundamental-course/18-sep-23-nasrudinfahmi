const btnMenus = document.querySelector(".btn-menus");
const menusNav = document.querySelector("nav");

document.addEventListener("click", (e) => {
  if (btnMenus.contains(e.target)) {
    menusNav.classList.toggle("nav-active");
  } else {
    if (menusNav.classList.contains("nav-active")) {
      menusNav.classList.remove("nav-active");
    }
  }
});
