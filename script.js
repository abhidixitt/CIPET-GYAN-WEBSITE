// ===============================
// Mobile Menu Toggle
// ===============================

const menuButton = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


if (menuButton && navLinks) {


    menuButton.addEventListener("click", () => {


        navLinks.classList.toggle("active");


    });


}



// ===============================
// Close Mobile Menu After Click
// ===============================

const links = document.querySelectorAll(".nav-links a");


links.forEach(link => {


    link.addEventListener("click", () => {


        if(navLinks){

            navLinks.classList.remove("active");

        }


    });


});



// ===============================
// Scroll Animation
// ===============================

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(

(entries) => {


    entries.forEach(entry => {


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},

{

    threshold:0.15

}

);



sections.forEach(section => {


    section.classList.add("hidden");


    observer.observe(section);


});





// ===============================
// Page Load Animation
// ===============================

window.addEventListener("load", () => {


    document.body.classList.add("loaded");


});






// ===============================
// FAQ Accordion
// ===============================

const faqQuestions = document.querySelectorAll(".faq-question");


faqQuestions.forEach(question => {


    question.addEventListener("click", () => {


        const faqItem = question.parentElement;


        faqItem.classList.toggle("active");


        const icon = question.querySelector("span");


        if(icon){


            if(faqItem.classList.contains("active")){


                icon.textContent = "−";


            } else {


                icon.textContent = "+";


            }


        }


    });


});