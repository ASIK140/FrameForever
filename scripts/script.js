
const len = document.getElementsByClassName("pack");
const len2 = document.getElementsByClassName("details");
for (let index = 0; index < len.length; index++) {
  len[index].addEventListener("click", () => {
    len[index].classList.toggle("active");
    len2[index].classList.toggle("active");
  });
}

let menu_icon = document.querySelector(".menu-icon")
let menu=document.querySelector(".menu")

menu_icon.addEventListener("click",()=>{
  menu.classList.toggle("act")
 
})
let header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});