document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded Successfully! 🚀");

    // ========== 🏷️ Active Navigation Highlight ==========
    const navLinks = document.querySelectorAll(".nav-right li a, .mobile-menu a");

    function updateActiveLink() {
        const currentPage = window.location.pathname.split("/").pop() || "index.html"; // Default to home page if empty
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === currentPage) {
                link.classList.add("active");
            }
        });
    }

    updateActiveLink(); // Run on page load

    // ========== 🍔 Mobile Menu Toggle ==========
    document.addEventListener("DOMContentLoaded", function () {
        console.log("JavaScript Loaded Successfully! 🚀");
    
        // Selecting elements
        const hamburger = document.querySelector(".hamburger");
        const mobileMenu = document.querySelector(".mobile-menu");
    
        // ✅ Function to toggle menu visibility
        function toggleMenu() {
            if (mobileMenu) {
                mobileMenu.classList.toggle("open"); // Toggle the "open" class
            }
        }
    
        function closeMenu() {
            if (mobileMenu) {
                mobileMenu.classList.remove("open"); // Ensure menu closes when clicking a link
            }
        }
    
        // ✅ Event listeners
        if (hamburger && mobileMenu) {
            hamburger.addEventListener("click", toggleMenu);
    
            // Close menu when clicking a link inside mobile menu
            document.querySelectorAll(".mobile-menu a").forEach(link => {
                link.addEventListener("click", closeMenu);
            });
        }
    });
    

    // ========== 🎬 Skills Pop-in & Pop-out Animation ==========
    const skills = document.querySelectorAll(".skills-grid span");

    function checkSkills() {
        skills.forEach((skill, index) => {
            const skillTop = skill.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (skillTop < windowHeight - 50) {
                skill.classList.add("show");
                skill.style.transitionDelay = `${index * 0.08}s`; // Staggered Effect
            } else {
                skill.classList.remove("show");
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

    // ========== 🌟 Smooth Scrolling for All Links ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1); // Remove "#"
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust scroll position
                    behavior: "smooth" // Smooth scrolling effect
                });
            }

            // Close the mobile menu after navigating (if open)
            if (mobileMenu && mobileMenu.classList.contains("open")) {
                mobileMenu.classList.remove("open");
            }
        });
    });
});
