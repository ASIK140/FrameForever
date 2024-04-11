
const len = document.getElementsByClassName("pack");
const len2 = document.getElementsByClassName("details");
for (let index = 0; index < len.length; index++) {
  len[index].addEventListener("click", () => {
    len[index].classList.toggle("active");
    len2[index].classList.toggle("active");
  });
}
