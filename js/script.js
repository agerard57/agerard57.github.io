var handlerFired;
window.addEventListener('scroll', function (e) {
    var containerTop = document.querySelector('#logo').getBoundingClientRect().top;
    if (containerTop <= 0) {
        if (!handlerFired) {
            handlerFired = 1;
            console.log('container at top of viewport or above');
            document.getElementById("logo_animation").style.display = "block";
            setTimeout(() => {
                document.getElementById("mini_logo").style.left = "9vw";
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

//-----------------------------------Modal-----------------------------------


var modaltitle = document.getElementById("modal-title");
var modalcontent = document.getElementById("modal-text");
var modallang = document.getElementById("modal-languages");


var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


var btnc = document.getElementById("myBtn-C");

btnc.onclick = function () {
    modal.style.display = "block";
    modaltitle.innerHTML = "Projet C"
    modalcontent.innerHTML = "Mise en application des acquis dans le domaine de l'analyse et de la programmation dans un travail de groupe"
    modallang.innerHTML = "Langage de programmation utilisée = C"
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}