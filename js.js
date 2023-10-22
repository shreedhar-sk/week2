// smooth-scroll.js

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navbar links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
            const targetElement = document.getElementById(targetId); // Find the target section

            // Scroll smoothly to the target section
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
// JavaScript to handle form submission and redirect to "Order Placed" page
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Retrieve order details from the form
    const item = document.getElementById('menu-item').value;
    const quantity = document.getElementById('quantity').value;
    const deliveryAddress = document.getElementById('delivery-address').value;
    const deliveryTime = document.getElementById('delivery-time').value;

    // Redirect to the "Order Placed" page with order details as URL parameters
    window.location.href = `order_placed.html?item=${encodeURIComponent(item)}&quantity=${encodeURIComponent(quantity)}&address=${encodeURIComponent(deliveryAddress)}&time=${encodeURIComponent(deliveryTime)}`;
});
