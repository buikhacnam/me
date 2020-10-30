const navLink = document.querySelectorAll(".navigation__item");
const checkBox = document.querySelector(".navigation__checkbox");

navLink.forEach(link => {
    return link.addEventListener("click", checkboxOff);
})

function checkboxOff() {
    checkBox.checked = false;
}