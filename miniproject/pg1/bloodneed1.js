function navSlide() {
    var burger = document.querySelector(".burger")
    var nav = document.querySelector('.nav-links')
    nav.classList.toggle("nav-active")
}

var burgers = document.getElementsByClassName('.burger')

function aftersendmail() {
    window.location.href = "https://www.google.com/search?q=blood+banks+near+me&rlz=1C1CHBD_enIN918IN918&oq=bloo&aqs=chrome.0.69i59l3j69i60l2j69i61j69i65l2.999j1j7&sourceid=chrome&ie=UTF-8";
    return false;
  }
var btn = document.getElementById('bttn')
var eMail = document.getElementById('email')
var mail=[]
btn.addEventListener('click',function(){
    var nam =eMail.value
    mail.push(nam)
    alert('you will get an extensively detailed email at'+" "+mail)
    aftersendmail()
})