function navSlide() {
    var burger = document.querySelector(".burger")
    var nav = document.querySelector('.nav-links')
    nav.classList.toggle("nav-active")
}
var burgers = document.getElementsByClassName('.burger')

var splash = document.getElementById('fadeout')
splash.addEventListener('click', ()=>{
    splash.style.opacity="0"
    splash.style.transition="ease-in-out 1s"
    splash.style.zIndex="-1"
})