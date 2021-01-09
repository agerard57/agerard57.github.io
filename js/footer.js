var handlerFired;
window.addEventListener('scroll', function (e) {
    var containerTop = document.querySelector('#logo').getBoundingClientRect().top;
    if (containerTop <= 0) {
        if (!handlerFired) {
            handlerFired = 1;
            console.log('container at top of viewport or above');
            document.getElementById("logo_animation").style.display = "block";
            setTimeout(() => {
                document.getElementById("mini_logo").style.left = "5vw";
                document.getElementById("mini_logo").style.opacity = "100%";
            }, 100);

        }
    }
    if (containerTop > 0) {
        handlerFired = 0;
        document.getElementById("mini_logo").style.left = "0vw";
        document.getElementById("mini_logo").style.opacity = "0%";
        document.getElementById("navbar").style.marginLeft = "0px";


    }
});