// JavaScript to retrieve URL parameters and display order details
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const item = urlParams.get('item');
    const quantity = urlParams.get('quantity');
    const address = urlParams.get('address');
    const time = urlParams.get('time');

    // Update the content of the "Order Placed" page
    document.getElementById('order-item').textContent = item;
    document.getElementById('order-quantity').textContent = quantity;
    document.getElementById('order-address').textContent = address;
    document.getElementById('order-time').textContent = time;
});