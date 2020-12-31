var handlerFired;
window.addEventListener('scroll', function (e)
{
    var containerTop = document.querySelector('.presentation').getBoundingClientRect().top;
    if (containerTop <= 0)
    {
        if (!handlerFired)
        {
            handlerFired = 1;
            console.log('container at top of viewport or above');
            document.getElementById("logo_animation").style.display = "block";
            setTimeout(() =>
            {
                document.getElementById("mini_logo").style.left = "9vw";
                document.getElementById("mini_logo").style.opacity = "100%";
            }, 100);

        }
    }
    if (containerTop > 0)
    {
        handlerFired = 0;
        document.getElementById("mini_logo").style.left = "0vw";
        document.getElementById("mini_logo").style.opacity = "0%";
        document.getElementById("navbar").style.marginLeft = "0px";


    }
});


function showText(id, delay) {
    var elem = document.getElementById(id);
    setTimeout(function () {
        elem.style.opacity = 1;
    }, delay * 750)
}
window.onload = function () {
    showText('fade1', 7);
    showText('fade2', 8);
    showText('fade3', 9);
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}