
const footerElem = document.querySelector(".section-footer");

const scroollElement = document.createElement("div");
scroollElement.classList.add("scroolTop-style");


scroollElement.innerHTML =`<i class="fa-solid fa-magnifying-glass fa-sm"></i>`;

footerElem.after(scroollElement);