document.addEventListener('DOMContentLoaded', function () {
    // Function to add a fade-in animation to an element
    function addFadeInAnimation(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                    observer.unobserve(element); // Remove the observer after animating
                }
            });
        });

        observer.observe(element);
    }

    // Add animations to the header, navigation, containers, and footer
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const containers = document.querySelectorAll('.container');
    const footer = document.querySelector('footer');

    addFadeInAnimation(header);
    addFadeInAnimation(nav);
    containers.forEach(container => {
        addFadeInAnimation(container);
    });
    addFadeInAnimation(footer);
});
