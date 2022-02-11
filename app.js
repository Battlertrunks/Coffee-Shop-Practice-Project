// slide bar
const toggle_Btn = document.querySelector(".sidebar-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggle_Btn.addEventListener("click", () => {
  sidebar.classList.add("sidebar-on");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-on");
});
