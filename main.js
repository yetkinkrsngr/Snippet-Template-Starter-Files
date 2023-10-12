let searchOpen = document.querySelector(".search-open");
let search = document.querySelector(".search");
let check = document.querySelector(".opClose");
searchOpen.addEventListener("click", () => {
  search.classList.toggle("active");
  check.classList.toggle("fa-magnifying-glass");
  check.classList.toggle("fa-x");
});
