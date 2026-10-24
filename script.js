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

if (navigation) {
    navigation.classList.remove("active");
}

if (menuButton) {
    menuButton.classList.remove("open");
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

const form = document.querySelector("form");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert(
        "Thank you for contacting TruePortrait Revival. We will review your restoration request and respond soon."
        );

        form.reset();

    });

}


/* ================================
   SECTION FADE-IN
================================ */

const animatedItems = document.querySelectorAll(

".story, .founder, .creator-values, .why-it-matters, .faith-foundation, .restoration-process, .legacy, .personal-note, .about-gallery-preview, .cta-section, .value-card"

);

const sectionObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},

{

    threshold:.15

}

);

animatedItems.forEach(item=>{

    sectionObserver.observe(item);

});


/* ================================
   GALLERY IMAGE LIGHTBOX
   Opens the selected original or restoration at a larger size.
================================ */
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox ? lightbox.querySelector("img") : null;
const lightboxClose = lightbox ? lightbox.querySelector(".lightbox-close") : null;

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    if (lightboxImage) {
        lightboxImage.src = "";
        lightboxImage.alt = "Expanded restoration image";
    }
    document.body.style.overflow = "";
}

document.querySelectorAll("a.lightbox-image").forEach(link => {
    link.addEventListener("click", function (event) {
        if (!lightbox || !lightboxImage) return;
        event.preventDefault();
        const image = this.querySelector("img");
        lightboxImage.src = this.href;
        lightboxImage.alt = image ? image.alt : "Expanded restoration image";
        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        if (lightboxClose) lightboxClose.focus();
    });
});

if (lightboxClose) {
    lightboxClose.setAttribute("type", "button");
    lightboxClose.setAttribute("aria-label", "Close enlarged photograph");
    lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) closeLightbox();
    });
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && lightbox && lightbox.classList.contains("active")) {
        closeLightbox();
    }
});

});