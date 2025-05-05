let i = 0;
let text = "Frontend Developer";
function typeWriter() {
if (i < text.length) {
document.querySelector(".type-text").innerHTML += text.charAt(i);
i++;
setTimeout(typeWriter, 100);
}
}
window.onload = typeWriter;



const list = document.querySelectorAll(".list");
function activeLink(){
list.forEach((item) => {
item.classList.remove("active");
});
this.classList.add("active");
};
list.forEach((item) => {
item.addEventListener("click", activeLink);

});