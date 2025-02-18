import { home } from "./home";
import { menu } from "./menu";
import { about } from "./about";

console.log("Hello, Restaurant");


function clearContent() {
    document.getElementById("content").innerHTML = "";
}

function homeBtn() {
    clearContent();
    home.render();
}

function menuBtn() {
    clearContent();
    menu.render();
}

function aboutBtn() {
    clearContent();
    about.render();
}

function addListeners() {
    const homeSel = document.getElementById("home");
    const menuSel = document.getElementById("menu");
    const aboutSel = document.getElementById("about");

    homeSel.addEventListener("click", homeBtn);
    menuSel.addEventListener("click", menuBtn);
    aboutSel.addEventListener("click", aboutBtn);
}

function init() {
    home.render();
    addListeners();
}

init();