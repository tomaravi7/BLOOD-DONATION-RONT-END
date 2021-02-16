var myButton = document.getElementById('submit')
var terms = document.getElementById('term')
var mail =document.getElementById('email')
var nam=[]
submit.addEventListener('click',function(){
    var name = mail.value
    nam.push(name)
    if(terms.checked){

        alert('Thank you for submitting the form we will get back to you at'+" "+nam)
    }
    else{
        alert('Please agree to our terms and conditions to continue')
    }
})

function navSlide() {
    var burger = document.querySelector(".burger")
    var nav = document.querySelector('.nav-links')
    nav.classList.toggle("nav-active")
}

var burgers = document.getElementsByClassName('.burger')