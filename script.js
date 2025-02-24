document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded Successfully! 🚀");

    // ========== 🏷️ Active Navigation Highlight ==========
    const navLinks = document.querySelectorAll(".nav-right li a");

    function updateActiveLink() {
        let currentPage = window.location.pathname.split("/").pop();
        if (currentPage === "") {
            currentPage = "index.html"; // Default to home page if empty
        }
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === currentPage) {
                link.classList.add("active");
            }
        });
    }

    updateActiveLink(); // Run on page load


    document.addEventListener("DOMContentLoaded", function () {
        const text = "Welcome";
        let index = 0;
        function typeEffect() {
            if (index < text.length) {
                document.getElementById("hero-title").textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, 150);
            }
        }
        typeEffect();
    });
    

    // ========== 🎨 Skills Pop-in & Pop-out Animation ==========
    const skills = document.querySelectorAll(".skills-grid span");

    function checkSkills() {
        skills.forEach((skill, index) => {
            const skillTop = skill.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (skillTop < windowHeight - 50) {
                skill.classList.add("show");
                skill.classList.remove("hide");
                skill.style.transitionDelay = `${index * 0.08}s`; // Staggered Effect
            } else {
                skill.classList.remove("show");
                skill.classList.add("hide");
            }
        });
    }

    window.addEventListener("scroll", checkSkills);
    checkSkills(); // Run on page load

    // ========== 🎬 Work Experience Cards Animation ==========
    const jobEntries = document.querySelectorAll(".job");

    function revealJobs() {
        jobEntries.forEach((job, index) => {
            const jobTop = job.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (jobTop < windowHeight - 50) {
                job.classList.add("show");
                job.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`;
            } else {
                job.classList.remove("show");
                job.style.animation = "none";
            }
        });
    }

    window.addEventListener("scroll", revealJobs);
    revealJobs(); // Run on page load

    // ========== 🚀 Projects Reveal Animation ==========
    const projects = document.querySelectorAll(".project");

    function revealProjects() {
        projects.forEach((project, index) => {
            const projectTop = project.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (projectTop < windowHeight - 50) {
                project.classList.add("show");
                project.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s both`;
            } else {
                project.classList.remove("show");
            }
        });
    }

    window.addEventListener("scroll", revealProjects);
    revealProjects(); // Run on page load

    // ========== 📌 Footer Placement Fix ==========
    function adjustFooter() {
        const footer = document.querySelector("footer");
        const mainContent = document.querySelector(".main-content");

        if (footer && mainContent) {
            const windowHeight = window.innerHeight;
            const bodyHeight = document.body.offsetHeight;

            if (bodyHeight < windowHeight) {
                footer.style.position = "absolute";
                footer.style.bottom = "0";
                footer.style.width = "100%";
            } else {
                footer.style.position = "relative";
            }
        }
    }

    window.addEventListener("resize", adjustFooter);
    adjustFooter(); // Run on page load
});



document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Get user input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate inputs
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before sending.");
            return;
        }

        // Create the mailto link
        const mailtoLink = `mailto:bhavireddyk08@gmail.com?subject=New message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;

        // Redirect user to email client
        window.location.href = mailtoLink;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-right");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Close menu when clicking on a link (for better UX)
    document.querySelectorAll(".nav-right li a").forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-right");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
