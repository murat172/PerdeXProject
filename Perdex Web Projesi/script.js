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

document.addEventListener("DOMContentLoaded", () => {
  const leftElements = document.querySelectorAll(".card-category-animLeft");
  const rightElements = document.querySelectorAll(".card-category-animRight");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.3 },
  );

  leftElements.forEach((el) => observer.observe(el));
  rightElements.forEach((el) => observer.observe(el));
});
function sidebarOpen() {
  const sb = document.getElementById("sidebar");
  sb.classList.remove("d-none");
}
function sidebarClose() {
  const sb = document.getElementById("sidebar");
  sb.classList.add("d-none");
}
function sidebarOpen() {
  document.getElementById("sidebar").classList.remove("d-none");
}
function sidebarClose() {
  document.getElementById("sidebar").classList.add("d-none");
}

function setView(mode) {
  const grid = document.getElementById("gridView");
  const list = document.getElementById("listView");
  const gBtn = document.getElementById("gridBtn");
  const lBtn = document.getElementById("listBtn");
  if (mode === "grid") {
    grid.style.display = "block";
    list.style.display = "none";
    gBtn.classList.add("active");
    lBtn.classList.remove("active");
  } else {
    grid.style.display = "none";
    list.style.display = "block";
    gBtn.classList.remove("active");
    lBtn.classList.add("active");
  }
}

document.querySelectorAll(".genre-chip").forEach((chip) => {
  chip.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelectorAll(".genre-chip")
      .forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
  });
});

document.querySelectorAll(".decade-pill").forEach((pill) => {
  pill.addEventListener("click", () => {
    document
      .querySelectorAll(".decade-pill")
      .forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
  });
});
function sidebarOpen() {
  document.getElementById("sidebar").classList.remove("d-none");
}
function sidebarClose() {
  document.getElementById("sidebar").classList.add("d-none");
}
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = document.getElementById("firstName").value.trim();
  const email = document.getElementById("emailContact").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!firstName || !email || !message) {
    alert("Lütfen zorunlu alanları doldurun.");
    return;
  }
  const successMsg = document.getElementById("successMsg");
  successMsg.style.display = "block";
  this.reset();
  setTimeout(() => {
    successMsg.style.display = "none";
  }, 5000);
});
