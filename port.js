let harry = document.getElementById("harry");
let programming = document.getElementById("programming");
let javascript = document.getElementById("javascript");
let htmlcss = document.getElementById("htmlcss");
let frontend = document.getElementById("frontend");
let backend = document.getElementById("backend");

window.addlistenerEvent('scroll', function () {
    let value = window.scrollY;
    harry.style.left = value + "px";
    programming.style.right = value * + 'px';
})