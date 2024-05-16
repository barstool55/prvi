document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('showButton');
    var demo = document.getElementById('demo');

    button.addEventListener('click', function() {
        demo.style.display = 'block';
    });
});
