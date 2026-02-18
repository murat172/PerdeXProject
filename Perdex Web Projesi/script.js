function sidebarOpen() {
  document
    .querySelector(".sidebar")
    .classList.remove("d-none")
    .classList.add("d-block");
}

const btnClose = document.querySelector(".close");
function sidebarClose() {
  btnClose.parentElement.classList.remove("d-block");
  btnClose.parentElement.classList.add("d-none");
}
