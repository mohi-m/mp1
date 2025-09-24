
// Created a active link functionality of Sticky Navbar
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#navbar a");

    function changeNavActive() {
        let current = "";
        // Get the current scroll position
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Check if we're at the bottom of the page
        if (scrollPosition + windowHeight >= documentHeight - 5) {
            // Highlight the last menu item when at bottom
            current = sections[sections.length - 1].getAttribute("id");
        } else {
            // Normal section detection
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const navbarHeight = document.querySelector('#navbar').offsetHeight;

                // Check if the current scroll position is within the bounds of a section
                // Use navbar height as the offset to account for sticky navbar
                if (scrollPosition >= sectionTop - navbarHeight && scrollPosition < sectionTop + sectionHeight - navbarHeight) {
                    current = section.getAttribute("id");
                }
            });
        }

        // Remove 'active' class from all links and add it to the current one
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.href.includes(current)) {
                link.classList.add("active");
            }
        });
    }

    // Run the function on initial load and every time the user scrolls
    window.addEventListener("scroll", changeNavActive);
    changeNavActive();
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("#navbar");

    function resizeNavBar() {
        const scrollPosition = window.scrollY;

        navbar.classList.remove("small")
        if (scrollPosition >= 80) {
            navbar.classList.add("small");
        }
    }

    window.addEventListener("scroll", resizeNavBar);
    resizeNavBar();
})


document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 1;

    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');

    // Check if slideshow elements exist
    if (!prevBtn || !nextBtn || dots.length === 0) {
        console.log("Slideshow elements not found");
        return;
    }

    // Event listeners
    prevBtn.addEventListener('click', () => plusSlides(-1));
    nextBtn.addEventListener('click', () => plusSlides(1));

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index + 1));
    });

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("mySlides");
        let dotElements = document.getElementsByClassName("dot");

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (let i = 0; i < dotElements.length; i++) {
            dotElements[i].classList.remove("active");
        }

        slides[slideIndex - 1].style.display = "block";
        dotElements[slideIndex - 1].classList.add("active");
    }

    // Initialize
    showSlides(slideIndex);
});


document.addEventListener("DOMContentLoaded", function () {
    function openModal(modalId) {
        document.getElementById(modalId).style.display = "block";
    }

    function closeModal(modalId) {
        document.getElementById(modalId).style.display = "none";
    }

    // Add event listeners to experience items
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openModal(`modal${index + 1}`);
        });
    });

    // Add event listeners to close buttons
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const modal = event.target.closest('.modal');
            if (modal) {
                closeModal(modal.id);
            }
        });
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function (event) {
        const modals = document.getElementsByClassName('modal');
        for (let i = 0; i < modals.length; i++) {
            if (event.target === modals[i]) {
                modals[i].style.display = "none";
            }
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            const modals = document.getElementsByClassName('modal');
            for (let i = 0; i < modals.length; i++) {
                if (modals[i].style.display === 'block') {
                    modals[i].style.display = 'none';
                }
            }
        }
    });
});