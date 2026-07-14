const imgs = document.querySelectorAll(".list-img img");
const mainImg = document.querySelector("#mainImg");

imgs.forEach((img) => {
    img.addEventListener("click", () => {
        mainImg.setAttribute("src", img.getAttribute("src"));
    });
});
