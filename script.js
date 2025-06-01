document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector('.image-gallery');
    const images = Array.from(gallery.children);

    // Duplicate images to create a seamless loop
    const duplicateImages = () => {
        images.forEach((image) => {
            const clone = image.cloneNode(true);
            gallery.appendChild(clone);
        });
    };

    duplicateImages(); // Duplicate images once

    // Set up seamless vertical scrolling
    let scrollPosition = 0;
    const scrollSpeed = 1; // Adjust speed as needed

    const seamlessScroll = () => {
        scrollPosition += scrollSpeed;
        gallery.scrollTop = scrollPosition;

        // Seamlessly loop back when reaching the end of the duplicated images
        if (scrollPosition >= gallery.scrollHeight / 2) {
            scrollPosition -= gallery.scrollHeight / 2; // Adjust to maintain smooth flow
        }

        requestAnimationFrame(seamlessScroll);
    };

    seamlessScroll(); // Start the scrolling animation

    const navLinks = document.querySelectorAll(".nav-center ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });
});