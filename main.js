let searchOpen = document.querySelector(".search-open");
let search = document.querySelector(".search");
let check = document.querySelector(".opClose");
let opCloseMobile = document.querySelector(".opCloseMobile");
let rightMenuSide = document.querySelector(".rightMenuSide");

searchOpen.addEventListener("click", () => {
  search.classList.toggle("active");
  check.classList.toggle("fa-magnifying-glass");
  check.classList.toggle("fa-x");

  // Add the blur class when the search is active
  if (search.classList.contains("active")) {
    search.classList.add("blur");
  } else {
    search.classList.remove("blur");
  }
});

opCloseMobile.addEventListener("click", () => {
  opCloseMobile.classList.toggle("fa-bars");
  opCloseMobile.classList.toggle("fa-times");
  rightMenuSide.classList.toggle("hidden");

  // Add the blur class to the rightMenuSide when it's not hidden
  if (!rightMenuSide.classList.contains("hidden")) {
    rightMenuSide.classList.add("blur");
  } else {
    rightMenuSide.classList.remove("blur");
  }
});
