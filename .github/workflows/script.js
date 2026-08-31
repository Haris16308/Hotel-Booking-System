```javascript
/* =========================================
   STAYNEST HOTEL BOOKING SYSTEM
   JavaScript File
   ========================================= */


/* =========================================
   YOUR HOTEL CONTACT DETAILS
   ========================================= */

/*
   IMPORTANT:
   Yahan apna actual email aur mobile number
   baad mein enter karna.
*/

const HOTEL_EMAIL = "StayNest@example.com";

const HOTEL_PHONE = "+91-9162440600";


/* =========================================
   PAGE LOADED
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    setupMobileMenu();

    setupSlider();

    setupCurrentDate();

    setupBookingBar();

    setupButtons();

});


/* =========================================
   MOBILE MENU
   ========================================= */

function setupMobileMenu() {

    const menuBtn = document.getElementById("menuBtn");

    const navbar = document.querySelector(".navbar");


    if (!menuBtn || !navbar) {
        return;
    }


    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("show");

    });


    /* Close menu after clicking a link */

    const navLinks = navbar.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("show");

        });

    });

}


/* =========================================
   HERO IMAGE SLIDER
   ========================================= */

function setupSlider() {

    const slides =
        document.querySelectorAll(".hero-slide");

    const dots =
        document.querySelectorAll(".dot");


    if (slides.length === 0) {
        return;
    }


    let currentSlide = 0;


    /* Show selected slide */

    function showSlide(index) {

        currentSlide = index;


        slides.forEach(function (slide, i) {

            slide.classList.toggle(
                "active",
                i === index
            );

        });


        dots.forEach(function (dot, i) {

            dot.classList.toggle(
                "active",
                i === index
            );

        });

    }


    /* Slider dots */

    dots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {

            showSlide(index);

        });

    });


    /* Automatic slideshow */

    setInterval(function () {

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    }, 5000);

}


/* =========================================
   CURRENT DATE
   ========================================= */

function setupCurrentDate() {

    const dateElement =
        document.getElementById("todayDate");


    if (!dateElement) {
        return;
    }


    const today = new Date();


    const formattedDate =
        new Intl.DateTimeFormat(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        ).format(today);


    dateElement.textContent =
        formattedDate;

}


/* =========================================
   BOOKING BAR
   ========================================= */

function setupBookingBar() {

    const checkButton =
        document.querySelector(".check-btn");


    if (!checkButton) {
        return;
    }


    checkButton.addEventListener(
        "click",
        function () {

            window.location.href =
                "register.html";

        }
    );

}


/* =========================================
   GENERAL BUTTON EFFECT
   ========================================= */

function setupButtons() {

    const buttons =
        document.querySelectorAll(".btn");


    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                button.style.transform =
                    "scale(0.97)";


                setTimeout(function () {

                    button.style.transform =
                        "";

                }, 150);

            }
        );

    });

}


/* =========================================
   BOOKING EMAIL FUNCTION
   ========================================= */

/*
   This function will be used on the
   Register / Booking page.
*/

function sendBookingEmail(form) {

    const formData =
        new FormData(form);


    const firstName =
        formData.get("firstName");

    const lastName =
        formData.get("lastName");

    const email =
        formData.get("email");

    const phone =
        formData.get("phone");

    const country =
        formData.get("country");

    const guests =
        formData.get("guests");

    const checkin =
        formData.get("checkin");

    const checkout =
        formData.get("checkout");

    const room =
        formData.get("room");

    const request =
        formData.get("request");


    const subject =
        "StayNest Hotel Booking Request";


    const body =

        "NEW HOTEL BOOKING REQUEST\n" +

        "========================\n\n" +

        "Guest Name: " +
        firstName +
        " " +
        lastName +
        "\n\n" +

        "Email: " +
        email +
        "\n\n" +

        "Mobile: " +
        phone +
        "\n\n" +

        "Country: " +
        country +
        "\n\n" +

        "Number of Guests: " +
        guests +
        "\n\n" +

        "Check-in: " +
        checkin +
        "\n\n" +

        "Check-out: " +
        checkout +
        "\n\n" +

        "Room Type: " +
        room +
        "\n\n" +

        "Special Request: " +
        request;


    const mailtoLink =

        "mailto:" +
        HOTEL_EMAIL +

        "?subject=" +
        encodeURIComponent(subject) +

        "&body=" +
        encodeURIComponent(body);


    window.location.href =
        mailtoLink;

}


/* =========================================
   CONTACT EMAIL FUNCTION
   ========================================= */

function sendContactEmail(form) {

    const formData =
        new FormData(form);


    const firstName =
        formData.get("firstName");

    const lastName =
        formData.get("lastName");

    const email =
        formData.get("email");

    const country =
        formData.get("country");

    const subject =
        formData.get("subject");

    const message =
        formData.get("message");


    const emailSubject =
        "StayNest Website Contact";


    const emailBody =

        "CONTACT FORM MESSAGE\n" +

        "====================\n\n" +

        "Name: " +
        firstName +
        " " +
        lastName +
        "\n\n" +

        "Email: " +
        email +
        "\n\n" +

        "Country: " +
        country +
        "\n\n" +

        "Subject: " +
        subject +
        "\n\n" +

        "Message:\n" +
        message;


    const mailtoLink =

        "mailto:" +
        HOTEL_EMAIL +

        "?subject=" +
        encodeURIComponent(emailSubject) +

        "&body=" +
        encodeURIComponent(emailBody);


    window.location.href =
        mailtoLink;

}


/* =========================================
   WHATSAPP FUNCTION
   ========================================= */

function openWhatsApp(message) {

    const whatsappURL =

        "https://wa.me/" +
        HOTEL_PHONE +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );

}


/* =========================================
   Q&A SEARCH
   ========================================= */

function searchQuestions() {

    const searchInput =
        document.getElementById("qaSearch");


    const questions =
        document.querySelectorAll(
            ".question-card"
        );


    if (!searchInput) {
        return;
    }


    const searchText =
        searchInput.value.toLowerCase();


    questions.forEach(function (question) {

        const text =
            question.textContent.toLowerCase();


        if (
            text.includes(searchText)
        ) {

            question.style.display =
                "block";

        } else {

            question.style.display =
                "none";

        }

    });

}


/* =========================================
   SCROLL ANIMATION
   ========================================= */

function setupScrollAnimation() {

    const elements =
        document.querySelectorAll(
            ".feature-card, .room-card, .service"
        );


    if (
        !("IntersectionObserver" in window)
    ) {

        return;

    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    elements.forEach(
        function (element) {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(25px)";

            element.style.transition =
                "0.7s ease";

            observer.observe(element);

        }
    );

}


/* Start scroll animation */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setupScrollAnimation();

    }
);
```
