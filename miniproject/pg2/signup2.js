function navSlide() {
    var burger = document.querySelector(".burger")
    var nav = document.querySelector('.nav-links')
    nav.classList.toggle("nav-active")
}

var burgers = document.getElementsByClassName('.burger')

var suMmit = document.getElementById('sub-mit')
suMmit.addEventListener('click',function(){
    alert("Thank you for signing up for health chitkara")
})