const menuBtn = document.getElementById("menu-btn");
const navLInks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e)=> {
    navLInks.classList.toggle("open");

    const isOpen = navLInks.classList.contains("open");
     menuBtnIcon.setAttribute("class", isOpen? "ri-close-line" : "ri-menu-line");
});

navLInks.addEventListener("click", (e) =>{
 navLInks.classList.remove("open");
 menuBtn.setAttribute("class", "ri-menu-line");   
});

const scrollRevealOption = {

    origin:"bottom",
    duration:1000,   
};

ScrollReveal().reveal(".container_left h1", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".container_left .container_btn", {
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".container_right h4", {
    ...scrollRevealOption,
    delay:2000,
});
ScrollReveal().reveal(".container_right h2", {
    ...scrollRevealOption,
    delay:2500,
});
ScrollReveal().reveal(".container_right h3", {
    ...scrollRevealOption,
    delay:3000,
});
ScrollReveal().reveal(".container_right p", {
    ...scrollRevealOption,
    delay:3500,
});

ScrollReveal().reveal(".container_right .ultra-21", {
    duration:1000,
    delay:4000,
});

ScrollReveal().reveal(".container_right .ultra-2", {
    duration:1000,
    delay:4500,
});

ScrollReveal().reveal("location", {
    ...scrollRevealOption,
    origin:"left",
    delay:5000,
});

ScrollReveal().reveal("socials span", {
    ...scrollRevealOption,
    origin:"top",
    delay:5500,
    interval:500,
});