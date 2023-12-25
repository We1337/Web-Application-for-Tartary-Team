/**
 * Document for Navbar Burger Toggle
 *
 * This script adds click event listeners to "navbar-burger" elements to toggle
 * the visibility of the associated navigation menu. It uses the "is-active" class
 * to show/hide the burger icon and the menu.
 *
 * Author: We1337
 * Version: 1.0.0
 */

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get all "navbar-burger" elements
    let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {
                // Get the target from the "data-target" attribute
                let target = $el.dataset.target;
                let $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});