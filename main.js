document.addEventListener("DOMContentLoaded", function () {
    // Initialize AOS library for scroll animations
    AOS.init({
        duration: 800, // Animation duration in milliseconds
        easing: 'ease-in-out', // Easing type
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll to the target element smoothly
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                });
            }
        });
    });

    // Sticky navigation bar
    const navBar = document.querySelector('nav');
    const navBarOffset = navBar.offsetTop;

    function handleScroll() {
        if (window.scrollY >= navBarOffset) {
            // Add a class to make the navigation bar sticky
            navBar.classList.add('sticky');
        } else {
            // Remove the class when scrolling back to the top
            navBar.classList.remove('sticky');
        }
    }

    // Add a scroll event listener to handle the sticky navigation bar
    window.addEventListener('scroll', handleScroll);

    // Add additional JavaScript code as needed for your specific requirements
});
