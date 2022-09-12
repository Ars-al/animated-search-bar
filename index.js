const searchbarEl = document.querySelector(".search-bar");
const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", () => {
    searchbarEl.classList.toggle("active");
});0