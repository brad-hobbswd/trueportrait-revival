/* =====================================
   TRUEPORTRAIT REVIVAL
   Main JavaScript
===================================== */


document.addEventListener("DOMContentLoaded", function () {



/* ================================
   MOBILE NAVIGATION
================================ */


const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav");


if (menuButton && navigation) {


menuButton.addEventListener("click", function () {

navigation.classList.toggle("active");

menuButton.classList.toggle("open");

});


}




/* ================================
   CLOSE MOBILE MENU AFTER CLICK
================================ */


const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(link => {


link.addEventListener("click", function(){

if(navigation){

navigation.classList.remove("active");

}


});


});






/* ================================
   HEADER SCROLL EFFECT
================================ */


const header = document.querySelector(".navbar");


window.addEventListener("scroll", function(){


if(header){


if(window.scrollY > 80){

header.classList.add("scrolled");

}

else {

header.classList.remove("scrolled");

}


}


});







/* ================================
   SMOOTH SCROLLING
================================ */


document.querySelectorAll('a[href^="#"]').forEach(anchor => {


anchor.addEventListener("click", function(e){


const target = document.querySelector(
this.getAttribute("href")
);


if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});






/* ================================
   IMAGE FADE-IN EFFECT
================================ */


const images = document.querySelectorAll("img");


const imageObserver = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("visible");


}


});


},
{
threshold:.2
}
);



images.forEach(image=>{

imageObserver.observe(image);

});






/* ================================
   FOOTER YEAR
================================ */


const year = document.querySelector(".year");


if(year){

year.textContent = new Date().getFullYear();

}





/* ================================
   CONTACT FORM MESSAGE
================================ */


const form = document.querySelector(".contact-form");


if(form){


form.addEventListener("submit", function(e){


e.preventDefault();


alert(
"Thank you for contacting TruePortrait Revival. We will review your restoration request and respond soon."
);


form.reset();


});


}




});