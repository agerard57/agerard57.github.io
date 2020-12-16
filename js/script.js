function showText(id, delay) {
    var elem = document.getElementById(id);
    setTimeout(function() {
        elem.style.opacity = 1;
    }, delay * 750)
}
window.onload = function() {
    showText('fade1', 7);
    showText('fade2', 8);
    showText('fade3', 9);
}